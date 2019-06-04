<template>
  <div id="app">
    <menuline></menuline>
    <router-view class="h-550"></router-view>
    <!-- <div class="allButFooter">
      <p>aa</p>
    </div> -->
    <foot class="footer"></foot>
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
  max-height: auto;
}
.h-550 {
  min-height: 72.5vh;
}

h1 {
  font-weight: 800;
  text-align: center;
}

/* .allButFooter {
    min-height: calc(100vh - 10vh);
} */

</style>
