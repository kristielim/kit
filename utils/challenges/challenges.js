import firebase from "../firebase/firebase";

export async function setCurrentChallenge(teamId) {
  const challengeId = 0; // TODO: change to random number from 0 to challenges.length
  const time = 0; // TODO: use moments or other api to get current time
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
