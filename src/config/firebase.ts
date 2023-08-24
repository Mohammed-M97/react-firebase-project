// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwq_P899xZ2rEUsypd7kQkbFlOhw9KnNY",
  authDomain: "react-firebase-project-2ca21.firebaseapp.com",
  projectId: "react-firebase-project-2ca21",
  storageBucket: "react-firebase-project-2ca21.appspot.com",
  messagingSenderId: "666681145945",
  appId: "1:666681145945:web:f5938739ff45af57d7cf48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);