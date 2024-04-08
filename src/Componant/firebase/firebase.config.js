// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC98LT3jr8X5lbeZLqd2BB3JUKHzdwIoyQ",
    authDomain: "build-craft-3e8df.firebaseapp.com",
    projectId: "build-craft-3e8df",
    storageBucket: "build-craft-3e8df.appspot.com",
    messagingSenderId: "829835421335",
    appId: "1:829835421335:web:26da297fbb451f67ce6bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;