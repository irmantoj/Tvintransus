<template lang="html">
    <div class="container">

      <div class="row">
        <div class="col-md">
          <h1 class="service-title">Paslaugos</h1>
        </div>
      </div>

      <div class="row h">

        <card class="mt-4">

          <template v-slot:icon>
            <i class="fas fa-user"></i>
          </template>
          <template v-slot:title>
            Krovinių transportavimas užsakovams
          </template>
           <router-link to="/full-loads">Pilni kroviniai</router-link><br>
           <router-link to="/part-loads">Daliniai kroviniai</router-link><br>
           <router-link to="/important-info">Svarbu žinoti</router-link>

        </card>

        <card class="mt-4">

          <template v-slot:icon>
            <i class="fas fa-truck"></i>
          </template>
          <template v-slot:title>
            Krovinių pervežimas transporto įmonėms
          </template>
          <router-link to="/suggested-loads">Siūlomi kroviniai</router-link><br>
          <router-link to="/important-loads-info">Svarbu žinoti</router-link><br>

        </card>

        <card class="mt-4">
          <template v-slot:icon>
            <i class="fas fa-ticket-alt"></i>
          </template>
          <template v-slot:title>
            Keltų bilietai
          </template>
          <router-link to="/tickets">Keltų bilietai</router-link><br>

        </card>

      </div>
    </div>

</template>

<script>

import card from "./../components/card.vue"

export default {

  components: {card}
}


</script>

<style lang="css" scoped>

  .service-title {
    border-bottom: 3px solid #EEEFF2;
    padding-bottom: 20px;
  }

  /* .h {
    min-height: 550px;
    height : auto;
  } */

</style>
