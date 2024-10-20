// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHcaUHDWm02E8Z1WNAG-ezOGrxlYW2TNc",
  authDomain: "networkingproject-64eb7.firebaseapp.com",
  projectId: "networkingproject-64eb7",
  storageBucket: "networkingproject-64eb7.appspot.com",
  messagingSenderId: "1067426777673",
  appId: "1:1067426777673:web:cd1b217953ab4b481e0d98",
  measurementId: "G-Z7LMY2W0DW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
