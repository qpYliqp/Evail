<script setup>
import HomeView from "@/components/HomeView.vue";
import PresentationView from "@/components/PresentationView.vue";
import Staffview from "@/components/Staffview.vue";
import ActionView from "@/components/ActionView.vue";
import ImageCarouselView from "@/components/ImageCarouselView.vue";
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

    <HomeView></HomeView>
    <PresentationView></PresentationView>
    <Staffview></Staffview>
    <ActionView></ActionView>
    <ImageCarouselView></ImageCarouselView>
    <TravelView></TravelView>
    <DonateView></DonateView>
    <FooterView></FooterView>

  </main>
</template>

<style scoped>

</style>
