<script setup>

</script>

<template>
  <div class="home_content">

    <div class="home_background_filter">

      <div class="home_information">

        <img class="home_logo" src="/images/logos/red_evail_logo.png" alt="Evail logo" >

        <p class="home_title text-white-color">Evail | Humanitaire</p>

      </div>

    </div>

  </div>
</template>

<style scoped>

.home_content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/images/backgrounds/home_background.jpg");
  background-size: cover;
  background-position: center; /* Centrer le background pour éviter le dépassement */
  background-repeat: no-repeat;
}

.home_background_filter {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Couleur de fond pour le filtre */
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home_information {
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.home_logo {
  max-width: 20vw;
  height: auto;
}

.home_title {
  font-size: 5vw;
}

@media (max-width: 1500px) {

}

@media (max-width: 1200px) {

  .home_title
  {
    font-size: 7vw;
  }

  .home_logo
  {
    max-width: 30vw;
  }

}

@media (max-width: 800px) {

  .home_information
  {
    flex-direction: column;
  }

}

@media (max-width: 500px)
{

  .home_logo
  {
    width: 70vh;
    height: auto;
  }

}

</style>
