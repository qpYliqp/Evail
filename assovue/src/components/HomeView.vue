<script lang="ts">
</script>

<template>
  <section
    id="accueil"
    class="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-slate-900 text-white"
  >
    <img
      src="/images/backgrounds/home_background.jpg"
      alt="Equipe Evail en action"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-black/75 via-primary/60 to-secondary/60"></div>
    <div class="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
    <div class="pointer-events-none absolute bottom-10 right-16 -z-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl"></div>

    <div
      class="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 py-24 text-center md:flex-row md:text-left"
    >
      <img
        src="/images/logos/red_evail_logo.png"
        alt="Logo de l'association Evail"
        class="animate-float w-full max-w-sm drop-shadow-2xl"
        loading="lazy"
      />
      <div
        class="relative flex max-w-2xl flex-col items-center gap-6 rounded-3xl bg-white/10 p-8 text-white backdrop-blur-lg transition-all duration-500 hover:bg-white/15 md:items-start"
      >
        <span class="text-sm uppercase tracking-[0.4em] text-white/60">Association humanitaire</span>
        <h1 class="font-display text-4xl font-semibold leading-tight md:text-5xl">
          Evail | Humanitaire
        </h1>
        <p class="text-base text-white/85 md:text-lg">
          Ensemble, nous construisons des ponts de solidarité pour offrir des soins accessibles et un accompagnement digne aux
          communautés qui en ont le plus besoin.
        </p>
        <div class="flex flex-col items-center gap-4 md:flex-row">
          <a
            href="#presentation"
            class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Découvrir l'association
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#don"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Soutenir nos actions
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
