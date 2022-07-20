import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



export function FirebaseInicialize() {
// Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyD2I3kurdpTTZksUGT8jdU_NpXdD92u1x8",
        authDomain: "nico-app3.firebaseapp.com",
        projectId: "nico-app3",
        storageBucket: "nico-app3.appspot.com",
        messagingSenderId: "820900891368",
        appId: "1:820900891368:web:ebe3da271523b5d9ca575d"
    };
    
    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default FirebaseInicialize