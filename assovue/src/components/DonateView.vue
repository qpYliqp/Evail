<script setup></script>

<template>
  <section
    id="donate"
    class="relative flex flex-col items-center justify-start gap-10 overflow-hidden px-6 py-20 text-center"
  >
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/30 via-white/10 to-secondary/30"></div>
    <div class="relative z-10 flex w-full flex-col items-center gap-6">
      <p class="text-sm uppercase tracking-[0.35em] text-primary/80">Nous soutenir</p>
      <h2 class="text-3xl font-bold md:text-5xl">Faire un don, c&rsquo;est soigner sans frontières</h2>
      <p class="max-w-3xl text-base text-white/75">
        Vos dons sont essentiels pour rendre possibles nos actions humanitaires
        et assurer la continuité des soins auprès des populations accompagnées.
      </p>
      <img
        class="my-6 w-72 max-w-full rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur"
        src="/images/logos/colored_evail_logo.png"
        alt="Logo coloré de l'association Evail"
        loading="lazy"
      />
      <a
        class="group inline-flex w-full max-w-2xl flex-col items-center justify-center gap-3 rounded-[2.5rem] border border-white/15 bg-white/10 px-10 py-10 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/30 hover:shadow-glow"
        href="https://www.payasso.fr/association-evail-humanitaire/don"
        target="_blank"
        rel="noopener"
      >
        <span class="text-xs uppercase tracking-[0.4em] text-white/70">Agir maintenant</span>
        <span class="text-3xl font-extrabold">Faire un don</span>
        <span class="text-sm text-white/80">Vos dons sont déductibles à hauteur de 66% des impôts sur le revenu.</span>
        <span class="text-sm text-white/60">Pour 100€ donnés, votre soutien revient réellement à 34€.</span>
        <span
          class="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-transform duration-300 group-hover:translate-y-1"
        >
          Soutenir Evail
        </span>
      </a>
      <blockquote class="max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-8 text-lg italic text-white/80 shadow-xl backdrop-blur">
        « S&rsquo;ouvrir aux autres permet de faire tomber nos barrières et de
        réduire le malheur comme l&rsquo;indifférence. »
        <footer class="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
          Présidente d&rsquo;Evail
        </footer>
      </blockquote>
    </div>
  </section>
</template>
