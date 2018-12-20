<template>
  <div class="max-w-full max-h-full my-8 p-12 rounded overflow-hidden shadow-lg text-center	">
    <div class="my-8">
      <Logo/>
    </div>
    <p class="my-8 leading-normal">
      このサイトは、Qiita アドベントカレンダーの<br>
      Nuxt.js #2 Advent Calendar 2018 20日目の記事として<br>
      作成したアプリケーションです。<br>
      Google アカウントでログインして Nuxt をクリックしてみてください。
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
