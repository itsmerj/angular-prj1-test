import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD3TOkNVDJYolbyeWXab4Xdmg8e0gpeDLc",
  authDomain: "testdatabase-51a08.firebaseapp.com",
  projectId: "testdatabase-51a08",
  storageBucket: "testdatabase-51a08.appspot.com",
  messagingSenderId: "800118127056",
  appId: "1:800118127056:web:d272f89298bdd20188a1d5",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestrore();

export { db };
