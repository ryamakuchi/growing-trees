import firebase from '@/plugins/firebase'

export const state = () => ({
  counter: 0,
  userName: null,
  userPhoto: null,
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  storeUser (state, user) {
    state.userName = user.userName
    state.userPhoto = user.userPhoto
  },
  deleteUser (state) {
    state.userName = null
    state.userPhoto = null
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
  googleAuthStateChanged ({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        let { displayName, photoURL } = user
        commit('storeUser', { userName: displayName, userPhoto: photoURL })
      } else {
        commit('deleteUser')
      }
    })
  }
}
