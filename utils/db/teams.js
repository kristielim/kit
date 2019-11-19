import firebase from "../firebase/firebase";
import { setCurrentChallenge } from "./challenges";
import { getCurrentValue } from "./helper";

async function getTeamIdFromTeamCode(teamCode) {
  return getCurrentValue(`/teamCodes/${teamCode}`);
}

async function addUserToTeam(teamId, userId) {
  const teamIds = await getCurrentValue(`/users/${userId}/teams`);
  // Filter for uniqueness just in case
  const newTeams = teamIds
    ? [teamId, ...teamIds].filter(
        (value, index, self) => self.indexOf(value) === index
      )
    : [teamId];
  firebase
    .database()
    .ref(`/users/${userId}`)
    .update({
      teams: newTeams
    });
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

export async function getTeamsForUserId(userId) {
  let teams = [];

  const teamIds = await getCurrentValue(`/users/${userId}/teams`);
  teams = await Promise.all(
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
  //Augment team objects with user's names, can be isolated to helper function in future
  await Promise.all(teams.map(async team => {
    const augmentedUsersArr = 
      await Promise.all(team.users.map(async userId => {
        let augmentedObj = {}
        augmentedObj["id"] = userId
        augmentedObj["name"] = await firebase
          .database()
          .ref("/users/" + userId)
          .once("value")
          .then(returned => {
            return returned.val().name
          });
        return augmentedObj
      }));
    team.users = augmentedUsersArr;
  }));
  // console.log(teams)
  return teams;
}
