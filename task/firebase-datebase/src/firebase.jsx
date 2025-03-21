import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcf_v_i_3J46QmKfbWu-1JG2YvHmcCw9k",
  authDomain: "fir-b4102.firebaseapp.com",
  databaseURL: "https://fir-b4102-default-rtdb.firebaseio.com", // 🔥 **यह ज़रूरी है!**
  projectId: "fir-b4102",
  storageBucket: "fir-b4102.appspot.com",
  messagingSenderId: "104582204940",
  appId: "1:104582204940:web:6c019deff39b6fb2a9e829",
  measurementId: "G-DFEZ31J9FZ",
};

 const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

export { database };