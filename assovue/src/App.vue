<script setup>
import HomeView from "@/components/HomeView.vue";
import PresentationView from "@/components/PresentationView.vue";
import Staffview from "@/components/Staffview.vue";
import ActionView from "@/components/ActionView.vue";
import TravelView from "@/components/TravelView.vue";
import DonateView from "@/components/DonateView.vue";
import FooterView from "@/components/FooterView.vue";



</script>

<template>
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="/images/logos/evail-icon.png">
    <title>Evail</title>
  </head>

  <main>
    <div style="width: 100vw; height: 100vh;">
      <HomeView></HomeView>
      <PresentationView></PresentationView>
      <Staffview></Staffview>
      <ActionView></ActionView>
      <TravelView></TravelView>
      <DonateView></DonateView>
      <FooterView></FooterView>
    </div>
  </main>


</template>

<style scoped>

</style>
