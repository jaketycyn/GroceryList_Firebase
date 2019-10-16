import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQM03y6PsPZfgJWV5-PdztWRsJ7TM6iDM",
  authDomain: "grocery-list-4bda3.firebaseapp.com",
  databaseURL: "https://grocery-list-4bda3.firebaseio.com",
  projectId: "grocery-list-4bda3",
  storageBucket: "grocery-list-4bda3.appspot.com",
  messagingSenderId: "228478752812",
  appId: "1:228478752812:web:b258b7296dbe5142"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
