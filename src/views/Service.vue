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

            <rounded class="mt-4">
              <template v-slot:img>
                <img class="circle-pic" src="https://i.imgur.com/1GRm93a.jpg" alt="">
              </template>
              <template v-slot:title>
                <h5 class="mt-4 text-center title-hover">Krovinių transportavimas užsakovams</h5>
              </template>
            </rounded>

            <!-- <card class="mt-4">
              <template v-slot:icon>
                <img src="https://img.icons8.com/carbon-copy/100/000000/gender-neutral-user.png">
              </template>
              <template v-slot:title>
                Krovinių transportavimas užsakovams
              </template>
               <router-link class="color-red" to="/loads-transportation-for-customers">Pilni kroviniai</router-link><br>
               <router-link class="color-red" to="/loads-transportation-for-customers">Daliniai kroviniai</router-link><br>
               <router-link class="color-red" to="/loads-transportation-for-customers">Svarbu žinoti</router-link>
            </card> -->

          </router-link>
        </div>

        <div class="col-md">
          <router-link class="card-link" to="/loads-transportation-for-companies">

            <rounded class="mt-4">
              <template v-slot:img>
                <img class="circle-pic" src="https://i.imgur.com/HK0lv8Q.jpg" alt="">
              </template>
              <template v-slot:title>
                <h5 class="mt-4 text-center title-hover">Krovinių pervežimas transporto įmonėms</h5>
              </template>
            </rounded>

            <!-- <card class="mt-4">

              <template v-slot:icon>
                <img src="https://image.flaticon.com/icons/svg/144/144502.svg">
              </template>
              <template v-slot:title>
                Krovinių pervežimas transporto įmonėms
              </template>
              <router-link class="color-red" to="/loads-transportation-for-companies">Siūlomi pilni kroviniai</router-link><br>
              <router-link class="color-red" to="/loads-transportation-for-companies">Siūlomi daliniai kroviniai</router-link><br>

            </card> -->
          </router-link>
        </div>

        <div class="col-md">
          <router-link class="card-link" to="/tickets">

            <rounded class="mt-4">
              <template v-slot:img>
                <img class="circle-pic" src="https://i.imgur.com/sZpiSOw.jpg" alt="">
              </template>
              <template v-slot:title>
                <h5 class="mt-4 text-center title-hover">Keltų bilietai</h5>
              </template>
            </rounded>

            <!-- <card class="mt-4">

              <template v-slot:icon>
                <img src="https://img.icons8.com/carbon-copy/100/000000/ticket.png">
              </template>
              <template v-slot:title>
                Keltų bilietai
              </template>
              <router-link class="color-red" to="/tickets">Keltų bilietai</router-link><br>
              <router-link class="color-red" to="/tickets">Svarbu žinoti</router-link><br>

            </card> -->
          </router-link>
        </div>
      </div>
    </div>

</template>

<script>

import card from "./../components/card.vue"
import rounded from "./../components/rounded.vue"

export default {

  components: {card, rounded}
  
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

  .circle-pic {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    filter: grayscale(100%);
  }

  /* .color-red {
    color : #FF2A1B;
    font-weight: 500;

  } */

</style>
