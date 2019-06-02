<template lang="html">
  <div class="row mt-4">
    <div class="col-md">
      <div class="description-content p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.description-content {
  /* border: 1px #EEEFF2 groove; */
   background-color: #EEEFF2;
   border-radius: 20px;
}

</style>
