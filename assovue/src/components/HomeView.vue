<script lang="ts">
</script>

<template>
  <section
    class="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[url('/images/backgrounds/home_background.jpg')] bg-cover bg-center bg-no-repeat"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-midnight/90 via-black/75 to-primary/70"></div>
    <div
      class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 text-center md:flex-row md:items-end md:justify-between md:text-left"
    >
      <img
        src="/images/logos/red_evail_logo.png"
        alt="Logo Evail"
        class="w-full max-w-[20rem] rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur"
        loading="lazy"
      />
      <div class="flex max-w-2xl flex-col items-center gap-6 md:items-start">
        <p class="text-sm uppercase tracking-[0.35em] text-white/70">
          Association humanitaire
        </p>
        <h1 class="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Evail | Humanitaire
        </h1>
        <p class="max-w-xl text-lg font-light text-white/80 md:text-xl">
          Trois femmes unies par une ambition commune : offrir des soins et du
          soutien là où le besoin est le plus fort. Découvrez une aventure
          humaine portée par la solidarité et l&rsquo;engagement.
        </p>
        <div class="flex flex-col gap-4 sm:flex-row">
          <a
            href="#presentation"
            class="group inline-flex items-center justify-center rounded-full bg-white/15 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/25 hover:shadow-glow"
          >
            En savoir plus
            <span
              aria-hidden="true"
              class="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/90 text-xs font-bold transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="#donate"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition-transform duration-300 hover:-translate-y-1 hover:bg-secondary"
          >
            Nous soutenir
          </a>
        </div>
      </div>
    </div>
    <div class="pointer-events-none absolute inset-0 bg-glass-pattern opacity-60"></div>
  </section>
</template>
