// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "buy-sell-d0c3e.firebaseapp.com",
  projectId: "buy-sell-d0c3e",
  storageBucket: "buy-sell-d0c3e.appspot.com",
  messagingSenderId: "178415602757",
  appId: "1:178415602757:web:6e49d09c3fa6daa733a72c",
  measurementId: "G-XGLFK9GZJS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
