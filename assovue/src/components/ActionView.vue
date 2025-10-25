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
  <section class="w-full">
    <div class="flex w-full flex-col items-center justify-center bg-primary p-6 text-center text-4xl font-semibold text-white">
      <p>Nos actions</p>
    </div>
    <div class="flex w-full flex-col items-start justify-start gap-8 px-4 py-10 lg:flex-row">
      <div class="hidden h-full w-full max-w-xl overflow-hidden rounded-lg lg:block lg:flex-1">
        <img src="/images/actions/action-image-1.jpg" alt="action-image" class="h-full w-full object-cover" />
      </div>
      <div class="flex w-full flex-col items-center justify-center gap-6 lg:flex-[2]">
        <div class="flex w-full flex-col items-center justify-center p-4 text-center text-3xl font-semibold text-primary">
          <p>Soigner, un devoir, une priorité.</p>
        </div>
        <div class="flex w-full flex-col items-center justify-center gap-6 px-4 text-center text-base md:text-lg">
          <p class="pb-4">
            Notre souhait profond est de soigner, dans le champs de nos compétences chaque personne qui en a le besoin.
          </p>
          <p class="pb-4">
            Animé par ce devoir, nous sommes aujourd’hui une équipe composée d’infirmiers, médecins, d’aides-soignants et bien
            d'autres professionnels de la santé publique.
          </p>
          <p class="pb-4">
            Nous voyageons depuis peu et rencontrons les populations sur le terrain pour comprendre leurs enjeux sanitaires et
            les préoccupations des habitants. Nous partons pendant deux semaines, dans chaque ville, même les plus reculées où
            nous faisons de la prévention sur des pathologies propres aux pays confrontés aux développements et soignons des
            maladies qui ne nécessitent pas d’interventions chirurgicales.
          </p>
          <p class="pb-4">
            A terme, nous souhaiterions en collaboration avec les localités, permettre aux pays d’avoir des clés nécessaires pour
            être auto-suffisants en matière de préventions et de dépistage . Donc d’encourager les initiatives locales et
            pérenniser l’éducation thérapeutique reçue.
          </p>
          <p class="cursor-pointer text-lg text-blue-600 underline" @click="pdf.openPDF">En savoir plus</p>
          <div class="flex w-full flex-col items-center justify-center gap-8 pt-8 lg:flex-row">
            <div class="flex w-full max-w-xs flex-col items-center justify-center text-center">
              <div class="mb-3 flex justify-center">
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">1</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">3</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">3</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">6</div>
              </div>
              <p class="text-sm font-semibold tracking-wide">CONSULTATIONS</p>
            </div>

            <div class="flex w-full max-w-xs flex-col items-center justify-center text-center">
              <div class="mb-3 flex justify-center">
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">0</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">2</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">5</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">0</div>
              </div>
              <p class="text-sm font-semibold tracking-wide">MÉDICAMENTS RÉCOLTÉS</p>
            </div>

            <div class="flex w-full max-w-xs flex-col items-center justify-center text-center">
              <div class="mb-3 flex justify-center">
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">0</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">0</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">3</div>
                <div class="mx-1 flex h-10 w-8 items-center justify-center border-2 border-primary text-2xl font-bold text-primary">5</div>
              </div>
              <p class="text-sm font-semibold tracking-wide">SOIGNANTS MOBILISÉS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
