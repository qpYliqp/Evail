<script setup lang="ts">
</script>

<template>
  <section id="presentation" class="relative w-full py-24">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
    <div class="pointer-events-none absolute left-8 top-12 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
      <div class="flex flex-col items-center text-center">
        <span class="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">Notre raison d'être</span>
        <h2 class="font-display text-4xl font-semibold text-primary md:text-5xl">Trois femmes, une même ambition</h2>
        <p class="mt-6 max-w-3xl text-base text-dusk/80 md:text-lg">
          EVAIL Humanitaire est née d'une amitié et d'un rêve commun : celui de soigner au-delà des frontières et de tendre la
          main à celles et ceux qui en ont besoin.
        </p>
      </div>

      <div
        class="grid gap-8 rounded-[2.5rem] bg-white/60 p-8 shadow-subtle backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12"
      >
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary text-white">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_60%)]"></div>
          <div class="relative flex h-full flex-col justify-between p-8">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-white/70">Notre histoire</p>
              <h3 class="mt-4 font-display text-3xl font-semibold leading-tight">Solidarité, soin et humanité</h3>
            </div>
            <img
              src="/images/staff/staff.png"
              alt="Membres fondatrices d'Evail"
              class="mt-10 w-full max-w-xs self-end opacity-95"
              loading="lazy"
            />
          </div>
        </div>

        <div class="flex flex-col gap-6 text-base leading-relaxed text-dusk/80 md:text-lg">
          <p>
            EVAIL humanitaire est née d’une amitié, d’un rêve commun : celui d’aider les autres au-delà des frontières. Pour
            concrétiser ce projet Annie, Minette et Yaye l’ont porté durant deux ans.
          </p>
          <p>
            Annie, Minette et Yaye ont porté ce projet, elles l'ont soigneusement peaufiné. Elles se sont données comme premier
            objectif de voyager au Sénégal. En France, elles parlent de ce projet à leurs collègues. Sitôt, une équipe de
            soignants est montée.
          </p>
          <p>
            Les actions se multiplient telles que le démarchage en pharmacies partenaires ou pour des médicaments, en magasin
            pour des fournitures scolaires ou bien en recherche de bénévoles ou encore en organisation de réunions et de
            rencontres promotionnelles pour l'association.
          </p>
          <p>
            Ce premier voyage relevé avec brio, ce trio ne souhaite pas s’arrêter en si bon chemin et compte maintenant une
            équipe de plus de 30 soignants ainsi que de nouvelles actions à travers la France et le monde entier.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
