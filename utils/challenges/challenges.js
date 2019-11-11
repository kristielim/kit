import firebase from "../firebase/firebase";

export async function setCurrentChallenge(teamId) {
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
    .ref(`/assignedChallenges/`)
    .push(newChallenge);

  const assignedChallengeId = assignedChallengeRef.key;

  firebase
    .database()
    .ref(`/teams/${teamId}`)
    .update({
      currentChallenge: assignedChallengeId
    });
}
