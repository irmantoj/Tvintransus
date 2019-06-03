<template>
  <div id="app">
    <menuline></menuline>
      <router-view class="h-550"></router-view>
    <foot></foot>
  </div>
</template>

<script>

import menuline from "./components/menuline.vue"
import foot from "./components/foot.vue"

export default {

  name: 'app',

  components : {menuline, foot}
}

</script>

<style>
#app {
  background-color: #f9f9f9;
}
.h-550 {
  min-height: 550px;
}
h1 {
  font-weight: 800;
  text-align: center;
}

</style>
