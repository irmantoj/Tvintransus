<template>
  <div id="app">
    <menuline></menuline>
    <router-view></router-view>
    <!-- <foot>
      <p class="foot-content">&#9400 Tvintransus</p>
    </foot> -->
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
/*
  .foot-content {
    position: fixed;
    bottom: -200px;
  } */

</style>
