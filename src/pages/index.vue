<template>
  <div class="container">
    <div class="mt-8 flex flex-row-reverse">
      <button v-if="!isLogin" @click="googleSignIn" class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded">googleでログイン</button>
      <button v-if="isLogin" @click="googleSignOut" class="bg-transparent hover:bg-teal text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal hover:border-transparent rounded">ログアウト</button>
    </div>
    <div class="">
      <game-intro v-if="!isLogin"></game-intro>
      <my-tree v-if="isLogin" :user="userData"></my-tree>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import GameIntro from '~/components/GameIntro.vue'
import MyTree from '~/components/MyTree.vue'

export default {
  components: {
    GameIntro,
    MyTree
  },
  methods: {
    googleSignIn: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    },
    googleSignOut: function() {
      firebase.auth().signOut();
    }
  },
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: 'Hello, World！！', isLogin:false, userData:null}
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  }
}
</script>
