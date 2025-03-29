// frontend/src/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyANcow1gIRRl9gZhVNxpD5D5PTzum8D-Oo",
  authDomain: "mapt-6c654.firebaseapp.com",
  databaseURL: "https://mapt-6c654-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mapt-6c654",
  storageBucket: "mapt-6c654.appspot.com",
  messagingSenderId: "205989964431",
  appId: "1:205989964431:web:67b5c9f576a051efecdefa",
  measurementId: "G-RMPTWK2TC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
