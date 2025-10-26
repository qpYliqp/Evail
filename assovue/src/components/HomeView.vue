<script setup lang="ts">
import { useScrollReveal } from "@/composables/useScrollReveal";

const { register } = useScrollReveal();

const stats = [
  { label: "Bénéficiaires accompagnés", value: "10 000+" },
  { label: "Soignants mobilisés", value: "30" },
  { label: "Partenaires locaux", value: "18" },
];
</script>

<template>
  <section
    id="hero"
    class="section-padding relative overflow-hidden pt-28"
  >
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sand to-dusk"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-4 md:flex-row md:items-stretch md:px-6">
      <div
        class="flex w-full flex-1 flex-col items-start justify-center gap-6 text-left"
        :ref="register"
      >
        <span class="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
          Diffuseurs de solidarité
        </span>
        <h1 class="text-3xl font-bold text-slate md:text-4xl lg:text-[2.9rem]">
          Une énergie collective pour prendre soin des communautés les plus fragiles.
        </h1>
        <p class="max-w-xl text-base text-slate/80 md:text-lg">
          Avec nos équipes de soignants et de volontaires, nous faisons rayonner un soutien humain, chaleureux et durable sur le terrain comme à distance.
        </p>
        <div class="flex flex-col items-start gap-3 sm:flex-row">
          <a
            href="#support"
            class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Agir avec nous
          </a>
          <a
            href="#mission"
            class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Découvrir notre mission
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </div>
      <div
        class="relative flex w-full flex-1 items-center justify-center"
        :ref="register"
      >
        <div class="relative w-full max-w-xl overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
          <img
            src="/images/backgrounds/home_background.jpg"
            srcset="/images/backgrounds/home_background.jpg 800w, /images/backgrounds/home_background.jpg 1200w"
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 420px, 100vw"
            alt="Bénévole d'Evail au contact d'une patiente"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </div>
    <div
      class="mx-auto mt-12 w-full max-w-6xl"
      :ref="register"
    >
      <dl class="grid grid-cols-1 gap-4 rounded-[var(--radius-md)] bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm sm:grid-cols-3">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex flex-col items-start gap-1 rounded-[var(--radius-sm)] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-dusk/60"
        >
          <dt class="text-xs font-medium uppercase tracking-[0.18em] text-slate/70">{{ stat.label }}</dt>
          <dd class="text-2xl font-heading font-bold text-primary">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
