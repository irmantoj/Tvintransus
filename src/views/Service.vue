<template lang="html">
    <div class="container">

      <div class="row">
        <div class="col-md">
          <h1 class="service-title">Paslaugos</h1>
        </div>
      </div>

      <div class="row mb-4">

        <div class="col-md">
          <router-link class="card-link" to="/loads-transportation-for-customers">
            <card class="mt-4">

              <template v-slot:icon>
                <i class="fas fa-user"></i>
              </template>
              <template v-slot:title>
                Krovinių transportavimas užsakovams
              </template>
               <router-link class="color-red" to="/loads-transportation-for-customers">Pilni kroviniai</router-link><br>
               <router-link class="color-red" to="/loads-transportation-for-customers">Daliniai kroviniai</router-link><br>
               <router-link class="color-red" to="/loads-transportation-for-customers">Svarbu žinoti</router-link>

            </card>
          </router-link>
        </div>

        <div class="col-md">
          <router-link class="card-link" to="/loads-transportation-for-companies">
            <card class="mt-4">

              <template v-slot:icon>
                <i class="fas fa-truck"></i>
              </template>
              <template v-slot:title>
                Krovinių pervežimas transporto įmonėms
              </template>
              <router-link class="color-red" to="/loads-transportation-for-companies">Siūlomi pilni kroviniai</router-link><br>
              <router-link class="color-red" to="/loads-transportation-for-companies">Siūlomi daliniai kroviniai</router-link><br>

            </card>
          </router-link>
        </div>

        <div class="col-md">
          <router-link class="card-link" to="/tickets">
            <card class="mt-4">

              <template v-slot:icon>
                <i class="fas fa-ticket-alt"></i>
              </template>
              <template v-slot:title>
                Keltų bilietai
              </template>
              <router-link class="color-red" to="/tickets">Keltų bilietai</router-link><br>
              <router-link class="color-red" to="/tickets">Svarbu žinoti</router-link><br>

            </card>
          </router-link>
        </div>
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

  .card-link {
    color: black;
  }

  /* .color-red {
    color : #FF2A1B;
    font-weight: 500;

  } */

</style>
