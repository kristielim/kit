import firebase from "../firebase/firebase";

import { getCurrentValue, setLastUpdatedChallengesScreenForTeam } from "./helper";
import { getTeam } from "./teams";

export async function openChallenge(assignedChallengeId, userId) {
  const openTime = firebase.database.ServerValue.TIMESTAMP;

  firebase
    .database()
    .ref(`/assignedChallenges/${assignedChallengeId}/opened`)
    .update({ [userId]: openTime });
  
  const assignedChallenge = await getCurrentValue(`/assignedChallenges/${assignedChallengeId}`);
  setLastUpdatedChallengesScreenForTeam(assignedChallenge.teamId); //Because this funciton mutates assignedChallenges, we must call this helper function so all users's screens re-render
}

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

  setLastUpdatedChallengesScreenForTeam(teamId); //Because this funciton mutates assignedChallenges, we must call this helper function so all users's screens re-render
}

export async function listenAllAssignedChallenges(userId, callback) {
  //This listener takes advantage of a specfic field set on each user object, which tracks the last time the user's challenges screen should have updated. It it set with a helper function whenever challenges that the user can interact with have mutated
  const listener = firebase.database().ref(`/users/${userId}/lastUpdatedChallengesScreen`);
  listener.on("value", async snapshot => {
    const assignedChallenges = await getAllAssignedChallenges(userId);
    console.log("listener has pulled:")
    // console.log(assignedChallenges)
    callback(assignedChallenges);
    console.log("callback complete")
  });
}

export async function getAllAssignedChallenges(userId) {
  const teamIds = await getCurrentValue(`/users/${userId}/teams`);
  const data = await Promise.all(
    teamIds.map(async teamId => {
      return {
        challengeId: await getCurrentChallengeId(teamId),
        team: await getTeam(teamId)
      };
    })
  );

  const assignedChallenges = await Promise.all(
    data.map(async assignedChallengeId => {
      let assignedChallenge = await getCurrentValue(
        `/assignedChallenges/${assignedChallengeId.challengeId}`
      );
      let challengeDetails = await getCurrentValue(
        `/challenges/${assignedChallenge.challengeId}`
      );
      if (assignedChallenge) {
        //Augment assignedChallenges with various team information
        assignedChallenge["users"] = assignedChallengeId.team.users;
        assignedChallenge["teamName"] = assignedChallengeId.team.name;

        //Augment assignedChallenges with associated challenge details (like name of challenge, description etc)
        assignedChallenge["challengeDetails"] = challengeDetails;

        //Add the id
        assignedChallenge["assignedChallengeId"] =
          assignedChallengeId.challengeId;

        return assignedChallenge;
      }
    })
  );
  return assignedChallenges;
}

export async function submitChallenge(assignedChallengeId, userId, submission) {
  console.log(`\nenetered submitChallenge with assChallengeId: ${assignedChallengeId}`)
  await firebase
    .database()
    .ref(`/assignedChallenges/${assignedChallengeId}/submissions`)
    .update({[userId]: submission}, (error) => {
      if (error) {
        console.log(`The write failed with error: ${error}`)
      } else {
        console.log(`The write was a success`)
      }
    });
  
  const assignedChallenge = await getCurrentValue(`/assignedChallenges/${assignedChallengeId}`);
  setLastUpdatedChallengesScreenForTeam(assignedChallenge.teamId); //Because this funciton mutates assignedChallenges, we must call this helper function so all users's screens re-render
}