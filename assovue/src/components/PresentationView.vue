<script setup lang="ts">
const highlights = [
  'Co-construction avec les structures de santé locales',
  'Prévention, dépistage et parcours de soin individualisés',
  'Transmission de compétences pour favoriser l’autonomie',
]
</script>

<template>
  <section id="mission" class="bg-white">
    <div class="mx-auto grid max-w-6xl gap-12 px-4 section-spacing sm:px-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:px-8">
      <div class="flex flex-col gap-6" data-animate="reveal">
        <span class="badge-pill">Notre mission</span>
        <h2 class="font-heading heading-2 text-gray-900">
          Tisser des liens durables entre soignants et communautés
        </h2>
        <p class="text-fluid text-gray-700">
          EVAIL humanitaire est née de l’amitié d’Annie, Minette et Yaye, trois professionnelles animées par un même rêve :
          apporter des soins de qualité au-delà des frontières. Aux côtés des partenaires locaux, nous accompagnons chaque étape
          des missions, de la prévention à la prise en charge.
        </p>
        <div class="space-y-3 text-fluid text-gray-700">
          <p>
            Nos voyages sont pensés comme des expériences collectives : nous écoutons les besoins, impliquons les équipes
            hospitalières et mobilisons les bénévoles pour créer un impact positif, dans le respect des cultures locales.
          </p>
          <ul class="mt-4 space-y-2">
            <li v-for="item in highlights" :key="item" class="flex items-start gap-3">
              <span class="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">&bull;</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <a href="#travels" class="btn-secondary mt-4">Explorer nos voyages</a>
      </div>

      <div class="relative" data-animate="reveal">
        <div class="absolute -inset-6 hidden rounded-[2rem] bg-primary/10 blur-2xl lg:block"></div>
        <div class="relative overflow-hidden rounded-[1.75rem] bg-secondary/10 shadow-soft">
          <picture>
            <source
              srcset="/images/staff/staff.png 640w, /images/staff/staff.png 1280w"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <img
              src="/images/staff/staff.png"
              alt="Annie, Minette et Yaye de l’équipe Evail"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
