// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3XrBsQaCEoKUSKZBp7IIxsYvnx9quzuE",
    authDomain: "email-password-auth-eb0fa.firebaseapp.com",
    projectId: "email-password-auth-eb0fa",
    storageBucket: "email-password-auth-eb0fa.appspot.com",
    messagingSenderId: "1002718954458",
    appId: "1:1002718954458:web:3a0d7d625dd9331f15f6e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app