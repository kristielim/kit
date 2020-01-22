import firebase from "../firebase/firebase";
import { setCurrentChallenge } from "./challenges";
import { getCurrentValue } from "./helper";

export async function getTeamIdFromTeamCode(teamCode) {
  return getCurrentValue(`/teamCodes/${teamCode}`);
}

export async function getTeam(teamId) {
  return getCurrentValue(`/teams/${teamId}/`);
}

// Returns an array of team ids given a user id
async function getTeamIdsForUserId(userId) {
  let teamIds = [];
  try {
    const teamIdsObj = await getCurrentValue(`/users/${userId}/teams`);
    if (teamIdsObj) {
      teamIds = Object.values(teamIdsObj);
    }
    return teamIds;
  } catch {
    console.log("Error: unable to get current teams for user");
  }
}

// Returns an array of user ids given a team id
async function getUserIdsForTeamId(teamId) {
  let userIds = [];
  try {
    const userIdsObj = await getCurrentValue(`/teams/${teamId}/users`);
    if (userIdsObj) {
      userIds = Object.values(userIdsObj);
    }
    return userIds;
  } catch {
    console.log("Error: unable to get current users for teams");
  }
}

async function addUserToTeam(teamId, userId) {
  // Add team to user

  // Check that team is not in user already
  const teamIds = await getTeamIdsForUserId(userId);
  if (!teamIds.includes(userId)) {
    firebase
      .database()
      .ref(`/users/${userId}/teams`)
      .push(teamId)
      .then(() => {
        // Add user to team
        firebase
          .database()
          .ref(`/teams/${teamId}/users`)
          .push(userId);
      })
      .catch(() => {
        console.log("Error: Failed to add team to user");
      });
  }
}

export async function joinTeam(teamCode, userId) {
  const teamId = await getTeamIdFromTeamCode(teamCode);
  addUserToTeam(teamId, userId);
}

// Helper create team function that creates a new team without any checks
async function _createTeam(teamName, userId, icon) {
  const team = {
    name: teamName,
    score: 0
  };

  // Create team
  let teamRef = await firebase
    .database()
    .ref("/teams/")
    .push(team);

  let teamId = teamRef.key;

  // Use the last six digits of team id for the team code
  let teamCode = teamId.slice(-6);

  // Add code field to team
  await firebase
    .database()
    .ref(`/teams/${teamId}`)
    .update({ code: teamCode, icon });

  return [teamId, teamCode];
}

export async function createTeam(teamName, userId, icon) {
  let [teamId, teamCode] = await _createTeam(teamName, userId, icon);

  // Race condition in the event that two users generate the same team code and check for existence at the same time
  // Very unlikely but might want to come up with a solution for this eventually
  let teamCodeExists = await getTeamIdFromTeamCode(teamCode);

  while (teamCodeExists) {
    // Delete team
    firebase
      .database()
      .ref(`/teams/${teamId}`)
      .remove();

    const [newTeamId, newTeamCode] = await _createTeam(teamName, userId);
    teamId = newTeamId;
    teamCode = newTeamCode;
    teamCodeExists = await getTeamIdFromTeamCode(teamCode);
  }

  // Create lookup from team code to team id
  firebase
    .database()
    .ref(`teamCodes/${teamCode}`)
    .set(teamId);

  setCurrentChallenge(teamId);

  addUserToTeam(teamId, userId);

  return teamCode;
}

async function getTeams(teamIds) {
  if (!teamIds) {
    return [];
  }
  return Promise.all(
    teamIds.map(teamId => {
      //Using Promise.all avoids making the _.map an async function
      return firebase
        .database()
        .ref("/teams/" + teamId)
        .once("value")
        .then(returned => {
          return returned.val();
        });
    })
  );
}

async function augmentTeamsWithUserNames(teams) {
  if (!teams) {
    return [];
  }
  await Promise.all(
    teams.map(async team => {
      const augmentedUsersArr = await Promise.all(
        Object.values(team.users).map(async userId => {
          let augmentedObj = {};
          augmentedObj["id"] = userId;
          augmentedObj["name"] = await firebase
            .database()
            .ref("/users/" + userId)
            .once("value")
            .then(returned => {
              return returned.val().name;
            });
          return augmentedObj;
        })
      );
      team.users = augmentedUsersArr;
    })
  );
  return teams;
}

// callback runs whenever teams changes
// callback is passed an array of teams
export async function getTeamsForUserId(userId, callback) {
  let teams = [];

  // Call callback whenever teams change
  const teamIdsSnapshot = firebase.database().ref(`/users/${userId}/teams`);

  teamIdsSnapshot.on("value", async snapshot => {
    const teamIdObj = snapshot.val();
    if (!teamIdObj) {
      callback([]);
      return;
    }
    const teamIds = Object.values(teamIdObj);
    let teams = await getTeams(teamIds);
    teams = await augmentTeamsWithUserNames(teams);
    callback(teams);
  });
}
