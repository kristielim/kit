import firebase from "../firebase/firebase";

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export const getUserId = () => {
  const { currentUser } = firebase.auth();
  return currentUser.uid;
};

// TODO: Kristie actually handle all the errors

export const signOut = () => {
  try {
    firebase.auth().signOut();
  } catch (error) {
    console.log(error.toString(error));
  }
};

export const signIn = (email, password, setError) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      // see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#sign-inwith-email-and-password
      let errorCode;
      if (error && error.hasOwnProperty("code")) {
        errorCode = error.code;
      }
      if (errorCode === "auth/invalid-email") {
        setError("not a valid email");
      } else if (errorCode === "auth/user-not-found") {
        setError("user not found");
      } else if (errorCode === "auth/wrong-password") {
        setError("incorrect password");
      } else {
        setError("something went wrong");
      }
    });
};

export const signUp = (email, password) => {
  try {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        signIn(email, password);
      });
  } catch (error) {
    console.log(error.toString(error));
  }
};

// returns status of signup email as a string
export const checkSignUpEmail = async email => {
  try {
    const signInMethods = await firebase
      .auth()
      .fetchSignInMethodsForEmail(email);
    if (signInMethods.length === 0) {
      return "valid";
    } else {
      return "email already in use";
    }
  } catch (error) {
    return "not a valid email";
  }
};

/* Switched to email authentication but might bring this back as an option
import { FACEBOOK_APP_ID } from "react-native-dotenv";
import * as Facebook from "expo-facebook";

export default async function logIn() {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions
    } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ["public_profile"]
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      alert("Logged in!", `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
*/
// import { AsyncStorage } from "react-native";

// export const USER_KEY = "auth-demo-key";

// export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

// export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

// export const isSignedIn = () => {
//   return new Promise((resolve, reject) => {
//     AsyncStorage.getItem(USER_KEY)
//       .then(res => {
//         if (res !== null) {
//           resolve(true);
//         } else {
//           resolve(false);
//         }
//       })
//       .catch(err => reject(err));
//   });
// };
