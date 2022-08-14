import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB9AAgknQJ_IHFCd_1c5sj1p2o-aEWCOYc",
    authDomain: "clone-80044.firebaseapp.com",
    projectId: "clone-80044",
    storageBucket: "clone-80044.appspot.com",
    messagingSenderId: "384255366554",
    appId: "1:384255366554:web:7e5e1563e5e8d5437f9623"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore()
  const auth = firebase.auth()
 export {db ,auth}