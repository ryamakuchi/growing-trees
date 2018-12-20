<template>
  <div class="container">
    <div class="mt-8 flex flex-row-reverse">
      <div v-if="!userName">
        <button @click="signIn"
                class="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded">
          googleでログイン
        </button>
      </div>
      <div v-if="userName">
        <button @click="signOut"
                class="bg-transparent hover:bg-teal text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal hover:border-transparent rounded">
          ログアウト
        </button>
        <p>{{ userName }}</p>
        <img :src="userPhoto"
             class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0">
      </div>
    </div>
    <div class="">
      <game-intro v-if="!userName"></game-intro>
      <my-tree v-if="userName"></my-tree>
    </div>
  </div>
</template>

<script>
import GameIntro from '~/components/GameIntro.vue'
import MyTree from '~/components/MyTree.vue'

export default {
  components: {
    GameIntro,
    MyTree
  },
  computed: {
    userName () { return this.$store.state.userName },
    userPhoto () { return this.$store.state.userPhoto }
  },
  mounted () {
    this.$store.dispatch('googleAuthStateChanged')
  },
  methods: {
    signIn () {
      this.$store.dispatch('googleSignIn')
    },
    signOut () {
      this.$store.dispatch('googleSignOut')
    }
  }
}
</script>
