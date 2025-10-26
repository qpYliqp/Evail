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
  <main
    class="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-white/80 via-sand/60 to-white/90 font-sans text-dusk"
  >
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute -left-32 top-12 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>
      <div class="absolute right-[-6rem] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 translate-y-1/3 rounded-full bg-travel/10 blur-3xl"></div>
    </div>

    <HomeView />
    <PresentationView />
    <Staffview />
    <ActionView />
    <TravelView />
    <DonateView />
    <FooterView />
  </main>
</template>
