// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJseq7-ZoCL0NQQdvo1Fyih8A7TVTdGdg",
  authDomain: "unimar-start-devops-kawan.firebaseapp.com",
  projectId: "unimar-start-devops-kawan",
  storageBucket: "unimar-start-devops-kawan.firebasestorage.app",
  messagingSenderId: "149122195240",
  appId: "1:149122195240:web:3ed55ec4f3965c5f79ba1d",
  measurementId: "G-LHXPZWKXE8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)
