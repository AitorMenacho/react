// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaeozLGeEYAjeaG28zVGm4lsw_enLdSvY",
    authDomain: "react-curso-39c99.firebaseapp.com",
    projectId: "react-curso-39c99",
    storageBucket: "react-curso-39c99.appspot.com",
    messagingSenderId: "798392646519",
    appId: "1:798392646519:web:8f05151b63600f65847f72"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseBD = getFirestore(FirebaseApp);