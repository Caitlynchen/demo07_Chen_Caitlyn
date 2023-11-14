//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDgNb8dqPHx5x98fLUxS1ompfaPTe3nfyU",
  authDomain: "comp1800-202330-d0ac3.firebaseapp.com",
  projectId: "comp1800-202330-d0ac3",
  storageBucket: "comp1800-202330-d0ac3.appspot.com",
  messagingSenderId: "626839909365",
  appId: "1:626839909365:web:22d7f06ce7434306b8e6bc"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();