<template>
  <header class="container-fluid">
    <div class="m-0 row d-none d-md-flex">

      <nav class="col-md-8">

        <ul class="d-flex flex-nowrap">
          <li>
            <router-link to="/about">{{ $t("menuline.about") }}</router-link>
          </li>
          <!-- <li>
            <router-link to="/" exact>{{ $t("menuline.gallery") }}</router-link>
          </li> -->
          <li>
            <router-link to="/" exact>{{ $t("menuline.services") }}</router-link>
          </li>
          <li>
            <router-link to="/contacts">{{ $t("menuline.contacts") }}</router-link>
          </li>
        </ul>

      </nav>
      <div class="col-md menu-lang d-flex justify-content-end">
        <!-- <img class="mx-2 flag"  v-bind:class="[$i18n.locale !== 'en' ? 'menu-flag' : '']" v-on:click="$i18n.locale = 'en'" src="https://i.imgur.com/cjxtMC9.jpg" height="25px" alt="">
        <img class="mx-2 flag"  v-bind:class="[$i18n.locale !== 'lt' ? 'menu-flag' : '']" v-on:click="$i18n.locale = 'lt'" src="https://i.imgur.com/Iu3BPXi.jpg" height="25px" alt=""> -->
      </div>

    </div>

    <div class="d-md-none mob-menu">
      <div class="d-flex justify-content-between">
        <div class="">
          <!-- <img class="mx-2 my-3 flag"  v-bind:class="[$i18n.locale !== 'en' ? 'menu-flag' : '']" v-on:click="$i18n.locale = 'en'" src="https://i.imgur.com/cjxtMC9.jpg" height="25px" alt="">
          <img class="mx-2 my-3 flag"  v-bind:class="[$i18n.locale !== 'lt' ? 'menu-flag' : '']" v-on:click="$i18n.locale = 'lt'" src="https://i.imgur.com/Iu3BPXi.jpg" height="25px" alt=""> -->
        </div>
        <i class="fas fa-bars fa-3x p-2" v-on:click="showMobMenu = !showMobMenu"></i>
      </div>
      <transition name="slideToggle">
        <div class="text-center slide-height" v-if="showMobMenu">
          <ul class="">
            <li class="mb-1">
              <router-link class="mob-link" to="/about">{{ $t("menuline.about") }}</router-link>
            </li>
            <!-- <li class="mb-1">
              <router-link class="mob-link" to="/">{{ $t("menuline.gallery") }}</router-link>
            </li> -->
            <li class="mb-1">
              <router-link class="mob-link" to="/" exact>{{ $t("menuline.services") }}</router-link>
            </li>
            <li class="mb-1">
              <router-link class="mob-link" to="/contacts">{{ $t("menuline.contacts") }}</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>

  </header>
</template>

<script>

export default {

  data () {
    return {
      showMobMenu : false
    }
  }
}
</script>

<style lang="css" scoped>

  i {
    color : white
  }

  ul {
    list-style: none;
    padding: 0;
    background-color: #303032;
    margin-bottom: 20px;
    padding: 10px 20px;
  }
  nav a {
    color : white;
    background-color: #303032;
    padding: 11px 20px;
  }
  nav li {
    margin-right: 10px;
  }

  nav {
    padding : 0;
  }

  header {
    padding : 0;
  }

  .router-link-active {
    color: #CC2A1B;
  }

  /* lang menu */

  .menu-lang {
    background-color: #303032;
    margin-bottom: 20px;
    padding: 8px 20px;
  }

  .menu-flag {
    opacity: 0.5;
  }

  .flag {
    cursor: pointer;
  }

  .mob-menu {
    background-color: #303032;
  }

  .mob-link {
    color : white;
    background-color: #303032;
  }

  .slideToggle-enter-active, .slideToggle-leave-active {
    transition: all 0.5s;
    height: 100px;
    margin-bottom: 22px;
  }
  .slideToggle-enter, .slideToggle-leave-to {
    opacity: 0;
    height: 0px;
    margin-bottom: 0px;
  }

</style>
