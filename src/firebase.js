import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_NE2y41_llo4NSUpsHlsT8CXsJbK2VdE",
  authDomain: "firstwebhosting-a3039.firebaseapp.com",
  projectId: "firstwebhosting-a3039",
  storageBucket: "firstwebhosting-a3039.appspot.com",
  messagingSenderId: "1081675681257",
  appId: "1:1081675681257:web:1d869c30b06e7aaf1acf78",
  measurementId: "G-7M32FQYGD9",
};

//   Init firebase App
initializeApp(firebaseConfig);

// init services
export const db = getFirestore();

// Collection Ref
export const colRef = collection(db, "client");


