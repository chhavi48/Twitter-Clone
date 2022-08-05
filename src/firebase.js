import firebase from "firebase/dist/index.node.cjs";
const firebaseConfig = {
  apiKey: "AIzaSyBh1dYRca9OuDn8tZY1EISgd3-IEKA34J8",
  authDomain: "twitter-clone-79927.firebaseapp.com",
  projectId: "twitter-clone-79927",
  storageBucket: "twitter-clone-79927.appspot.com",
  messagingSenderId: "405423634854",
  appId: "1:405423634854:web:2f717370c741a850f53767",
  measurementId: "G-VJTVEFBFY1"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;