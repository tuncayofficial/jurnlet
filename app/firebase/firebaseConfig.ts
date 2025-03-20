
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2D_4tLM7s2sRJcdka_FgDL9uwakzDf5M",
  authDomain: "jurnlet.firebaseapp.com",
  projectId: "jurnlet",
  storageBucket: "jurnlet.firebasestorage.app",
  messagingSenderId: "76211953399",
  appId: "1:76211953399:web:adc3ab84e273f798efbdf2",
  measurementId: "G-Y6J1F4PW1H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics}