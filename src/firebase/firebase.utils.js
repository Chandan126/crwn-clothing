import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZO8X_4R2jRgberKC0yop_smeVT5YbICw",
    authDomain: "crwn-db-10d4f.firebaseapp.com",
    projectId: "crwn-db-10d4f",
    storageBucket: "crwn-db-10d4f.appspot.com",
    messagingSenderId: "1068541867640",
    appId: "1:1068541867640:web:91a149b4f1f29c111f9f8d",
    measurementId: "G-X3TX0N6PRW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
