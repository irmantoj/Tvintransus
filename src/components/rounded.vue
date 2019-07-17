<template lang="html">
    <div class="selecting">
      <div class="border-circle">
        <slot name="img"><img class="circle-pic img-fluid" src="https://i.imgur.com/SbZteZz.png" alt=""></slot>
      </div>
      <slot name="title"><h5 class="mt-4 text-center">Krovinių transportavimas užsakovams</h5></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>

  /* .border-hover:hover {
    border: 4px solid #C7413C;
  }

  .border-hover:hover + h5 {
    color : #C7413C;
  }

  h5:hover {
    color : #C7413C;
  }

  h5:hover {
    border: 4px solid #C7413C;
  } */

  .border-circle {
    border-radius: 50%;
    border: 4px solid #f9f9f9;
    height: 100%;
    width: 100%;
  }

  .selecting:hover h5 {
    color : #C7413C;
  }

  .selecting:hover div {
    border: 4px solid #C7413C;
  }




</style>
