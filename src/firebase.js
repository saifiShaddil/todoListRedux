import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT__APP__apiKey,
  authDomain: process.env.REACT__APP__authDomain,
  projectId: process.env.REACT__APP__projectId,
  storageBucket: process.env.REACT__APP__storageBucket,
  messagingSenderId: process.env.REACT__APP__messagingSenderId,
  appId: process.env.REACT__APP__appId,
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore();

export { auth, provider, db };
