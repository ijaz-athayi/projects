// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// Securely load environment variables
const firebaseConfig = {
    apiKey: "AIzaSyBqTvqXX_ktQdijZ3ddRBx4v9YRdLdCWT8",
    authDomain: "login-with-mongodb.firebaseapp.com",
    projectId: "login-with-mongodb",
    storageBucket: "login-with-mongodb.firebasestorage.app",
    messagingSenderId: "635792523387",
    appId: "1:635792523387:web:cfc0331ec33ef49237a2de",
    measurementId: "G-KD59FQXKPG"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Social authentication providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();


export default app;

