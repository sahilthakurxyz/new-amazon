// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBgHYjNXkDy9hR4BVD2ELKwpLPkzTS6Ipk",
  authDomain: "amozon-clone-9c3c1.firebaseapp.com",
  projectId: "amozon-clone-9c3c1",
  storageBucket: "amozon-clone-9c3c1.appspot.com",
  messagingSenderId: "420429059519",
  appId: "1:420429059519:web:65d40372b8706bcce1fd0a",
  measurementId: "G-BMCWVGZNL1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// we intialize the database db is database
//  firebaseApp.firestore we use real time database of firebase
const db = firebaseApp.firestore();
// const db = getFirestore(firebaseApp);
const auth = firebase.auth();
// const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);
export { db, auth };
