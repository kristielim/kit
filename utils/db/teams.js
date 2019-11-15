import shortid from "shortid";

import firebase from "../firebase/firebase";
import { setCurrentChallenge } from "./challenges";
import { getCurrentValue } from "./helper";

async function getTeamId(teamCode) {
  return getCurrentValue(`teamCodes/${teamCode}`);
}

export async function createTeam(teamName, userId) {
  let teamCode = shortid.generate();

  // race condition in the event that two users generate the same team code and check for existence at the same time
  // very unlikely but should come up with a solution for this eventually
  // TODO: fix race condition
  let teamCodeExists = await getTeamId(teamCode);
  while (teamCodeExists) {
    teamCode = shortid.generate();
    teamCodeExists = await getTeamId(teamCode);
  }
  const team = {
    code: teamCode,
    name: teamName,
    score: 0,
    users: [userId]
  };

  // Create team
  const teamRef = await firebase
    .database()
    .ref("/teams/")
    .push(team);

  const teamId = teamRef.key;

  // Create lookup from team code to team id
  firebase
    .database()
    .ref(`teamCodes/${teamCode}`)
    .set(teamId);

  setCurrentChallenge(teamId);

  return teamCode;
}
