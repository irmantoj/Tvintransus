<template lang="html">
  <div class="container">

    <div class="row">
      <div class="col-md">
        <h1 class="cargo-title">Krovinių pervežimas transporto įmonėms</h1>
      </div>
    </div>

    <top>
      <template v-slot:first>
        <p class="top-p">Nuo 2017 m.</p>
        <h2 class="top-h">Patikimumas</h2>
        <p class="top-p">tarp 5% stabiliausių Lietuvos įmonių</p>
      </template>
      <template v-slot:second>
        <p class="top-p">2011 m.</p>
        <h2 class="top-h">Klaipėdos Gazelė</h2>
      </template>
      <template v-slot:third>
        <p class="top-p">Kasmetinis</p>
        <h2 class="top-h">20% +</h2>
        <p class="top-p">apyvartos augimas</p>
      </template>
    </top>

    <description>

      <h4 class="description-title">Svarbu žinoti</h4>
      <p>Kelto užsakymui reikalinga informacija:</p>
      <ul>
        <li>transporto priemonės tipas, numeriai;</li>
        <li>plaukimo data;</li>
        <li>vairuotojų skaičius;</li>
        <li>temperatūra, jei reikalingas temperatūrinis režimas;</li>
        <li>un numeris, pavojingumo klasė, pakavimo klasė, krovinio pavadinimas ir svoris, pavojingo krovinio deklaracija- jei krovinis pavojingas (ADR). Svarbu žinoti: naudojant keltą transporto priemonei su mažu kiekiu pavojingo krovinio (limited quantity), vairuotojas visada privalo pateikti pavojingo krovinio deklaraciją ir informuoti apie pavojingą krovinį iš anksto prieš užsakant kelto bilietą;</li>
        <li>pagal kelto reikalavimus, galimai reikalinga papildoma informacija: vairuotojo duomenys, krovinio svoris, tipas;</li>
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
