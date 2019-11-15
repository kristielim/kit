import firebase from "../firebase/firebase";

export async function getCurrentValue(url) {
  const snapshot = await firebase
    .database()
    .ref(url)
    .once("value");
  return snapshot.val();
}
