<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="relative mt-24 bg-gradient-to-br from-secondary via-primary to-secondary text-white">
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)]"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
      <div class="flex flex-col items-center text-center">
        <p class="font-display text-3xl font-semibold">Restons en contact</p>
        <p class="mt-2 max-w-2xl text-sm text-white/80">
          Ensemble, faisons rayonner les valeurs d'entraide et de solidarité portées par l'association Evail.
        </p>
      </div>

      <div class="grid gap-6 text-sm md:grid-cols-2">
        <div class="flex items-center justify-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <img class="h-6 w-6" src="/images/logos/mail-logo.png" alt="Icône mail">
          </div>
          <a
            class="text-white transition-colors duration-300 hover:text-white"
            href="mailto:Contact.evailhumanitaire@gmail.com"
          >
            Contact.evailhumanitaire@gmail.com
          </a>
        </div>
        <div class="flex items-center justify-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <img class="h-6 w-6" src="/images/logos/insta-logo.png" alt="Icône Instagram">
          </div>
          <a
            class="text-white transition-colors duration-300 hover:text-white"
            href="https://www.instagram.com/evail_humanitaire"
            target="_blank"
            rel="noreferrer"
          >
            @evail_humanitaire
          </a>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row">
        <p>© {{ currentYear }} Evail Humanitaire. Tous droits réservés.</p>
        <a class="transition-colors duration-300 hover:text-white" href="#accueil">Retour en haut ↑</a>
      </div>
    </div>
  </footer>
</template>
