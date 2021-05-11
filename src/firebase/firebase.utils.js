import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB5QBLzZlieYt5C2IkXJrYYa0PBgfCVdF8",
    authDomain: "sell-ffb90.firebaseapp.com",
    projectId: "sell-ffb90",
    storageBucket: "sell-ffb90.appspot.com",
    messagingSenderId: "760368688622",
    appId: "1:760368688622:web:6e4ad5fc356ef7a60832ff"
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch (error) {
        console.log("Error creating user", error.message);
      }
  }

  return userRef;  

} 


firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


