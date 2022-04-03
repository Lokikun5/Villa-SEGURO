<template>
  <div class="home">
    <img alt="bannière villa Seguro" src="../assets/Image1.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<style scoped>
img{
  width: 100%;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
