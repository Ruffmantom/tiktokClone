import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBE9npNHtc-JkhmYF_9fO9TwZ8tgo0_YCw",
    authDomain: "tiktokclone-1abd6.firebaseapp.com",
    databaseURL: "https://tiktokclone-1abd6.firebaseio.com",
    projectId: "tiktokclone-1abd6",
    storageBucket: "tiktokclone-1abd6.appspot.com",
    messagingSenderId: "109403108201",
    appId: "1:109403108201:web:0a2a93d0eb0281abdc83f8",
    measurementId: "G-9MT37ZTNYC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;