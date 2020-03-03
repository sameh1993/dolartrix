import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";
import "firebase/firestore";



// Your web app's Firebase configuration
const instance = firebase.initializeApp({
    apiKey: "AIzaSyA3JF6zLZfqLjK1-24yWukGe2HVbSFmtT4",
    authDomain: "domand-1df1c.firebaseapp.com",
    databaseURL: "https://domand-1df1c.firebaseio.com",
    projectId: "domand-1df1c",
    storageBucket: "domand-1df1c.appspot.com",
    messagingSenderId: "237637391529",
    appId: "1:237637391529:web:966a8fc7307d1391fe05b8",
    measurementId: "G-D3VEHH4M9Z"
  });
  // Initialize Firebase


  // const firebaseapp = firebase.intializeApp(firebaseConfig);

  export default instance.firestore()
