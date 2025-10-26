<script setup></script>

<template>
  <section id="don" class="relative flex w-full flex-col items-center justify-start gap-12 overflow-hidden py-24">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-sand/60 to-white"></div>
    <div class="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>
    <div class="pointer-events-none absolute right-0 bottom-10 -z-10 h-60 w-60 rounded-full bg-secondary/15 blur-3xl"></div>

    <div class="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center text-dusk">
      <span class="text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">Nous soutenir</span>
      <h2 class="font-display text-4xl font-semibold text-primary md:text-5xl">Chaque don fait la différence</h2>
      <p class="max-w-3xl text-base text-dusk/70 md:text-lg">
        Vos dons sont essentiels pour rendre possibles nos actions humanitaires et permettre aux équipes sur place de fournir
        des soins, du matériel et un accompagnement durable.
      </p>
    </div>

    <div class="mx-auto grid w-full max-w-5xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div class="flex flex-col items-center gap-6 rounded-[2.5rem] bg-white/75 p-10 text-center text-dusk shadow-subtle backdrop-blur-xl">
        <img class="w-40 max-w-full" src="/images/logos/colored_evail_logo.png" alt="Evail Logo" loading="lazy">
        <p class="text-xl font-semibold text-primary">Faire un don, c'est permettre les soins sans frontières.</p>
        <p class="max-w-2xl text-base text-dusk/70 md:text-lg">
          Vos dons sont déductibles à hauteur de 66% des impôts sur le revenu. Pour 100€ donnés, votre don vous revient en
          réalité à 34€.
        </p>
        <a
          class="group inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-glow"
          href="https://www.payasso.fr/association-evail-humanitaire/don"
          target="_blank"
          rel="noreferrer"
        >
          Faire un don maintenant
          <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
        <div class="flex flex-col gap-2 rounded-3xl bg-primary/5 p-6 text-sm text-primary/80">
          <p>✔️ Dons sécurisés via notre plateforme partenaire.</p>
          <p>✔️ Reçu fiscal envoyé automatiquement.</p>
          <p>✔️ Impact direct sur nos missions humanitaires.</p>
        </div>
      </div>

      <div class="flex flex-col items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary p-10 text-center text-white shadow-subtle">
        <p class="text-2xl font-semibold">« S'ouvrir un peu aux uns, aux autres permet de faire tomber nos barrières et ainsi de réduire le malheur et l'indifférence. »</p>
        <p class="text-sm uppercase tracking-[0.35em] text-white/70">Présidente d'Evail</p>
      </div>
    </div>
  </section>
</template>
