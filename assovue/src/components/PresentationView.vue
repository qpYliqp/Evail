<script setup lang="ts">
import { useScrollReveal } from "@/composables/useScrollReveal";

const { register } = useScrollReveal();

const highlights = [
  "Construire des missions de soins qui respectent les cultures locales et renforcent les structures déjà présentes.",
  "Créer des espaces d'écoute pour les personnes isolées, fragilisées ou en perte d'autonomie.",
  "Donner de la voix aux acteurs associatifs et aux soignants engagés afin de valoriser leurs initiatives." 
];
</script>

<template>
  <section
    id="mission"
    class="section-padding"
  >
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6 lg:flex-row lg:items-center">
      <div class="flex-1 space-y-6" :ref="register">
        <span class="rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Notre mission
        </span>
        <h2 class="text-3xl font-bold text-slate md:text-[2.5rem]">
          Diffuser une chaîne de soin bienveillant, de la prévention à l'accompagnement.
        </h2>
        <p class="max-w-xl text-base leading-relaxed text-slate/80 md:text-lg">
          Evail Humanitaire est née de l'amitié et du rêve partagé de trois professionnelles de santé, Annie, Minette et Yaye. Ensemble, elles ont transformé leur engagement en une organisation agile, capable de rassembler des soignants prêts à aller au-devant des besoins les plus urgents.
        </p>
        <ul class="grid gap-4 text-sm text-slate/80 md:text-base">
          <li
            v-for="highlight in highlights"
            :key="highlight"
            class="flex items-start gap-3 rounded-[var(--radius-sm)] bg-white/70 p-4 shadow-[var(--shadow-card)]"
          >
            <span class="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a3 3 0 0 1 6 0V6h1.25A2.75 2.75 0 0 1 19 8.75v9.5A2.75 2.75 0 0 1 16.25 21.5H7.75A2.75 2.75 0 0 1 5 18.25v-9.5A2.75 2.75 0 0 1 7.75 6H9V4.5Zm1.5 0a1.5 1.5 0 1 1 3 0V6h-3V4.5ZM9 9.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 9.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm.75 2.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="leading-relaxed">{{ highlight }}</span>
          </li>
        </ul>
        <a
          href="https://www.payasso.fr/association-evail-humanitaire/don"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          En savoir plus sur nos engagements
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
      <div class="flex-1" :ref="register">
        <div class="relative overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-[var(--shadow-card)]">
          <img
            src="/images/staff/staff.png"
            srcset="/images/staff/staff.png 1x, /images/staff/staff.png 2x"
            alt="Le trio fondateur d'Evail en mission"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent p-6 text-white">
            <p class="text-sm font-medium uppercase tracking-[0.2em]">Une histoire collective</p>
            <p class="mt-2 text-lg font-semibold">Annie, Minette et Yaye ont fédéré plus de 30 soignants autour d'une vision humaniste.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
