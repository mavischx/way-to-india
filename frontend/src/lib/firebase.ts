import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjf_nUFhhAcj9TrzX6SK-65gUUIttno74",
  authDomain: "way-to-india-3cd13.firebaseapp.com",
  projectId: "way-to-india-3cd13",
  storageBucket: "way-to-india-3cd13.appspot.com",
  messagingSenderId: "914232026496",
  appId: "1:914232026496:web:456d7677af7888206e4d65",
  measurementId: "G-4JRZKECVEH
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
