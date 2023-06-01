// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: "AIzaSyCLwXf77NuoR0ESLwAAgez_wS_gM8V4J7M",

  // authDomain: "reddit-clone-23782.firebaseapp.com",

  // projectId: "reddit-clone-23782",

  // storageBucket: "reddit-clone-23782.appspot.com",

  // messagingSenderId: "855149209259",

  // appId: "1:855149209259:web:cb03f2ae83010e6feab9ee",

  // measurementId: "G-9D511367MB",
  apiKey: "AIzaSyCEQgSH4Vfzmbn6IVFOE5fu5DtH0p3pAZ8",

  authDomain: "forum-ovidiu-borze.firebaseapp.com",

  projectId: "forum-ovidiu-borze",

  storageBucket: "forum-ovidiu-borze.appspot.com",

  messagingSenderId: "555287825535",

  appId: "1:555287825535:web:98396be2b79a49d0fcc34a",

  measurementId: "G-71MX5H8V0X"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
