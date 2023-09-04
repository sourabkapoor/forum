// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: "AIzaSyCEQgSH4Vfzmbn6IVFOE5fu5DtH0p3pAZ8",

  // authDomain: "forum-ovidiu-borze.firebaseapp.com",

  // projectId: "forum-ovidiu-borze",

  // storageBucket: "forum-ovidiu-borze.appspot.com",

  // messagingSenderId: "555287825535",

  // appId: "1:555287825535:web:98396be2b79a49d0fcc34a",

  // measurementId: "G-71MX5H8V0X"
  apiKey: "AIzaSyCm4vEA2R8YF4l86fe6N4dQQ2eSJ3MRa-M",
  authDomain: "chatterbox-31d96.firebaseapp.com",
  projectId: "chatterbox-31d96",
  storageBucket: "chatterbox-31d96.appspot.com",
  messagingSenderId: "1093005828288",
  appId: "1:1093005828288:web:2c570c4983e7c266cdcd25",
  measurementId: "G-04Z8Y89CN5"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
