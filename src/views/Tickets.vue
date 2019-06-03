<template lang="html">
  <div class="container">

    <div class="row">
      <div class="col-md">
        <h1 class="cargo-title">Keltų bilietai</h1>
      </div>
    </div>

    <top>
      <template v-slot:first>
        <p class="top-p">Kasmet</p>
        <h2 class="top-h">60000 +</h2>
        <p class="top-p">keltų bilietų</p>
      </template>
      <template v-slot:second>
        <p class="top-p">Nuo 2007 m.</p>
        <h2 class="top-h">900 +</h2>
        <p class="top-p">įmonių grupės klientų</p>
      </template>
      <template v-slot:third>
        <p class="top-p invisible">a</p>
        <h2 class="top-h">60 +</h2>
        <p class="top-p">Keltų operatorių </p>
      </template>
    </top>

    <description>

      <!-- <h4 class="description-title">Keltų bilietai</h4> -->

      <p>Įmonių grupėje per metus užsakome virš 60 000 keltų. Dirbti su keltų bilietais pradėjome nuo 2007
metų. Dėl ilgalaikio patikimo bendradarbiavimo, P&amp;O Short Sea Ferries Limited ir Scandlines
Deutschland GmbH įmonės pasirinko mus oficialiais atstovais Baltijos šalims. 2018 m. pagal Estijos
statistinius duomenis, mūsų įmonių grupės užėmė 2% Talino -Helsinkio transporto priemonių perkėlimo keltais rinkos:</p>
      <h4>Mūsų krovinių transporto priemonių keltų rinkos dalis Talino-Helsinkio rinkoje 2018</h4>
      <div class="d-flex justify-content-center">
        <img class="" src="https://i.imgur.com/tGn2OpA.png" alt="" height="75%" width="75%">
      </div>
      <p>Įsipareigojimų laikymasis, win-win principo siekiamybė, profesionalumas ir patikimumas -
pagrindiniai ilgalaikio bendradarbiavimo su keltų operatoriais sėkmės veiksniai.</p>
      <p>Dirbdami su klientais- transporto įmonėmis- pirmiausiai atsižvelgiame į pagrindinius kliento poreikius
ir pasiūlom optimaliausius keltais persikėlimo variantus kainos ir laiko atžvilgiu. Per visą įmonės
grupių darbo istoriją iki 2016 metų, dėl darbuotojų neteisingų sprendimų buvo prarasta 18 klientų.
Dėl šios priežasties buvo patvirtinti vidiniai įmonių grupės klientų aptarnavimo standartai, kurių
laikosi visi darbuotojai.</p>
      <p>30% klientų naudojasi mūsų sukurta keltų užsakymų sistema, kuri leidžia gauti keltų patvirtinimo
atsakymus realiu laiku. Mes dirbame klientui, todėl su mumis galima susisiekti 7/24/365. Jei norite
palikti atsiliepimą apie mūsų suteiktos paslaugos kokybę, prašom rašyti el.adresus:
info@tvintransus.lt arba skambinti telefono nr: 0037067473716. Visada atsižvelgiam į klientų
pageidavimus- nes tai mūsų tobulėjimo pagrindas.</p>
      <h4>Svarbu žinoti</h4>
      <p>Kelto užsakymui reikalinga informacija: </p>
      <ul>
        <li>transporto priemonės tipas, numeriai;</li>
        <li>plaukimo data; </li>
        <li>vairuotojų skaičius; </li>
        <li>temperatūra, jei reikalingas temperatūrinis režimas; </li>
        <li>un numeris, pavojingumo klasė, pakavimo klasė, krovinio pavadinimas ir svoris, pavojingo krovinio deklaracija- jei krovinis pavojingas (ADR). Svarbu žinoti: naudojant keltą transporto priemonei su mažu kiekiu pavojingo krovinio (limited quantity), vairuotojas visada privalo pateikti pavojingo krovinio deklaraciją ir informuoti apie pavojingą krovinį iš anksto prieš užsakant kelto bilietą; </li>
        <li>pagal kelto reikalavimus, galimai reikalinga papildoma informacija: vairuotojo duomenys, krovinio svoris, tipas.</li>
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
