import * as firebase from "firebase";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID
} from "react-native-dotenv";

// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: "kit-app-54bc0.appspot.com",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;