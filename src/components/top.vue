<template lang="html">

  <div class="row mt-3">

    <div class="col-md bottom-line">
      <slot name="first"></slot>
    </div>

    <div class="col-md bottom-line">
      <slot name="second"></slot>
    </div>

    <div class="col-md bottom-line">
      <slot name="third"></slot>
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style lang="css" scoped>

.top-p {
  margin: 0;
  color: #F05E61;
}

.top-h {
  margin: 0;
}

.bottom-line {
  border-bottom: 3px solid #EEEFF2;
  padding-bottom: 20px;
}

</style>
