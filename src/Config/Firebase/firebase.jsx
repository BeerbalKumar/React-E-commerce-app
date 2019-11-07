  import firebase from 'firebase'
  import 'firebase/database'
  import 'firebase/firestore'
  import 'firebase/storage'


  var firebaseConfig = {
    apiKey: "AIzaSyAHZhdHyzwh0cXIV0q2P5C4muDKIlNJAFA",
    authDomain: "e-commerce-1ff6f.firebaseapp.com",
    databaseURL: "https://e-commerce-1ff6f.firebaseio.com",
    projectId: "e-commerce-1ff6f",
    storageBucket: "e-commerce-1ff6f.appspot.com",
    messagingSenderId: "387847970169",
    appId: "1:387847970169:web:579355f5af0d909f3123a8"
  };

 let firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp 