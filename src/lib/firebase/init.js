// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxcFGh-9xugiXUEK5UrMpxPr6XxxwvT9M",
  authDomain: "my-next-app-8814b.firebaseapp.com",
  projectId: "my-next-app-8814b",
  storageBucket: "my-next-app-8814b.firebasestorage.app",
  messagingSenderId: "936679093682",
  appId: "1:936679093682:web:d087d79f4fda1aa399a0ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
