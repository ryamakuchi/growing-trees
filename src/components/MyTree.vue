<template>
  <div class="max-w-full max-h-full my-8 p-12 rounded overflow-hidden shadow-lg">
    <div class="flex justify-center">
      <button @click="increment()" class="bounce">
        <Logo/>
      </button>
    </div>
    <div class="mt-8 px-2 py-4 text-center">
      <div class="font-bold sm:text-lg lg:text-2xl my-4">クリックして Nuxt を育てよう</div>
      <div class="m-8 sm:text-lg lg:text-2xl">
        戦闘力 {{ $store.state.counter }}
      </div>
    </div>
    <button @click="reset()"
            class="bg-orange lg:text-2xl hover:bg-orange-dark text-white font-bold py-2 px-4 rounded">
      はじめから育てる
    </button>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    reset () {
      this.$store.dispatch('reset')
    }
  }
}
</script>

<style scoped>
.bounce:hover {
  animation: bounce-in 5s infinite;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  20% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.2) skewX(5deg);
  }
  40% {
    transform: scale(1);
  }
  55% {
    transform: scale(1.4);
  }
  60% {
    transform: scale(1) scaleY(0.8);
  }
  75% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.8);
  }
  95% {
    transform: scale(1.3) skewX(-7deg);
  }
  100% {
    transform: scale(1);
  }
}
</style>
