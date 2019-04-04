import firebase from 'firebase/app';
import 'firebase/storage';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAQ_osa2CMLhsrJkCYe4IitSt28XFygUU4",
    authDomain: "locales-app.firebaseapp.com",
    databaseURL: "https://locales-app.firebaseio.com",
    projectId: "locales-app",
    storageBucket: "locales-app.appspot.com",
    messagingSenderId: "933172108236"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();
  
  export {
      storage, firebase as default
  }