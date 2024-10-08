import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmvUjUjYofINzBS2Gaq1ROlU9xGphISDU",
  authDomain: "way-to-india.firebaseapp.com",
  projectId: "way-to-india",
  storageBucket: "way-to-india.appspot.com",
  messagingSenderId: "902536752227",
  appId: "1:902536752227:web:8fce21722bb60df0bfdc56",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
