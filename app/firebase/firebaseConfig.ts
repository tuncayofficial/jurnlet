// firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2D_4tLM7s2sRJcdka_FgDL9uwakzDf5M",
  authDomain: "jurnlet.firebaseapp.com",
  databaseURL: "https://jurnlet-default-rtdb.firebaseio.com",
  projectId: "jurnlet",
  storageBucket: "jurnlet.appspot.com", // Corrected storageBucket URL
  messagingSenderId: "76211953399",
  appId: "1:76211953399:web:adc3ab84e273f798efbdf2",
  measurementId: "G-Y6J1F4PW1H",
};

// Ensure Firebase is only initialized once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Optional: Analytics will only work in a browser environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = getAuth(app);

export { app, auth, analytics };
