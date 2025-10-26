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
  <section id="actions" class="relative w-full py-24">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6">
      <div class="flex flex-col items-center text-center">
        <span class="mb-3 text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">Nos actions</span>
        <h2 class="font-display text-4xl font-semibold text-primary md:text-5xl">Soigner, un devoir, une priorité</h2>
        <p class="mt-4 max-w-2xl text-base text-dusk/70 md:text-lg">
          Aux côtés des communautés locales, nous construisons des dispositifs de soin durables, fondés sur l'écoute, la
          prévention et la transmission.
        </p>
      </div>

      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="relative overflow-hidden rounded-[2rem]">
          <img
            src="/images/actions/action-image-1.jpg"
            alt="Mission de soin menée par Evail"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p class="text-sm uppercase tracking-[0.35em] text-white/70">Sur le terrain</p>
            <p class="mt-3 text-2xl font-semibold">Présence, écoute et accompagnement.</p>
          </div>
        </div>

        <div class="flex flex-col gap-6 rounded-[2rem] bg-white/70 p-8 shadow-subtle backdrop-blur-xl md:p-10">
          <p>
            Notre souhait profond est de soigner, dans le champ de nos compétences, chaque personne qui en a le besoin.
          </p>
          <p>
            Animés par ce devoir, nous sommes aujourd’hui une équipe composée d’infirmiers, médecins, d’aides-soignants et bien
            d'autres professionnels de la santé publique.
          </p>
          <p>
            Nous voyageons depuis peu et rencontrons les populations sur le terrain pour comprendre leurs enjeux sanitaires et
            les préoccupations des habitants. Nous partons pendant deux semaines, dans chaque ville, même les plus reculées où
            nous faisons de la prévention sur des pathologies propres aux pays confrontés aux développements et soignons des
            maladies qui ne nécessitent pas d’interventions chirurgicales.
          </p>
          <p>
            À terme, nous souhaiterions, en collaboration avec les localités, permettre aux pays d’avoir des clés nécessaires
            pour être auto-suffisants en matière de préventions et de dépistage. Nous encourageons les initiatives locales et
            pérennisons l’éducation thérapeutique reçue.
          </p>

          <button
            type="button"
            class="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-glow md:w-auto"
            @click="pdf.openPDF"
          >
            En savoir plus
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <div
              class="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-primary/10 via-white to-white/70 p-6 text-center shadow-subtle"
            >
              <div class="flex items-center justify-center">
                <span class="text-4xl font-bold text-primary">1</span>
                <span class="text-4xl font-bold text-primary">3</span>
                <span class="text-4xl font-bold text-primary">3</span>
                <span class="text-4xl font-bold text-primary">6</span>
              </div>
              <p class="text-xs font-semibold uppercase tracking-widest text-primary/80">Consultations</p>
            </div>

            <div
              class="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-primary/10 via-white to-white/70 p-6 text-center shadow-subtle"
            >
              <div class="flex items-center justify-center">
                <span class="text-4xl font-bold text-primary">0</span>
                <span class="text-4xl font-bold text-primary">2</span>
                <span class="text-4xl font-bold text-primary">5</span>
                <span class="text-4xl font-bold text-primary">0</span>
              </div>
              <p class="text-xs font-semibold uppercase tracking-widest text-primary/80">Médicaments récoltés</p>
            </div>

            <div
              class="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-primary/10 via-white to-white/70 p-6 text-center shadow-subtle"
            >
              <div class="flex items-center justify-center">
                <span class="text-4xl font-bold text-primary">0</span>
                <span class="text-4xl font-bold text-primary">0</span>
                <span class="text-4xl font-bold text-primary">3</span>
                <span class="text-4xl font-bold text-primary">5</span>
              </div>
              <p class="text-xs font-semibold uppercase tracking-widest text-primary/80">Soignants mobilisés</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
