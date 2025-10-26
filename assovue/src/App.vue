<script setup>
import HeaderView from "@/components/HeaderView.vue";
import HomeView from "@/components/HomeView.vue";
import PresentationView from "@/components/PresentationView.vue";
import ValuesView from "@/components/ValuesView.vue";
import Staffview from "@/components/Staffview.vue";
import ActionView from "@/components/ActionView.vue";
import TravelView from "@/components/TravelView.vue";
import DonateView from "@/components/DonateView.vue";
import FooterView from "@/components/FooterView.vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

useScrollReveal();
</script>

<template>
  <div class="min-h-screen bg-white/95 text-black">
    <HeaderView />
    <main class="w-full overflow-x-hidden">
      <HomeView />
      <PresentationView />
      <ValuesView />
      <Staffview />
      <ActionView />
      <TravelView />
      <DonateView />
    </main>
    <FooterView />
  </div>
</template>
