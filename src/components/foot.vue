<template lang="html">
  <footer class="container-fluid dark p-0">
    <div class="container d-none d-md-block">
      <div class="row">
        <div class="col-md">
          <img class="ml-3 mt-1" src="https://i.imgur.com/SbZteZz.png" alt="logo">
        </div>
      </div>
      <div class="row">

        <div class="col-md p-2">
          <p class="mb-1">{{ $t("contacts.street") }}, Kretinga <br> Lietuva, LT97321</p>
          <p class="mb-1">0037067463716</p>
          <p class="mb-1">logistika@tvintransus.lt</p>
        </div>

        <div class="col-md p-2 text-right">
          <p class="mb-1">Copyright 2019 &#9400 Tvintransus <br /> Designed by Irmantas Jasevičius</p>
        </div>
      </div>

    </div>

    <div class="container d-md-none">
      <div class="row">
        <div class="col mt-4">
          <p class="mb-1">{{ $t("contacts.street") }}, Kretinga <br> Lietuva, LT97321</p>
          <p class="mb-1">0037067463716</p>
          <p class="mb-1">logistika@tvintransus.lt</p>
        </div>
        <div class="col mt-4 ">
          <div class="text-right">
            <img class="mt-1" src="https://i.imgur.com/SbZteZz.png" alt="logo">
          </div>
        </div>

        <div class="col-md mt-4 pb-4">
          <div class="row">
            <div class="col-md">
              <div class="text-center">
                <p class="mb-1">Copyright 2019 &#9400 Tvintransus <br /> Designed by Irmantas Jasevičius</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .dark {
    color: rgb(230, 230, 230);
    background-color: #141515;
  }

  @media only screen and (max-width: 767px) {

  }

</style>
