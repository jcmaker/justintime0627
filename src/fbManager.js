import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyCFPX5rGFZKnS3KAGUl8aJmSQn9vJhfiBs",
  authDomain: "justintime0627.firebaseapp.com",
  projectId: "justintime0627",
  storageBucket: "justintime0627.appspot.com",
  messagingSenderId: "328157349393",
  appId: "1:328157349393:web:b28393ed7d85582a6a53b0",
  measurementId: "G-XR3F0PJH8H",
};

//Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
