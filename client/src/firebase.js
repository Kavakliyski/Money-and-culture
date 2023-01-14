
// import firebaseApiKey from "../firebasekey";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_FIREBASE,
    authDomain: "money-and-culture.firebaseapp.com",
    projectId: "money-and-culture",
    storageBucket: "money-and-culture.appspot.com",
    messagingSenderId: "625179613928",
    appId: "1:625179613928:web:f8eb059539bcaf54c0c75d",
    measurementId: "G-96YP5RF33E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');

export const firestoreFirebase = getFirestore(app);
