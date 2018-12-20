<template>
  <div class="max-w-full mt-8 rounded overflow-hidden shadow-lg">
    <button @click="increment()">{{ count }}
      <Logo/>
    </button>
    <div class="px-6 py-4">
      <div class="font-bold text-lg my-4">タップして木を育てよう</div>
      <p class="text-grey-darker text-base">
        もうちょっと！あと少し！
      </p>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    count () { return this.$store.state.counter }
  },
  methods: {
    increment (e) {
      this.$store.commit('increment')
    }
  }
}
</script>
