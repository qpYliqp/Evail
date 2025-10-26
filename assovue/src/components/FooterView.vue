<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-secondary text-white">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a href="#hero" class="flex items-center gap-3 text-lg font-semibold">
          <img src="/images/logos/red_evail_logo.png" alt="Retour à l’accueil Evail" class="h-12 w-12 rounded-full border border-white/20 object-contain" loading="lazy" />
          <span class="font-heading text-xl">Evail humanitaire</span>
        </a>
        <div class="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#mission" class="hover:text-primary/30">Mission</a>
          <a href="#values" class="hover:text-primary/30">Valeurs</a>
          <a href="#team" class="hover:text-primary/30">Équipe</a>
          <a href="#actions" class="hover:text-primary/30">Actions</a>
          <a href="#travels" class="hover:text-primary/30">Voyages</a>
          <a href="#support" class="hover:text-primary/30">Nous soutenir</a>
        </div>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-3 text-sm">
          <p class="font-semibold uppercase tracking-wide text-white/70">Contact</p>
          <a href="mailto:Contact.evailhumanitaire@gmail.com" class="flex items-center gap-3 hover:text-primary/30">
            <img class="h-6 w-6" src="/images/logos/mail-logo.png" alt="Icône e-mail" loading="lazy" />
            <span>Contact.evailhumanitaire@gmail.com</span>
          </a>
          <a href="https://www.instagram.com/evail_humanitaire" target="_blank" rel="noopener" class="flex items-center gap-3 hover:text-primary/30">
            <img class="h-6 w-6" src="/images/logos/insta-logo.png" alt="Icône Instagram" loading="lazy" />
            <span>@evail_humanitaire</span>
          </a>
        </div>
        <div class="space-y-3 text-sm text-white/80">
          <p class="font-semibold uppercase tracking-wide text-white/70">Adresse</p>
          <p>Siège social — Lille, France</p>
          <p>Interventions en France et à l’international</p>
        </div>
        <div class="space-y-3 text-sm text-white/80">
          <p class="font-semibold uppercase tracking-wide text-white/70">Suivez nos missions</p>
          <p>Inscrivez-vous pour recevoir des nouvelles positives et des opportunités de bénévolat.</p>
          <a href="mailto:Contact.evailhumanitaire@gmail.com?subject=Newsletter%20Evail" class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-white/25">
            Je m’inscris
          </a>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 text-xs text-white/60">
        © {{ currentYear }} Evail Humanitaire — Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
