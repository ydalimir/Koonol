import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDJaAA0FbHzaLcJSgE-aVH4vw13O12eE2k",
    authDomain: "koonol-b33bb.firebaseapp.com",
    databaseURL: "https://koonol-b33bb.firebaseio.com",
    projectId: "koonol-b33bb",
    storageBucket: "koonol-b33bb.appspot.com",
    messagingSenderId: "1067142017477",
    appId: "1:1067142017477:web:d46404ce5fa188bf6a5bac"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
