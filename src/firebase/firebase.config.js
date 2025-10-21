// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9Zo_bWxaN_JvNpnFMU10JokAfa-nKdcM",
  authDomain: "green-nest-indore-plant-care.firebaseapp.com",
  projectId: "green-nest-indore-plant-care",
  storageBucket: "green-nest-indore-plant-care.firebasestorage.app",
  messagingSenderId: "904478713578",
  appId: "1:904478713578:web:dd860a262d3b5a27f15993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);