<script setup>
import HeaderView from "@/components/HeaderView.vue";
import HomeView from "@/components/HomeView.vue";
import PresentationView from "@/components/PresentationView.vue";
import ActionView from "@/components/ActionView.vue";
import Staffview from "@/components/Staffview.vue";
import TravelView from "@/components/TravelView.vue";
import DonateView from "@/components/DonateView.vue";
import FooterView from "@/components/FooterView.vue";
</script>

<template>
  <div class="relative min-h-screen w-full overflow-x-hidden bg-sand text-slate">
    <HeaderView />
    <main class="flex flex-col">
      <HomeView />
      <PresentationView />
      <ActionView />
      <Staffview />
      <TravelView />
      <DonateView />
    </main>
    <FooterView />
  </div>
</template>
