import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0elROK3vDzd8dOUibQ0smWOEHph1by1M",
  authDomain: "chat-app-b0d0a.firebaseapp.com",
  projectId: "chat-app-b0d0a",
  storageBucket: "chat-app-b0d0a.appspot.com",
  messagingSenderId: "85859781497",
  appId: "1:85859781497:web:3c1b246a5f4792d52f3da8",
  measurementId: "G-MHVD81R6H8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === "localhost") {
  auth.useEmulator("http://localhost:9099");
  db.useEmulator("localhost", "8080");
}

export { db, auth };
export default firebase;
