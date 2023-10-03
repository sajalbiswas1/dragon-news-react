// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwMhduPjGb8vtXvekp5aImADw-LdOSeAA",
  authDomain: "dragon-news-react-ea76c.firebaseapp.com",
  projectId: "dragon-news-react-ea76c",
  storageBucket: "dragon-news-react-ea76c.appspot.com",
  messagingSenderId: "616123244484",
  appId: "1:616123244484:web:8acec5cb585af501970e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;