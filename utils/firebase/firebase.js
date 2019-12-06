import * as firebase from "firebase";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID,
  FIREBASE_STORAGE_URL
} from "react-native-dotenv";

// Initialize Firebase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_URL,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;