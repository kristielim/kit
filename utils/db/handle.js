import firebase from "../firebase/firebase";
const _ = require('lodash');

export async function getTeamsForUserId(userId) {
  let teams = []

  const teamIds = await
    firebase
      .database()
      .ref("/users/" + userId)
      .once("value")
      .then((returned) => {
        return returned.val().teams
      });
  
  teams = await Promise.all(_.map(teamIds, teamId => { //Using Promise.all avoids making the _.map an async function
    return firebase
      .database()
      .ref("/teams/" + teamId)
      .once("value")
      .then((returned) => {
        return returned;
      });
  }));
  // console.log(teams)
  return teams
}