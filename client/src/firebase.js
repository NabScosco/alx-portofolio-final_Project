// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homefinder-86f4a.firebaseapp.com",
  projectId: "homefinder-86f4a",
  storageBucket: "homefinder-86f4a.appspot.com",
  messagingSenderId: "367048519480",
  appId: "1:367048519480:web:635ec0f059e99c46d31bcd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
