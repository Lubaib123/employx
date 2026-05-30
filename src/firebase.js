import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjdTpD46yyx-TLd2FIw5C3JaI-BM_SMP8",
  authDomain: "employx-web.firebaseapp.com",
  projectId: "employx-web",
  storageBucket: "employx-web.firebasestorage.app",
  messagingSenderId: "1092816874568",
  appId: "1:1092816874568:web:686da1e0a2c3fccddcfc7d",
  measurementId: "G-Y75E9SC86N"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
