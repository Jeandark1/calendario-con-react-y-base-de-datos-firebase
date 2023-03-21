// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGDwYQB-jqB4Ln56_AXagE3zHIj-lhQI0",
    authDomain: "tareas-react-4f0f7.firebaseapp.com",
    projectId: "tareas-react-4f0f7",
    storageBucket: "tareas-react-4f0f7.appspot.com",
    messagingSenderId: "609513690294",
    appId: "1:609513690294:web:5e30596a558cfecb2c8217"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);