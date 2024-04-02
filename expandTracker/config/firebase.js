import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC65hSDGqOxpJEbo_0q3WxOfvsBdf2xOHs",
  authDomain: "expandtracker-86fbc.firebaseapp.com",
  projectId: "expandtracker-86fbc",
  storageBucket: "expandtracker-86fbc.appspot.com",
  messagingSenderId: "1017612292289",
  appId: "1:1017612292289:web:c6d301cd5004be90fec440",
  measurementId: "G-BH5J6JQXQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)