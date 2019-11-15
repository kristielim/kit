import firebase from "../firebase/firebase";
import { getCurrentValue } from "./helper";

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