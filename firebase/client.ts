// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqBiVxJOmmCO5u0d4qQjT0eV1pxt-SFp4",
    authDomain: "prepwise-10a3a.firebaseapp.com",
    projectId: "prepwise-10a3a",
    storageBucket: "prepwise-10a3a.firebasestorage.app",
    messagingSenderId: "385667097924",
    appId: "1:385667097924:web:8432500b72bf9b53fee311",
    measurementId: "G-VKKTT4SVVY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app)