<script setup lang="ts">
import { useScrollReveal } from "@/composables/useScrollReveal";

const { register } = useScrollReveal();
</script>

<template>
  <section
    id="support"
    class="section-padding"
  >
    <div class="mx-auto w-full max-w-5xl overflow-hidden rounded-[var(--radius-lg)] bg-primary/8 px-4 py-10 shadow-[var(--shadow-card)] md:px-10">
      <div class="flex flex-col items-center gap-8 text-center" :ref="register">
        <span class="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Soutenir Evail
        </span>
        <h2 class="max-w-2xl text-3xl font-bold text-slate md:text-[2.2rem]">
          En offrant un don, vous permettez à nos équipes de soignants de rester près des personnes les plus vulnérables.
        </h2>
        <p class="max-w-2xl text-base text-slate/80 md:text-lg">
          Vos contributions financent le matériel médical, les transports, la logistique des missions et les ateliers de prévention que nous animons avec nos partenaires. Chaque geste compte.
        </p>
        <img
          class="w-40 max-w-full"
          src="/images/logos/colored_evail_logo.png"
          alt="Logo coloré Evail"
          loading="lazy"
        />
        <div class="flex flex-col gap-3 text-sm text-slate/70 md:flex-row md:text-base">
          <p class="rounded-full bg-white px-4 py-2 font-medium text-primary shadow-sm">66% de déduction fiscale</p>
          <p class="rounded-full bg-white px-4 py-2 font-medium text-primary shadow-sm">100€ donnés = 34€ après impôts</p>
        </div>
        <div class="flex flex-col items-center gap-3 md:flex-row">
          <a
            href="https://www.payasso.fr/association-evail-humanitaire/don"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Faire un don sécurisé
          </a>
          <a
            href="mailto:contact.evailhumanitaire@gmail.com"
            class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Discuter d'un partenariat
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
        <figure class="max-w-2xl text-sm italic text-slate/70 md:text-base">
          <blockquote>
            « S'ouvrir aux autres permet de faire tomber nos barrières et de réduire le malheur et l'indifférence. »
          </blockquote>
          <figcaption class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Annie, présidente d'Evail</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
