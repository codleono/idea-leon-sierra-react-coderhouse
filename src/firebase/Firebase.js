
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7-Jwm1FM-ogUrQCVZGRP5DxOwUasbWEk",
  authDomain: "coderproyecto-cdb10.firebaseapp.com",
  projectId: "coderproyecto-cdb10",
  storageBucket: "coderproyecto-cdb10.appspot.com",
  messagingSenderId: "612815440061",
  appId: "1:612815440061:web:15b7764636b6850cb80fd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
