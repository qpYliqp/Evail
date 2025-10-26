<script setup lang="ts">
const supports = [
  'Vos dons financent directement les soins, les médicaments et la logistique des missions.',
  'Chaque euro est tracé : un reçu fiscal est délivré et 66 % de votre don est déductible.',
  'Vous rejoignez une communauté de bienveillance qui fait rayonner la solidarité.',
]
</script>

<template>
  <section id="support" class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 via-white to-secondary/15"></div>
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-4 section-spacing sm:px-6 lg:flex-row lg:items-center lg:px-8">
      <div class="flex-1 space-y-6" data-animate="reveal">
        <span class="badge-pill">Nous soutenir</span>
        <h2 class="font-heading heading-2 text-gray-900">
          Ensemble, faisons circuler la bonne humeur solidaire
        </h2>
        <p class="text-fluid text-gray-700">
          En soutenant EVAIL, vous permettez aux équipes pluri-professionnelles de prolonger leurs actions sur le terrain et de
          déployer de nouveaux projets dans les territoires qui en ont le plus besoin.
        </p>
        <ul class="space-y-3 text-fluid text-gray-700">
          <li v-for="item in supports" :key="item" class="flex items-start gap-3">
            <span class="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            class="btn-primary text-base"
            href="https://www.payasso.fr/association-evail-humanitaire/don"
            target="_blank"
            rel="noopener"
          >
            Faire un don maintenant
          </a>
          <span class="text-xs font-medium uppercase tracking-wide text-gray-500">66 % déductible de vos impôts</span>
        </div>
      </div>

      <div class="flex flex-1 justify-center" data-animate="reveal">
        <div class="card-surface flex w-full max-w-md flex-col items-center gap-6 rounded-[1.75rem] bg-white/90 p-8 text-center">
          <img class="h-24 w-auto" src="/images/logos/colored_evail_logo.png" alt="Logo coloré Evail" loading="lazy" />
          <p class="text-lg font-semibold text-gray-900">
            « S’ouvrir aux autres permet de faire tomber les barrières et de réduire l’indifférence. »
          </p>
          <p class="text-sm text-gray-600">Annie, présidente d’Evail</p>
        </div>
      </div>
    </div>
  </section>
</template>
