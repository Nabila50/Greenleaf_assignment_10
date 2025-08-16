// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX7mpFhrEa9Ee_bK5qbryHg0CYTrsv7K4",
  authDomain: "garden-community-website.firebaseapp.com",
  projectId: "garden-community-website",
  storageBucket: "garden-community-website.firebasestorage.app",
  messagingSenderId: "30083527305",
  appId: "1:30083527305:web:038c10350ec8595c060c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export default app;