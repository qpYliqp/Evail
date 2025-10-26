<script setup></script>

<template>
  <footer class="bg-secondary/95 text-white">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between md:px-6">
      <div class="max-w-sm space-y-4">
        <div class="flex items-center gap-3">
          <img
            src="/images/logos/red_evail_logo.png"
            alt="Logo Evail"
            class="h-12 w-auto"
          />
          <span class="font-heading text-xl font-semibold">Evail Humanitaire</span>
        </div>
        <p class="text-sm text-white/80">
          Ensemble, nous diffusons de la bonne humeur et des soins de qualité auprès des personnes les plus vulnérables, en France et à l'international.
        </p>
      </div>
      <div class="grid flex-1 gap-8 sm:grid-cols-2">
        <div class="space-y-3">
          <h3 class="text-sm font-semibold uppercase tracking-[0.2em]">Navigation</h3>
          <nav class="flex flex-col gap-2 text-sm text-white/80">
            <a
              href="#mission"
              class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notre mission
            </a>
            <a
              href="#values"
              class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Valeurs
            </a>
            <a
              href="#team"
              class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Équipe
            </a>
            <a
              href="#actions"
              class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Actions
            </a>
            <a
              href="#support"
              class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Nous soutenir
            </a>
          </nav>
        </div>
        <div class="space-y-3">
          <h3 class="text-sm font-semibold uppercase tracking-[0.2em]">Contact</h3>
          <ul class="space-y-3 text-sm text-white/80">
            <li class="flex items-center gap-3">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a1.5 1.5 0 0 1-1.5 1.5h-16.5a1.5 1.5 0 0 1-1.5-1.5V6.75m19.5 0a1.5 1.5 0 0 0-1.5-1.5h-16.5a1.5 1.5 0 0 0-1.5 1.5m19.5 0-9.75 6.75L2.25 6.75" />
                </svg>
              </span>
              <a
                href="mailto:contact.evailhumanitaire@gmail.com"
                class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                contact.evailhumanitaire@gmail.com
              </a>
            </li>
            <li class="flex items-center gap-3">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5">
                  <path d="M12 2.04c-5.52 0-9.96 4.44-9.96 9.96 0 4.41 3.6 8.07 7.56 8.88v-6.29h-2.28V12h2.28V9.91c0-2.24 1.33-3.47 3.36-3.47.97 0 1.99.17 1.99.17v2.18h-1.12c-1.1 0-1.45.68-1.45 1.38V12h2.47l-.39 2.59h-2.08v6.29c3.96-.81 7.56-4.47 7.56-8.88 0-5.52-4.44-9.96-9.96-9.96Z" />
                </svg>
              </span>
              <a
                href="https://www.facebook.com/evailhumanitaire"
                target="_blank"
                rel="noreferrer"
                class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Facebook
              </a>
            </li>
            <li class="flex items-center gap-3">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5">
                  <path d="M12 2.2c3.15 0 3.52.01 4.76.07 1.18.05 1.82.24 2.24.4.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.35 1.06.4 2.24.06 1.24.07 1.61.07 4.76s-.01 3.52-.07 4.76c-.05 1.18-.24 1.82-.4 2.24-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.24.4-1.24.06-1.61.07-4.76.07s-3.52-.01-4.76-.07c-1.18-.05-1.82-.24-2.24-.4a3.37 3.37 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.35-1.06-.4-2.24C2.21 15.52 2.2 15.15 2.2 12s.01-3.52.07-4.76c.05-1.18.24-1.82.4-2.24.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.35 2.24-.4C8.48 2.21 8.85 2.2 12 2.2Zm0 1.8c-3.09 0-3.45.01-4.66.07-1.02.05-1.57.22-1.94.37-.49.19-.83.41-1.2.78-.37.37-.59.71-.78 1.2-.15.37-.32.92-.37 1.94-.06 1.21-.07 1.57-.07 4.66s.01 3.45.07 4.66c.05 1.02.22 1.57.37 1.94.19.49.41.83.78 1.2.37.37.71.59 1.2.78.37.15.92.32 1.94.37 1.21.06 1.57.07 4.66.07s3.45-.01 4.66-.07c1.02-.05 1.57-.22 1.94-.37.49-.19.83-.41 1.2-.78.37-.37.59-.71.78-1.2.15-.37.32-.92.37-1.94.06-1.21.07-1.57.07-4.66s-.01-3.45-.07-4.66c-.05-1.02-.22-1.57-.37-1.94-.19-.49-.41-.83-.78-1.2-.37-.37-.71-.59-1.2-.78-.37-.15-.92-.32-1.94-.37-1.21-.06-1.57-.07-4.66-.07Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5-2.85a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
                </svg>
              </span>
              <a
                href="https://www.instagram.com/evail_humanitaire"
                target="_blank"
                rel="noreferrer"
                class="transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 py-4">
      <p class="text-center text-xs text-white/60">© {{ new Date().getFullYear() }} Evail Humanitaire — Tous droits réservés.</p>
    </div>
  </footer>
</template>
