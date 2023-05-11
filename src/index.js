import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNAT-NufAZWQKevwSBpbLo1HLWdzYm-0w",
  authDomain: "weather-app-f672a.firebaseapp.com",
  projectId: "weather-app-f672a",
  storageBucket: "weather-app-f672a.appspot.com",
  messagingSenderId: "268943571591",
  appId: "1:268943571591:web:0be58ed5a121e8630e9622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

