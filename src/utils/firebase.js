// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpFNFV-rQ_1QQ7l-5DFYZk7tQT2H8LCbg",
  authDomain: "adarshnetflixgpt.firebaseapp.com",
  projectId: "adarshnetflixgpt",
  storageBucket: "adarshnetflixgpt.appspot.com",
  messagingSenderId: "712255012169",
  appId: "1:712255012169:web:dff329ea4105afe2b0ae98",
  measurementId: "G-7VS9HPF5RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);