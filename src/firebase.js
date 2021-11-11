import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQRvsE4nEPp9HZdeNiTJUQj0zqoP1xNZk",
    authDomain: "instagram-clone-daniel.firebaseapp.com",
    projectId: "instagram-clone-daniel",
    storageBucket: "instagram-clone-daniel.appspot.com",
    messagingSenderId: "594720252461",
    appId: "1:594720252461:web:ef429e99ff5dd9a9c48ea4",
    measurementId: "G-Y4THXJ8L0Q"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export {db, auth, storage, functions};
