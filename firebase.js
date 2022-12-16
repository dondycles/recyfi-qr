// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnf96jY9yVZQUa4thP8nbCrZ5AQwzr_s8",
  authDomain: "recyfi-v2.firebaseapp.com",
  databaseURL:
    "https://recyfi-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recyfi-v2",
  storageBucket: "recyfi-v2.appspot.com",
  messagingSenderId: "1041018790428",
  appId: "1:1041018790428:web:6d02558b1b86dce87135d9",
  measurementId: "G-7PKPZKPEG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
