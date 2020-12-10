import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJuk6kwZqSw5XMktdO5xsgrZ89SnKgiJ0",
  authDomain: "todolistredux-53fb5.firebaseapp.com",
  projectId: "todolistredux-53fb5",
  storageBucket: "todolistredux-53fb5.appspot.com",
  messagingSenderId: "978107977224",
  appId: "1:978107977224:web:b4344d0ae641d85cefcbbd"
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore();

export { auth, provider, db };
