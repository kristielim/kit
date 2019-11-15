import shortid from "shortid";

import firebase from "../firebase/firebase";
import { setCurrentChallenge } from "./challenges";
import { getCurrentValue } from "./helper";

async function getTeamIdFromTeamCode(teamCode) {
  return getCurrentValue(`/teamCodes/${teamCode}`);
}

export async function createTeam(teamName, userId) {
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

  // Race condition in the event that two users generate the same team code and check for existence at the same time
  // Very unlikely but might want to come up with a solution for this eventually
  let teamCodeExists = await getTeamIdFromTeamCode(teamCode);
  while (teamCodeExists) {
    // Delete team
    firebase
      .database()
      .ref(`/teams/${teamId}`)
      .remove();
    // Create another team
    teamRef = await firebase
      .database()
      .ref("/teams/")
      .push(team);

    teamId = teamRef.key;

    // Use the last six digits of team id for the team code
    teamCode = teamId.slice(-6);
    teamCodeExists = await getTeamIdFromTeamCode(teamCode);
  }

  // Create lookup from team code to team id
  firebase
    .database()
    .ref(`teamCodes/${teamCode}`)
    .set(teamId);

  setCurrentChallenge(teamId);

  // Add to user's team list
  const teamIds = await getCurrentValue(`/users/${userId}/teams`);
  console.log(teamIds);
  // Filter for uniqueness just in case
  const newTeams = teamIds
    ? [teamId, ...teamIds].filter((v, i, a) => a.indexOf(v) === i)
    : [teamId];
  firebase
    .database()
    .ref(`/users/${userId}`)
    .update({
      teams: newTeams
    });

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
          return returned;
        });
    })
  );
  // console.log(teams)
  return teams;
}
