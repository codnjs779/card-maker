import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZTxCr0Pw7NYb69i7LJ_amt3ahriO8vpg",
    authDomain: "business-card-maker-edb91.firebaseapp.com",
    projectId: "business-card-maker-edb91",
    storageBucket: "business-card-maker-edb91.appspot.com",
    messagingSenderId: "937660619530",
    appId: "1:937660619530:web:482ee203ac3ac0b4ee38f3",
    measurementId: "G-503ZJ2S171",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);
