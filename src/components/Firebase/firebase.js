import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
// };

const config = {
  apiKey: "AIzaSyAQM03y6PsPZfgJWV5-PdztWRsJ7TM6iDM",
  authDomain: "grocery-list-4bda3.firebaseapp.com",
  databaseURL: "https://grocery-list-4bda3.firebaseio.com",
  projectId: "grocery-list-4bda3",
  storageBucket: "grocery-list-4bda3.appspot.com",
  messagingSenderId: "228478752812",
  appId: "1:228478752812:web:b258b7296dbe5142"
};

if (!app.apps.length) {
  app.initializeApp(config);
}

class Firebase {
  constructor() {
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
