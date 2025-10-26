<script setup lang="ts">
const stats = [
  { value: '+10 000', label: 'bénéficiaires accompagnés' },
  { value: '30+', label: 'soignants mobilisés' },
  { value: '8 pays', label: 'actions en préparation' },
]
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-white">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-4 section-spacing sm:px-6 lg:flex-row lg:items-center lg:px-8">
      <div class="flex-1" data-animate="reveal">
        <span class="badge-pill">Evail humanitaire</span>
        <h1 class="mt-6 font-heading heading-1 text-gray-900">
          Diffuser la bonne humeur, soigner avec humanité
        </h1>
        <p class="mt-6 max-w-xl text-fluid text-gray-700">
          Nous tissons des ponts solidaires entre les soignants et les communautés pour offrir des soins bienveillants, durables
          et adaptés à chaque territoire.
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href="#mission" class="btn-primary">Découvrir notre mission</a>
          <a href="#actions" class="btn-secondary">Nos engagements de terrain</a>
        </div>
        <div class="mt-10 grid gap-6 sm:grid-cols-3">
          <div v-for="item in stats" :key="item.label" class="rounded-2xl border border-primary/10 bg-white/70 p-4 backdrop-blur">
            <p class="font-heading text-2xl text-primary">{{ item.value }}</p>
            <p class="text-sm font-medium text-gray-600">{{ item.label }}</p>
          </div>
        </div>
      </div>

      <div class="relative flex flex-1 justify-center lg:justify-end" data-animate="reveal">
        <div class="absolute -top-10 -right-10 hidden h-40 w-40 rounded-full bg-primary/20 blur-3xl lg:block"></div>
        <div class="relative w-full max-w-xl overflow-hidden rounded-[1.75rem] shadow-soft">
          <picture>
            <source
              srcset="/images/carousel/carousel-image-2.jpg 768w, /images/carousel/carousel-image-2.jpg 1280w"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <img
              src="/images/carousel/carousel-image-2.jpg"
              alt="Bénévoles Evail en mission humanitaire"
              class="h-full w-full object-cover"
            />
          </picture>
          <div class="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-4 shadow-lg backdrop-blur">
            <p class="text-sm font-semibold text-primary">Accompagnement sur-mesure</p>
            <p class="text-xs text-gray-600">Des missions pensées avec les acteurs locaux pour un impact durable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
