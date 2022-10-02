// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHdUhV0yPV4UzNMzhaOf_lmPJFlZ0MZUs",
  authDomain: "my-course-8392f.firebaseapp.com",
  projectId: "my-course-8392f",
  storageBucket: "my-course-8392f.appspot.com",
  messagingSenderId: "413712113925",
  appId: "1:413712113925:web:0ed719e321bd187da4576c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
