// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebase_API_KEY,
  authDomain: "netflixgpt-8c5a9.firebaseapp.com",
  projectId: "netflixgpt-8c5a9",
  storageBucket: "netflixgpt-8c5a9.appspot.com",
  messagingSenderId: "165823922092",
  appId: process.env.REACT_APP_firebase_API_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
