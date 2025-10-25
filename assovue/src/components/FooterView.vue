<script setup></script>

<template>
  <footer class="relative mt-20 w-full overflow-hidden bg-gradient-to-b from-black/60 via-black/80 to-midnight py-12">
    <div class="pointer-events-none absolute inset-0 bg-glass-pattern opacity-40"></div>
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6">
      <div class="flex flex-col items-center gap-3 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-white/50">Contact</p>
        <h3 class="text-2xl font-semibold">Restons en lien</h3>
        <p class="max-w-xl text-sm text-white/60">
          Une question, une envie de collaborer ou de rejoindre l&rsquo;aventure ?
          Écrivez-nous, nous serons ravies d&rsquo;échanger.
        </p>
      </div>
      <div class="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        <a
          class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/20"
          href="mailto:Contact.evailhumanitaire@gmail.com"
        >
          <img class="h-10 w-10" src="/images/logos/mail-logo.png" alt="Icône email" />
          <div class="flex flex-col">
            <span class="text-xs uppercase tracking-[0.3em] text-white/60">Nous écrire</span>
            <span class="text-sm font-semibold text-white">Contact.evailhumanitaire@gmail.com</span>
          </div>
        </a>
        <a
          class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/20"
          href="https://www.instagram.com/evail_humanitaire"
          target="_blank"
          rel="noopener"
        >
          <img class="h-10 w-10" src="/images/logos/insta-logo.png" alt="Icône Instagram" />
          <div class="flex flex-col">
            <span class="text-xs uppercase tracking-[0.3em] text-white/60">Nous suivre</span>
            <span class="text-sm font-semibold text-white">@evail_humanitaire</span>
          </div>
        </a>
      </div>
      <p class="text-xs uppercase tracking-[0.35em] text-white/40">
        © {{ new Date().getFullYear() }} Evail Humanitaire — Tous droits réservés
      </p>
    </div>
  </footer>
</template>
