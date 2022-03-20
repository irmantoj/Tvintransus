<template lang="html">
  <div class="container">

    <div class="row">
      <div class="col-md">
        <h1 class="cargo-title">{{ $t("tickets.mainTitle") }}</h1>
      </div>
    </div>

    <top>
      <template v-slot:first>
        <p class="top-p">{{ $t("tickets.top[0][0]") }}</p>
        <h2 class="top-h">{{ $t("tickets.top[0][1]") }}</h2>
        <p class="top-p">{{ $t("tickets.top[0][2]") }}</p>
      </template>
      <template v-slot:second>
        <p class="top-p">{{ $t("tickets.top[1][0]") }}</p>
        <h2 class="top-h">{{ $t("tickets.top[1][1]") }}</h2>
        <p class="top-p">{{ $t("tickets.top[1][2]") }}</p>
      </template>
      <template v-slot:third>
        <p class="top-p invisible">{{ $t("tickets.top[2][0]") }}</p>
        <h2 class="top-h">{{ $t("tickets.top[2][1]") }}</h2>
        <p class="top-p">{{ $t("tickets.top[2][2]") }}</p>
      </template>
    </top>

    <description>

      <!-- <h4 class="description-title">Keltų bilietai</h4> -->

      <p>{{ $t('tickets.paragraphs[0]') }}</p>
      <h4 v-bind:class="[ $t('tickets.titles[0]') === '' ? 'invisible' : '']">{{$t("tickets.titles[0]")}}</h4>
      <div class="d-flex justify-content-center">
        <img class="" :src="$t('tickets.img')" alt="" height="75%" width="75%">
      </div>
      <p>{{ $t('tickets.paragraphs[1]') }}</p>
      <p>{{ $t('tickets.paragraphs[2]') }}</p>
      <p>{{ $t('tickets.paragraphs[3]') }}</p>
      <h4>{{$t("tickets.titles[1]")}}</h4>
      <p>{{ $t('tickets.paragraphs[4]') }}</p>
      <ul>
        <li>{{ $t("tickets.listItems[0]") }}</li>
        <li>{{ $t("tickets.listItems[1]") }}</li>
        <li>{{ $t("tickets.listItems[2]") }}</li>
        <li>{{ $t("tickets.listItems[3]") }}</li>
        <li>{{ $t("tickets.listItems[4]") }}</li>
        <li v-bind:class="[ $t('tickets.listItems[5]') === '' ? 'invisible' : '']">{{ $t("tickets.listItems[5]") }}</li>
      </ul>
    </description>

  </div>

</template>

<script>
import top from "./../components/top.vue"
import description from "./../components/description.vue"

export default {

  components : { top, description }

}
</script>

<style lang="css" scoped>

 .cargo-title {
   border-bottom: 3px solid #EEEFF2;
   padding-bottom: 20px;
 }

 .description-title {
   /* border-top: 3px solid #EEEFF2;
   padding-top: 20px; */
 }

 .description-content {
   /* border: 1px #EEEFF2 groove; */
    background-color: #EEEFF2;
    border-radius: 20px;
 }

 .top-p {
   margin: 0;
   color: #F05E61;
   font-weight: 500;
 }

 .top-h {
   margin: 0;
 }

</style>
