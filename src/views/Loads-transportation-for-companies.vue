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

      <h4 class="description-title">Siūlomi pilni kroviniai</h4>
      <p>Transporto įmonėms siūlome pervežti krovinius Vakarų ir Rytų Europoje. Vežant mūsų krovinius užtikriname:</p>
      <ul>
        <li>operatyvų krovinio pakrovimą, iškrovimą;</li>
        <li>operatyvų informacijos pateikimą;</li>
        <li>sutartą laiku atsiskaitymą.</li>
      </ul>
      <p>Naujiems partneriams, kaip patikimumo garantą, galime pasiūlyti su mumis dirbančių įmonių rekomendacijas. Įmonės pasiekimai:  laimėta Klaipėdos apskrities Gazelė, kasmetinis įmonių grupės apyvartos augimas 20 %, keleri metai iš eilės patenkame į Creditreform Lietuva UAB  5% stabiliausių įmonių sąrašą:</p>

      <ol>
        <li>2011 m. UAB Tvintransus tapo sparčiausiai augusia Klaipėdos apskrities “gazele”. Įvertinimas
atliktas remiantis kasmetiniu apyvartos augimu.</li>
        <li>Pastaraisiais metais patenkame į 5% Lietuvos stabiliausių įmonių sąrašą, Creditreform Lietuva UAB
duomenimis. Įvertinimas atliekamas remiantis Creditreform Lietuva UAB metodika ir kelių metų
įmonės padėties rinkoje ir vystymosi analize.</li>
      </ol>

      <p>Darbo su UAB Tvintransus privalumai:</p>
      <ul>
        <li>Jūsų transporto paslaugos bus greitai ir patikimai apmokėtos - tai garantuoja mūsų geras kreditingumas;</li>
        <li>Jei krovinio pervežimo kelyje yra keltų arba tiltų, transporto įmonėms , vežančioms mūsų krovinį pasiūlome tiltus arba keltus konkurencinga kaina. Patikima verslo partnerystė su keltų ir tiltų operatoriais  nuo 2007 metų suteikia galimybę vežėjams pasiūlyti konkurencingas keltų ir tiltų kainas Vakarų Europoje Ro-Ro, Ro-Pax keltuose. Esame  P&O Short Sea Ferries Limited ir Scandlines Deutschland GmbH oficialūs atstovai Baltijos šalims.
        </li>
        <li>Ilgalaikė partnerystė - transporto įmonės, krovinių pasiūlymų pirmenybę gauna pagal  UAB Tvintransus išvežtų krovinių skaičių.</li>
      </ul>

      <h4 class="description-title">Siūlomi daliniai kroviniai</h4>
      <p>Transporto įmonėms siūlome dalinius krovinius Baltijos, ES ir NVS šalyse.</p>
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
