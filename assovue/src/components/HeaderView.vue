<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const isMenuOpen = ref(false);
const hasScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const headerClasses = computed(() =>
  [
    "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
    hasScrolled.value ? "bg-white/90 shadow-sm backdrop-blur" : "bg-transparent",
  ].join(" ")
);

const navLinkClasses =
  "text-sm font-medium tracking-wide text-slate transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const navItems = [
  { label: "Notre mission", href: "#mission" },
  { label: "Valeurs", href: "#values" },
  { label: "Équipe", href: "#team" },
  { label: "Actions", href: "#actions" },
  { label: "Soutenir", href: "#support" },
];
</script>

<template>
  <header :class="headerClasses">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
      <a
        href="#hero"
        class="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        @click="closeMenu"
      >
        <img
          src="/images/logos/red_evail_logo.png"
          alt="Evail humanitaire"
          class="h-10 w-auto"
        />
        <span class="font-heading text-lg font-semibold text-primary">Evail Humanitaire</span>
      </a>
      <button
        class="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        type="button"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span class="sr-only">Ouvrir le menu</span>
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5H12" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="navLinkClasses"
        >
          {{ item.label }}
        </a>
        <a
          href="#support"
          class="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Faire un don
        </a>
      </nav>
    </div>
    <div
      v-if="isMenuOpen"
      class="bg-white/95 shadow-lg md:hidden"
    >
      <nav class="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-6 pt-2 text-base font-medium text-slate">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-dusk/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a
          href="#support"
          class="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          @click="closeMenu"
        >
          Faire un don
        </a>
      </nav>
    </div>
  </header>
</template>
