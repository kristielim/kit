import firebase from "../firebase/firebase";

export async function setCurrentChallenge(teamId) {
  const challengeId = 1; // TODO: change to random number from 0 to challenges.length
  const time = firebase.database.ServerValue.TIMESTAMP;
  // time since the Unix epoch, in milliseconds) as determined by the Firebase servers
  // see https://firebase.google.com/docs/reference/js/firebase.database.ServerValue

  const newChallenge = {
    challengeId,
    teamId,
    assignedTime: time
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

export async function createTeam(teamId) {
  firebase
    .database()
    .ref(`/teams/${teamId}`)
    .set({
      archivedChallenges: ["hellohello", "ldjflskd"],
      code: "wxyz",
      name: "Udon",
      score: 0,
      users: ["1234", "5678"]
    });
}
