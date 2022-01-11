import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7fmR55dgLI2vizSb_-dwYqaXPCxamlsA",
  authDomain: "crwn-db-76fac.firebaseapp.com",
  projectId: "crwn-db-76fac",
  storageBucket: "crwn-db-76fac.appspot.com",
  messagingSenderId: "134291483147",
  appId: "1:134291483147:web:1cee9d434c70558076b50e",
  measurementId: "G-D0003JPFKX"
}

export const createUserProfileDocument = async (userAuthObj, additionalDataObj) => {
  if (!userAuthObj) return

  console.log(firestore.doc('users/1521252dsds'))
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider)
}

export default firebase
