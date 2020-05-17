import React from 'react';
import PathRouter from './Routers/PathRouter';
import './App.css';
import * as firebase from 'firebase';
function App() {
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBpfw_JYkHTEMqJF-uHkhYuJNDJrTIEBC8",
  //     authDomain: "perfume-81ec4.firebaseapp.com",
  //     databaseURL: "https://perfume-81ec4.firebaseio.com",
  //     projectId: "perfume-81ec4",
  //     storageBucket: "perfume-81ec4.appspot.com",
  //     messagingSenderId: "326574123668",
  //     appId: "1:326574123668:web:fac96147a4b8362622e281",
  //     measurementId: "G-DE3JTG5VYH"
  // };
  return (
    <PathRouter />
  );
}

export default App;
