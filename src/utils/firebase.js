// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD4TYaVH3IJYDwDdTIW616eD-CUPKomKvk',
  authDomain: "netflixgpt-93121.firebaseapp.com",
  projectId: "netflixgpt-93121",
  storageBucket: "netflixgpt-93121.appspot.com",
  messagingSenderId: "414992546596",
  appId: "1:414992546596:web:a6ccc3270a0f879db491b1",
  measurementId: "G-0CQY49M9LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();