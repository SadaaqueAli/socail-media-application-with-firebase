// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYMQegK9UpoDJfqoTEx36ydgAAExcheMI",
  authDomain: "socail-media-42c42.firebaseapp.com",
  projectId: "socail-media-42c42",
  storageBucket: "socail-media-42c42.appspot.com",
  messagingSenderId: "423986639445",
  appId: "1:423986639445:web:40ad1caff30ce7c07d9adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, doc, setDoc, signInWithEmailAndPassword,onAuthStateChanged, };