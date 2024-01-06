
import { Montserrat, Work_Sans, Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import secrets from './secrets.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = secrets.firebaseConfig;

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