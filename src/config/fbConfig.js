import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCAfssoMRKUap97Au9jLcUZCXc9m7pR2Ac",
    authDomain: "perfumeshop-d219d.firebaseapp.com",
    databaseURL: "https://perfumeshop-d219d.firebaseio.com",
    projectId: "perfumeshop-d219d",
    storageBucket: "perfumeshop-d219d.appspot.com",
    messagingSenderId: "839395412853",
    appId: "1:839395412853:web:6bf6430849d6083286613c",
    measurementId: "G-TWR96HKYFE"
};
const app = firebase.initializeApp(firebaseConfig);
export default app;
