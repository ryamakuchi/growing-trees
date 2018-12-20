import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCs_XwEum9JN5UlPzuq3NtKf58sDXiffuk",
    authDomain: "growing-trees.firebaseapp.com",
    databaseURL: "https://growing-trees.firebaseio.com",
    projectId: "growing-trees",
    storageBucket: "growing-trees.appspot.com",
    messagingSenderId: "552819798737"
  })
}

const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
export { db }
