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
            Kroviniu transportavimas užsakovams
          </template>
           <router-link :to="{ name: '', params: {} }">Pilni kroviniai</router-link><br>
           <router-link :to="{ name: '', params: {} }">Daliniai kroviniai</router-link><br>
           <router-link :to="{ name: '', params: {} }">Svarbu žinoti</router-link>

        </card>

        <card class="mt-4">

          <template v-slot:icon>
            <i class="fas fa-truck"></i>
          </template>
          <template v-slot:title>
            Kroviniu transportavimas vežėjams
          </template>
          <router-link :to="{ name: '', params: {} }">Siulomi pilni kroviniai</router-link><br>
          <router-link :to="{ name: '', params: {} }">Siulomi daliniai kroviniai</router-link><br>

        </card>

        <card class="mt-4">
          <template v-slot:icon>
            <i class="fas fa-ticket-alt"></i>
          </template>
          <template v-slot:title>
            Keltų bilietai
          </template>
          <router-link :to="{ name: '', params: {} }">keltu bilietai transporto imonems</router-link><br>
          <router-link :to="{ name: '', params: {} }">Svarbu žinoti</router-link>

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
