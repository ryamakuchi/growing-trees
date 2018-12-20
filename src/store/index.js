import firebase from 'firebase'
import { db } from '~/plugins/firebase.js'

export const state = () => ({
  counter: 0,
  userEmail: null,
  userName: null,
  userPhoto: null,
  noAccount: false
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  reset (state) {
    state.counter = 0
  },
  storeUser (state, payload) {
    state.userEmail = payload.userEmail
    state.userName = payload.userName
    state.userPhoto = payload.userPhoto
  },
  deleteUser (state) {
    state.userEmail = null
    state.userName = null
    state.userPhoto = null
    state.noAccount = true
  },
  saveUser (state, payload) {
    state.counter = payload.number
  }
}

export const actions = {
  googleSignIn ({ dispatch }) {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    dispatch('googleAuthStateChanged')
  },
  googleSignOut ({ dispatch }) {
    firebase.auth().signOut()
    dispatch('googleAuthStateChanged')
  },
  googleAuthStateChanged ({ dispatch, commit }) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let { email, displayName, photoURL } = user
        commit('storeUser', { userEmail: email, userName: displayName, userPhoto: photoURL })
        dispatch('userCheck')
      } else {
        commit('deleteUser')
      }
    })
  },
  userCheck ({ dispatch, commit, state }) {
    db.collection('users').doc(state.userEmail).get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data())
        commit('saveUser', { number: doc.data().counter })
      } else {
        console.log("No such document!")
        dispatch('createUser')
      }
    }).catch((error) => {
      console.error("Error getting document:", error)
    })
  },
  createUser ({ state }) {
    db.collection('users').doc(state.userEmail).set({
      counter: state.counter
    }).then(() => {
      console.log("Document successfully written!");
    }).catch((error) => {
      console.error("Error writing document: ", error);
    })
  },
  increment ({ commit, state }) {
    db.collection('users').doc(state.userEmail).update({
      counter: state.counter + 1
    }).then(() => {
      console.log("Document successfully updated!")
      commit('increment')
    }).catch((error) => {
      console.error("Error updating document: ", error)
    })
  },
  reset ({ commit, state }) {
    db.collection('users').doc(state.userEmail).update({
      counter: 0
    }).then(() => {
      console.log("Document successfully 0 updated!")
      commit('reset')
    }).catch((error) => {
      console.error("Error updating document: ", error)
    })
  }
}
