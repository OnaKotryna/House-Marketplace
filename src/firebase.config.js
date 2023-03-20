// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA3271llLKroxq5jw71K8HoHFrU0MGs1M",
  authDomain: "house-marketplace-5db7a.firebaseapp.com",
  projectId: "house-marketplace-5db7a",
  storageBucket: "house-marketplace-5db7a.appspot.com",
  messagingSenderId: "440936951034",
  appId: "1:440936951034:web:ae82389729c046b29c6d43",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
