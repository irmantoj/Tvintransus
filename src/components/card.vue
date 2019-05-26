<template lang="html">
    <div class="col-md">
      <div class="card" style="height : 395px">
        <div class="d-flex align-items-center justify-content-center card-top">
          <slot name="icon"></slot>
        </div>
        <div class="card-body" style="background-color : #EEEFF2">
          <h5 class="card-title" style="height : 48px"><slot name="title"></slot></h5><hr>
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

.card-top {
  background-color: #C7413C;
  height: 200px;
  width: 100%;
  font-size: 7rem;
}


</style>
