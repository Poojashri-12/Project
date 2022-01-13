import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCA4tpXuc2hXrd1CbfhYmtoiMDCZCmtjyY",
    authDomain: "challenge-9c253.firebaseapp.com",
    projectId: "challenge-9c253",
    storageBucket: "challenge-9c253.appspot.com",
    messagingSenderId: "1001576664722",
    appId: "1:1001576664722:web:1bb41257eb68935fe3204b",
    measurementId: "${config.measurementId}"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };