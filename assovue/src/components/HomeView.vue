<script lang="ts">
</script>


<template>
  <div class="home-container">
    <div class="filter background-filter-black filter-animation flex align-center justify-center">
      <div class="home-information title_size">
        <img src="/images/logos/red_evail_logo.png" alt="logo">
        <p class="text-white">Evail | Humanitaire</p>
      </div>
    </div>
  </div>

</template>


<style scoped>

.home-container {
  height: 85vh;
  background-image: url("/images/backgrounds/home_background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.home-container img {
  max-width: 30rem;
  max-height: 50vh;
}

.home-information {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
}

@media (max-width: 800px) {
  .home-information {
    flex-direction: column;
    text-align: center;
  }
}

</style>