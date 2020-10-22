import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBF9Pofzm1t1S0IPe3BU3XmPpvrTLSIS5o",
  authDomain: "autofinder-db.firebaseapp.com",
  databaseURL: "https://autofinder-db.firebaseio.com",
  projectId: "autofinder-db",
  storageBucket: "autofinder-db.appspot.com",
  messagingSenderId: "417158444057",
  appId: "1:417158444057:web:db32a6235eb8e4634aa688",
  measurementId: "G-ZX1L40SZ1B",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //determine if there is already data (user object)
  const snapShot = await userRef.get();

  //prevent user duplication
  if (!snapShot.exists) {
    //create data (snapshot) using userRef
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error", err.message);
    }
  }

  console.log("snaphshot: ", snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up googleauth util
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
