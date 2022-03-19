<template lang="html">
  <div class="container">

    <div class="row">
      <div class="col-md">
        <h1 class="cargo-title">{{ $t("companies.mainTitle") }}</h1>
      </div>
    </div>

    <top>
      <template v-slot:first>
        <p class="top-p">{{ $t("customers.top[0][0]") }}</p>
        <h2 class="top-h">{{ $t("customers.top[0][1]") }}</h2>
        <p class="top-p">{{ $t("customers.top[0][2]") }}</p>
      </template>
      <template v-slot:second>
        <p class="top-p">{{ $t("customers.top[1][0]") }}</p>
        <h2 class="top-h">{{ $t("customers.top[1][1]") }}</h2>
      </template>
      <template v-slot:third>
        <p class="top-p">{{ $t("customers.top[2][0]") }}</p>
        <h2 class="top-h">{{ $t("customers.top[2][1]") }}</h2>
        <p class="top-p">{{ $t("customers.top[2][2]") }}</p>
      </template>
    </top>

    <description>

      <h4 class="description-title">{{ $t("companies.titles[0]") }}</h4>
      <p>{{ $t("companies.paragraphs[0]") }}</p>
      <ul>
        <li>{{ $t("companies.listItems[0][0]") }}</li>
        <li>{{ $t("companies.listItems[0][1]") }}</li>
        <li>{{ $t("companies.listItems[0][2]") }}</li>
      </ul>
      <p>{{ $t("companies.paragraphs[1]") }}</p>

      <ol>
        <li>{{ $t("companies.listItems[1][0]") }}</li>
        <li>{{ $t("companies.listItems[1][1]") }}</li>
      </ol>

      <p>{{ $t("companies.paragraphs[2]") }}</p>
      <ul>
        <li>{{ $t("companies.listItems[2][0]") }}</li>
        <li>{{ $t("companies.listItems[2][1]") }}</li>
        <li>{{ $t("companies.listItems[2][2]") }}</li>
      </ul>

      <h4 class="description-title">{{ $t("companies.titles[1]") }}</h4>
      <p>{{ $t("companies.paragraphs[3]") }}</p>
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
