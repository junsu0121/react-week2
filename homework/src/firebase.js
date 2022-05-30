import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT9nLacTXV31J23NS44NDloCZQ6cFO5aU",
  authDomain: "sparta-react-basic-a8590.firebaseapp.com",
  projectId: "sparta-react-basic-a8590",
  storageBucket: "sparta-react-basic-a8590.appspot.com",
  messagingSenderId: "534990344234",
  appId: "1:534990344234:web:600711da54d5506a94b353",
  measurementId: "G-QYE5BC9GMC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
