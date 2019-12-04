import firebase from "../firebase/firebase";
import { setCurrentChallenge } from "./challenges";
import { getCurrentValue } from "./helper";

export async function getTeamIdFromTeamCode(teamCode) {
  return getCurrentValue(`/teamCodes/${teamCode}`);
}

export async function getTeam(teamId) {
  return getCurrentValue(`/teams/${teamId}/`);
}

async function addUserToTeam(teamId, userId) {
  // Add team to user
  const teamIds = await getCurrentValue(`/users/${userId}/teams`);
  // Filter for uniqueness just in case
  const newTeams = teamIds
    ? [teamId, ...teamIds].filter(
        (teamId, index, teamIds) =>
          teamIds.indexOf(teamId) === index && teamId !== undefined
      )
    : [teamId];
  firebase
    .database()
    .ref(`/users/${userId}`)
    .update({
      teams: newTeams
    });

  // Add user to team
  const userIds = await getCurrentValue(`/teams/${teamId}/users`);
  // Filter for uniqueness just in case
  const newUsers = userIds
    ? [userId, ...userIds].filter((v, i, a) => a.indexOf(v) === i)
    : [userId];
  firebase
    .database()
    .ref(`/teams/${teamId}`)
    .update({
      users: newUsers
    });
}

export async function joinTeam(teamCode, userId) {
  const teamId = await getTeamIdFromTeamCode(teamCode);
  addUserToTeam(teamId, userId);
}

// Helper create team function that creates a new team without any checks
async function _createTeam(teamName, userId) {
  const team = {
    name: teamName,
    score: 0,
    users: [userId]
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
    .update({ code: teamCode });

  return [teamId, teamCode];
}

export async function createTeam(teamName, userId) {
  let [teamId, teamCode] = await _createTeam(teamName, userId);

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
        team.users.map(async userId => {
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
    let teamIds = snapshot.val();
    if (!teamIds) {
      callback([]);
      return;
    }
    // Workaround for weird issue that had some teamIds set as undefined
    teamIds = teamIds.filter(teamId => teamId != undefined);
    teams = await getTeams(teamIds);
    teams = await augmentTeamsWithUserNames(teams);
    callback(teams);
  });
}
