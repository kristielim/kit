import firebase from "../firebase/firebase";

export async function getCurrentValue(url) {
  const snapshot = await firebase
    .database()
    .ref(url)
    .once("value");
  return snapshot.val();
}

export async function setLastUpdatedChallengesScreenForTeam(teamId) {
  console.log("entered setLastUpdatedChallengesScreenForTeam")
  const currentTime = firebase.database.ServerValue.TIMESTAMP;
  const usersInTeam = await getCurrentValue(`/teams/${teamId}/users`);
  console.log(usersInTeam)
  await Promise.all(
    usersInTeam.map((user) => {
      console.log(`${user} | ${currentTime}`)
      firebase
        .database()
        .ref(`/users/${user}/lastUpdatedChallengesScreen`)
        .set(currentTime);
    })
  );
  console.log("exiting setLastUpdatedChallengesScreenForTeam")
}