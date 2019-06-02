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
      <h4 class="description-title">Pilni kroviniai:  tentiniais sunkvežimiais, šaldytuvinėmis puspriekabėmis, sausumos ir jūros transportu</h4>
      <p>Tvintransus UAB teikia vietinių ir  tarptautinių pilnų krovinių gabenimo paslaugas užsakovams. Gabename pilnus krovinius iš/į ES ir Baltijos šalis, Baltijos šalyse, taip pat vežame krovinius į/iš NVS šalis.
      Gabename  krovinius tentinėmis, šaldytuvinėmis puspriekabėmis, taip pat gabename ir pavojingus visų klasių ADR krovinius.</p>
      <p>Dirbame su Lietuvos ir ES šalių prekybos ir gamybos įmonėmis. Visada siūlome kliento poreikius atitinkančią paslaugą už konkurencingą kainą, taip auginame klientų ratą. Metinis įmonių grupių apyvartos augimas 30 %. --></p>
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
