<template lang="html">
  <div class="container">

    <div class="row">
      <div class="col-md">
        <h1 class="cargo-title">Krovinių transportavimas užsakovams</h1>
      </div>
    </div>

    <top>
      <template v-slot:first>
        <p class="top-p">Nuo 2017 m.</p>
        <h2 class="top-h">Patikimumas</h2>
        <p class="top-p">tarp 5% stabiliausių Lietuvos įmonių</p>
      </template>
      <template v-slot:second>
        <p class="top-p">2012 m.</p>
        <h2 class="top-h">Klaipėdos Gazelė</h2>
      </template>
      <template v-slot:third>
        <p class="top-p">Kasmetinis</p>
        <h2 class="top-h">20% +</h2>
        <p class="top-p">apyvartos augimas</p>
      </template>
    </top>

    <description>
      <h4 class="description-title">Daliniai kroviniai</h4>
      <p>Tvintransus UAB teikia vietinių ir  tarptautinių dalinių krovinių gabenimo paslaugas užsakovams. Gabename dalinius krovinius iš/į ES ir Baltijos šalis, Baltijos šalyse.</p>
      <p>Dalinių krovinių gabenimas padeda sutaupyti, nes užsakoma ne visa transporto priemonė. Gabenant dalinus krovinius, galima vežti tiesiogiai- į transporto priemonę pakraunant kelių užsakovų krovinius arba per terminalą-iš užsakovo paimamas krovinys, vežamas į terminalą, kur krovinys sukomplektuojamas su kitais kroviniais ir pervežamas į paskirties šalies terminalą, iš kurio krovinys pristatomas užsakovui. --></p>
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
