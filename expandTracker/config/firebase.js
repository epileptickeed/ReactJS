import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCPm5lTVjxOGkyleGiAWRen3V6AVZ2G7y0",
  authDomain: "expandtracker-573e9.firebaseapp.com",
  projectId: "expandtracker-573e9",
  storageBucket: "expandtracker-573e9.appspot.com",
  messagingSenderId: "574947124638",
  appId: "1:574947124638:web:60eab60d99344e54b9a28f",
  measurementId: "G-HP92F10XCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)