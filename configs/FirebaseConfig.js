// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCugek5Rjn5qihyEL1NhEA4wyZZ38hIvxs",
  authDomain: "zenb-b24bc.firebaseapp.com",
  projectId: "zenb-b24bc",
  storageBucket: "zenb-b24bc.appspot.com",
  messagingSenderId: "185658784006",
  appId: "1:185658784006:web:2ca23291498e8836644687",
  measurementId: "G-HWGXSN9JQX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);