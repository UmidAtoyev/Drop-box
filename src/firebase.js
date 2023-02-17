import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyA-B64R7RaMspG2XBRpHAyaoV7-SO5VRkA",
  authDomain: "firedrive-f5a3b.firebaseapp.com",
  projectId: "firedrive-f5a3b",
  storageBucket: "firedrive-f5a3b.appspot.com",
  messagingSenderId: "951657886180",
  appId: "1:951657886180:web:4446deba9508ca729697f1",
  measurementId: "G-LWQW14HEXJ"
})

const firestore = app.firestore()

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
