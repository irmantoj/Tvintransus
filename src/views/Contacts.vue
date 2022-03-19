<template lang="html">
  <div class="">

    <div class="container">

      <!-- <div class="row">
        <div class="col-md">
          <h1 class="contacts-title" >Kontaktai</h1>
        </div>
      </div> -->

      <div class="row">

        <div class="col-md">
          <h1 class="text-center contacts-title">{{ $t("contacts.title") }}</h1>
          <div class="">
            <p class="text-center">{{ $t("contacts.street") }}, <br> Kretinga, <br> LT97321 Lietuva</p>
            <p class="text-center">0037067463716</p>
            <p class="text-center">logistika@tvintransus.lt</p>
          </div>
        </div>

      </div>
    </div>
    <div class="container-fluid bg-light">

        <div class="row">
          <div class="col-md p-0">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.5587328670445!2d21.252122315935758!3d55.88766868058966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e524205dc1e529%3A0x449cec4108b934d1!2sVytauto+g.+71%2C+Kretinga+97129!5e0!3m2!1slt!2slt!4v1559487096340!5m2!1slt!2slt" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.contacts-title {
  border-bottom: 3px solid #EEEFF2;
  padding-bottom: 20px;

   /* font-weight: 800; */
}
.contacts-icon {
  font-size: 2rem ;
}

.message-input {
  width: 100%;
  border-radius: 12px;
  /* border-style: solid; */
  padding: 5px;
  background-color: #EEEFF2
}

iframe {
  color : grey;
}

#map {
    -webkit-filter: grayscale(90%);
       -moz-filter: grayscale(90%);
        -ms-filter: grayscale(90%);
         -o-filter: grayscale(90%);
            filter: grayscale(90%);
}


</style>
