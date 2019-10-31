import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseui from "firebaseui";

const config = {
  // your config
  apiKey: "RjSxhdUtMJpDanqKKn_aEwrKuLEMlnY",
  authDomain: "grocery-list-4bda3.firebaseapp.com",
  databaseURL: "https://grocery-list-4bda3.firebaseio.com",
  projectId: "grocery-list-4bda3",
  storageBucket: "grocery-list-4bda3.appspot.com",
  messagingSenderId: "228478752812",
  appId: "1:228478752812:web:b258b7296dbe5142"
};

// This must run before any other firebase functions
if (!firebase.apps.length) {
  firebase.initializeApp({ config });
}
function Firebase() {}
export default Firebase;
