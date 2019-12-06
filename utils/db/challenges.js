import firebase from "../firebase/firebase";

import { getCurrentValue } from "./helper";
import { getTeam } from "./teams";

export async function getCurrentChallengeId(teamId) {
  return await getCurrentValue(`/teams/${teamId}/currentChallenge`);
}

export async function getChallenge(challengeId) {
  return await getCurrentValue(`assignedChallenges/${challengeId}`);
}

export async function setCurrentChallenge(teamId) {
  // archive challenge if challenge has at least one submission
  const currentChallengeId = await getCurrentChallengeId(teamId);
  const challenge = await getChallenge(currentChallengeId);
  if (challenge && challenge.hasOwnProperty("submissions")) {
    firebase
      .database()
      .ref(`/teams/${teamId}/archivedChallenges`)
      .push(currentChallengeId);
  }

  // pick a random challenge
  const challengeCountSnapshot = await firebase
    .database()
    .ref("/challenges/count")
    .once("value");
  const challengeCount = challengeCountSnapshot.val();
  // challenge ids are indexed at 0
  const challengeId = Math.floor(Math.random() * challengeCount);

  const assignedTime = firebase.database.ServerValue.TIMESTAMP;
  // time since the Unix epoch, in milliseconds) as determined by the Firebase servers
  // see https://firebase.google.com/docs/reference/js/firebase.database.ServerValue

  const newChallenge = {
    challengeId,
    teamId,
    assignedTime
  };

  const assignedChallengeRef = await firebase
    .database()
    .ref("/assignedChallenges/")
    .push(newChallenge);

  const assignedChallengeId = assignedChallengeRef.key;

  firebase
    .database()
    .ref(`/teams/${teamId}`)
    .update({
      currentChallenge: assignedChallengeId
    });
}

export async function getAllAssignedChallenges(userId) {
  const teamIds = await getCurrentValue(`/users/${userId}/teams`);
  const data = await Promise.all(teamIds.map(async(teamId) => {
    return {
      challengeId: await getCurrentChallengeId(teamId),
      team: await getTeam(teamId)
    }
  }));

  const assignedChallenges = await Promise.all(data.map(async (assignedChallengeId) => {
    let assignedChallenge = await getCurrentValue(`/assignedChallenges/${assignedChallengeId.challengeId}`);
    let challengeDetails = await getCurrentValue(`/challenges/${assignedChallenge.challengeId}`);
    if (assignedChallenge){
      //Augment assignedChallenges with various team information
      assignedChallenge["users"] = assignedChallengeId.team.users;
      assignedChallenge["teamName"] = assignedChallengeId.team.name;

      //Augment assignedChallenges with associated challenge details (like name of challenge, description etc)
      assignedChallenge["challengeDetails"] = challengeDetails;
      
      //Add the id
      assignedChallenge["assignedChallengeId"] = assignedChallengeId.challengeId;
      
      return assignedChallenge;
    }
  }));
  return assignedChallenges;
}

export async function submitChallenge(assignedChallengeId, userId, submission) {
  firebase
    .database()
    .ref(`/assignedChallenges/${assignedChallengeId}/submissions`)
    .push({[userId]: submission});
}