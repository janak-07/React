// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcf_v_i_3J46QmKfbWu-1JG2YvHmcCw9k",
  authDomain: "fir-b4102.firebaseapp.com",
  projectId: "fir-b4102",
  storageBucket: "fir-b4102.firebasestorage.app",
  messagingSenderId: "104582204940",
  appId: "1:104582204940:web:6c019deff39b6fb2a9e829",
  measurementId: "G-DFEZ31J9FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics};