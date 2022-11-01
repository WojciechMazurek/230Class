export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkR6X-QpomnkvHGgp-o2SbLoPl-IEZgeY",
  authDomain: "target-app-e7920.firebaseapp.com",
  databaseURL: "https://target-app-e7920-default-rtdb.firebaseio.com",
  projectId: "target-app-e7920",
  storageBucket: "target-app-e7920.appspot.com",
  messagingSenderId: "1018977263504",
  appId: "1:1018977263504:web:f52d15ecd75292687a9d15",
  measurementId: "G-W737RQWCQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);