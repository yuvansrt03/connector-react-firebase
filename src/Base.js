import * as firebase from "firebase/app";
import "firebase/auth";

const app=firebase.initializeApp({
  apiKey: "AIzaSyAzxepZO9Is3dFD_Q8f6acRld3buGbsb9w",
  authDomain: "connector-7d613.firebaseapp.com",
  projectId: "connector-7d613",
  storageBucket: "connector-7d613.appspot.com",
  messagingSenderId: "658917081738",
  appId: "1:658917081738:web:9cb6f5903cf4c715a3e373",
  measurementId: "G-NWDPE0Z7C8"
})

export {app}