import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAFv0WNkLfX-7u4eEvuv6gsRWEpyxt3yHw",
  authDomain: "cooking-ninja-site-2eb2b.firebaseapp.com",
  projectId: "cooking-ninja-site-2eb2b",
  storageBucket: "cooking-ninja-site-2eb2b.appspot.com",
  messagingSenderId: "610931700348",
  appId: "1:610931700348:web:f56098d707793d394acff9"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };