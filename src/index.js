import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//-------------------SEPARAR EN OTRO ARCHIVO-------------------------------------------------------

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AppContext from './AppContext';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzqwJrngA50MgPt6mtRYjL9t4qLElUhvk",
  authDomain: "nico-app-88e7f.firebaseapp.com",
  projectId: "nico-app-88e7f",
  storageBucket: "nico-app-88e7f.appspot.com",
  messagingSenderId: "264102794474",
  appId: "1:264102794474:web:6960c6aca328ba58767393"
};

// Initialize Firebase
initializeApp(firebaseConfig);


//-------------------------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>
);

reportWebVitals();
