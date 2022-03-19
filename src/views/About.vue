<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md">
        <h1 class="about-title">{{ $t("about.mainTitle") }}</h1>
      </div>
    </div>
    <description>
      <!-- <h5 class="text-center">Mūsų misija:</h5> -->
      <!-- <h3 class="text-center mb-4 color-red">Padaryti geriau, nei tikėtasi, užsakant paslaugą.</h3> -->
    <div class="row">

      <div class="col-md">
        <p class="mb-1">{{ $t("about.paragraphs[0]") }}</p>
      </div>
      <div class="col-md">
        <p class="mb-1">{{ $t("about.paragraphs[1]") }}</p>
        <p class="mb-1">{{ $t("about.paragraphs[2]") }}</p>
        <p class="mb-1">{{ $t("about.paragraphs[3]") }}</p>
      </div>

    </div>
    </description>


  </div>
</template>

<script>

import description from "../components/description.vue"

export default {

  components : {description}
}
</script>

<style lang="css" scoped>

.about-title {
  border-bottom: 3px solid #EEEFF2;
  padding-bottom: 20px;
}

.about-content {
  border : 1px #EEEFF2 groove;
  background-color: #EEEFF2;
}

.color-red {
  color : #DD2A1B;
}

</style>
