import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD23lR98cG5N4q0EJnJ_JIkm8HMdD0KwCA",
  authDomain: "facebook-clone-d9f31.firebaseapp.com",
  databaseURL: "https://facebook-clone-d9f31.firebaseio.com",
  projectId: "facebook-clone-d9f31",
  storageBucket: "facebook-clone-d9f31.appspot.com",
  messagingSenderId: "1074488514272",
  appId: "1:1074488514272:web:1962a3a57d8dcef7ba6285",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
