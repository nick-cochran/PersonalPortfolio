
import { Montserrat, Work_Sans, Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBftUnYfwxsOgD1zZ-s2-5OdfT7SjnK6g",
  authDomain: "nick-cochran-portfolio.firebaseapp.com",
  databaseURL: "https://nick-cochran-portfolio-default-rtdb.firebaseio.com",
  projectId: "nick-cochran-portfolio",
  storageBucket: "nick-cochran-portfolio.appspot.com",
  messagingSenderId: "341628610107",
  appId: "1:341628610107:web:518b9aa9b4bf94a5221e1e",
  measurementId: "G-M925RDGPVF"
};

let firebaseApp;
let analytics;
let storage;

// Initialize Firebase
if (typeof window !== 'undefined') {
    firebaseApp = initializeApp(firebaseConfig);
    if(getAnalytics.isSupported()) {
        analytics = getAnalytics(app);
    }
    if(getStorage.isSupported()) {
        storage = getStorage(app);
    }
}

const montserrat = Montserrat({ subsets: ['latin'] })
const workSans = Work_Sans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export { firebaseApp, analytics, storage, ref, getDownloadURL };
export { montserrat, workSans, inter, Image, Link };