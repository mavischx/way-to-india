// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmvUjUjYofINzBS2Gaq1ROlU9xGphISDU",
  authDomain: "way-to-india.firebaseapp.com",
  projectId: "way-to-india",
  storageBucket: "way-to-india.appspot.com",
  messagingSenderId: "902536752227",
  appId: "1:902536752227:web:8fce21722bb60df0bfdc56",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
