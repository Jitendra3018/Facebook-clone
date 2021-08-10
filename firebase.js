import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA5QY_RfiEBuK_MRkDfnuy6s2dRN51d5Vk",
    authDomain: "facebook-2-clone-cc0db.firebaseapp.com",
    projectId: "facebook-2-clone-cc0db",
    storageBucket: "facebook-2-clone-cc0db.appspot.com",
    messagingSenderId: "259072924343",
    appId: "1:259072924343:web:d8efa16bb0d5bb7af88b32",
    measurementId: "G-EVJ0L4J7H8",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
