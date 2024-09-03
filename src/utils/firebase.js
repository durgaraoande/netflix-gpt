// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSPQEEut7Bt4B_zCusnHIO608Rbzha3UA",
  authDomain: "netflix-gpt-186b8.firebaseapp.com",
  projectId: "netflix-gpt-186b8",
  storageBucket: "netflix-gpt-186b8.appspot.com",
  messagingSenderId: "1042506978939",
  appId: "1:1042506978939:web:4e0acf5d1d6836dd79f4de",
  measurementId: "G-PVPMLVY8V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();