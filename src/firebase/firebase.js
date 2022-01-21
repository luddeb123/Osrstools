// import { initializeApp,auth, firestore } from "firebase";
import * as firebase from "firebase";

const config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxx"
};


const database = firebase.initializeApp(config);

export default database

// export default {
//     database: firebase.firestore(),
//     auth: firebase.auth
// }
