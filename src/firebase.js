import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAl18mrt5PqTwhMd6549NzvNDOIub0gVlw",
    authDomain: "employx-72b7f.firebaseapp.com",
    projectId: "employx-72b7f",
    storageBucket: "employx-72b7f.firebasestorage.app",
    messagingSenderId: "65230385927",
    appId: "1:65230385927:web:2b8b25f38ec57eeddbcba2",
    measurementId: "G-CWSBX1YVXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
