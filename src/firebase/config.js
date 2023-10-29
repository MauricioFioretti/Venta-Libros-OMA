// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG2ztNsg4bcF0Cyby4DBR800AwpwoRP_A",
  authDomain: "venta-libros-oma.firebaseapp.com",
  projectId: "venta-libros-oma",
  storageBucket: "venta-libros-oma.appspot.com",
  messagingSenderId: "548184142012",
  appId: "1:548184142012:web:b704ba42c854d6c7a920b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)