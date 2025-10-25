<script lang="ts">
import { defineComponent } from "vue";
import { PDFViewer } from "@/model/PDFViewer";

export default defineComponent({
  setup() {
    const pdf: PDFViewer = new PDFViewer("/pdf/action/RAPPORT-AMP-AEH.pdf");
    return { pdf };
  },
});
</script>

<template>
  <section id="actions" class="relative w-full overflow-hidden py-20">
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/30 via-black/40 to-midnight/80"></div>
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
      <div class="flex flex-col items-center text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-primary/70">Nos actions</p>
        <h2 class="mt-3 text-3xl font-bold md:text-5xl">Soigner, un devoir, une priorité</h2>
        <p class="mt-4 max-w-3xl text-base text-white/70">
          Chaque mission est construite avec les communautés locales pour
          apporter un soutien médical durable et respectueux des besoins
          spécifiques.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1.4fr]">
        <div class="hidden overflow-hidden rounded-[2.5rem] border border-white/10 lg:block">
          <img
            src="/images/actions/action-image-1.jpg"
            alt="Bénévoles d'Evail sur le terrain"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          class="flex flex-col gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
        >
          <p class="text-base text-white/80">
            Notre souhait profond est de soigner, dans le champ de nos
            compétences, chaque personne qui en a le besoin.
          </p>
          <p class="text-base text-white/80">
            Animée par ce devoir, notre équipe est composée d’infirmiers,
            médecins, aides-soignants et de nombreux autres professionnels de la
            santé publique.
          </p>
          <p class="text-base text-white/80">
            Nous voyageons depuis peu pour rencontrer les populations sur le
            terrain, comprendre leurs enjeux sanitaires et répondre aux
            préoccupations locales avec humilité et expertise.
          </p>
          <p class="text-base text-white/80">
            À terme, nous souhaitons donner à chaque communauté les clés pour
            être autonome en prévention, dépistage et éducation thérapeutique.
          </p>
          <button
            type="button"
            class="group inline-flex w-fit items-center gap-3 rounded-full border border-primary/50 bg-primary/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
            @click="pdf.openPDF"
          >
            <span>Consulter le rapport</span>
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-lg font-bold transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-3">
        <div
          class="group flex flex-col items-center gap-3 rounded-[1.8rem] border border-white/10 bg-black/40 p-8 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/30"
        >
          <div class="text-4xl font-extrabold text-white">1 336</div>
          <p class="text-xs uppercase tracking-[0.3em] text-white/60">Consultations</p>
          <p class="text-sm text-white/60">
            Des consultations préventives et curatives réalisées avec les
            habitants sur place.
          </p>
        </div>
        <div
          class="group flex flex-col items-center gap-3 rounded-[1.8rem] border border-white/10 bg-black/40 p-8 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/30"
        >
          <div class="text-4xl font-extrabold text-white">2 050</div>
          <p class="text-xs uppercase tracking-[0.3em] text-white/60">Médicaments récoltés</p>
          <p class="text-sm text-white/60">
            Des traitements et matériels collectés grâce à la générosité de nos
            partenaires.
          </p>
        </div>
        <div
          class="group flex flex-col items-center gap-3 rounded-[1.8rem] border border-white/10 bg-black/40 p-8 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/30"
        >
          <div class="text-4xl font-extrabold text-white">35</div>
          <p class="text-xs uppercase tracking-[0.3em] text-white/60">Soignants mobilisés</p>
          <p class="text-sm text-white/60">
            Une équipe pluridisciplinaire au cœur de chaque mission.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
