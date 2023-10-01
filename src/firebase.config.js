import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBKwW4wYq_XIzegcFArt7envcs7HUgWSeE",
    authDomain: "restaurantapp-ec427.firebaseapp.com",
    databaseURL: "https://restaurantapp-ec427-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ec427",
    storageBucket: "restaurantapp-ec427.appspot.com",
    messagingSenderId: "266171147812",
    appId: "1:266171147812:web:4752a3c0482c6b59329ab1",
    measurementId: "G-BVS23BRTJV"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };