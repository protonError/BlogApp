// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgcmyPujGVf2wYRsvVTHum4OGn2IHK3hA",
  authDomain: "blogapp-c18a2.firebaseapp.com",
  projectId: "blogapp-c18a2",
  storageBucket: "blogapp-c18a2.appspot.com",
  messagingSenderId: "735715017210",
  appId: "1:735715017210:web:cabbf853d69e53ea646443",
  measurementId: "G-74B36MXVPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db= getFirestore(app);