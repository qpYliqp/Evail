<script setup lang="ts">
</script>

<template>
  <section
    id="presentation"
    class="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-white/5 to-transparent py-20"
  >
    <div class="pointer-events-none absolute inset-0 bg-glass-pattern opacity-40"></div>
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
      <div class="flex flex-col items-center text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-primary/60">Notre histoire</p>
        <h2 class="mt-3 text-3xl font-bold text-white md:text-5xl">Trois femmes, une même ambition</h2>
        <p class="mt-5 max-w-2xl text-lg text-white/75">
          Un projet porté par la solidarité et l&rsquo;expertise médicale, construit
          pour répondre aux besoins des populations les plus fragiles.
        </p>
      </div>
      <div
        class="grid grid-cols-1 gap-10 rounded-3xl bg-white/5 p-10 shadow-2xl backdrop-blur-xl md:grid-cols-[1.2fr_1fr]"
      >
        <div class="flex flex-col justify-between gap-8">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <p class="text-lg font-semibold text-white">Une aventure humaine</p>
            <p class="mt-3 text-base text-white/80">
              EVAIL humanitaire est née d’une amitié, d’un rêve commun : celui
              d’aider les autres au-delà des frontières. Pour concrétiser ce
              projet Annie, Minette et Yaye l’ont porté durant deux ans.
            </p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <p class="text-lg font-semibold text-white">Une équipe engagée</p>
            <p class="mt-3 text-base text-white/80">
              Annie, Minette et Yaye ont porté ce projet et se sont données pour
              premier objectif de voyager au Sénégal. En France, une équipe de
              soignants se forme rapidement, prête à soutenir la mission.
            </p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <p class="text-lg font-semibold text-white">Des actions concrètes</p>
            <p class="mt-3 text-base text-white/80">
              Le démarchage en pharmacies partenaires, la recherche de
              bénévoles, la collecte de fournitures et les rencontres
              promotionnelles se multiplient pour soutenir l'association.
            </p>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <p class="text-lg font-semibold text-white">Une ambition sans limites</p>
            <p class="mt-3 text-base text-white/80">
              Le premier voyage réussi, l’équipe compte désormais plus de trente
              soignants et multiplie les initiatives à travers la France et le
              monde.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-6">
          <div class="w-full rounded-[2.5rem] border border-white/10 bg-black/30 p-8 text-center shadow-lg backdrop-blur-xl">
            <p class="text-xl font-semibold text-white">Une vision partagée</p>
            <p class="mt-4 text-base text-white/75">
              Ensemble, elles incarnent une association moderne qui s&rsquo;appuie
              sur des compétences pluridisciplinaires pour imaginer un futur
              solidaire et durable.
            </p>
          </div>
          <img
            src="/images/staff/staff.png"
            alt="Le trio fondateur d'Evail"
            class="w-full max-w-md rounded-[2.5rem] border border-white/10 object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
