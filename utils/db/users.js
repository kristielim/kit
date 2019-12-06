import firebase from "../firebase/firebase";
import { getCurrentValue } from "./helper";

export async function getUsername(userId) {
  return getCurrentValue(`/users/${userId}/name`);
}

export async function updateUsername(userId, currentName) {
  firebase
    .database()
    .ref(`/users/${userId}`)
    .update({
      name: currentName
    });
}
