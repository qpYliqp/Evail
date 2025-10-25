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
  <main class="min-h-screen w-screen overflow-x-hidden bg-white text-black">
    <HomeView />
    <PresentationView />
    <Staffview />
    <ActionView />
    <TravelView />
    <DonateView />
    <FooterView />
  </main>
</template>
