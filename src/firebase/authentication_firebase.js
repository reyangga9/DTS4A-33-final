// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw-jTSIa88YdMeVdaxzrcHd4SqIglY9g0",
  authDomain: "dota2heroes-a27d4.firebaseapp.com",
  projectId: "dota2heroes-a27d4",
  storageBucket: "dota2heroes-a27d4.appspot.com",
  messagingSenderId: "415376008832",
  appId: "1:415376008832:web:53bc035fe62ee0e22b2865",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);

    //
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Fungsi untuk sign out
const signOutFromApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { auth, register, login, signOutFromApps };
