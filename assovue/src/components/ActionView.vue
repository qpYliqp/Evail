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
  <div class="full-width-panel">
    <div class="title-container background-primary text-white">
      <p>Nos actions</p>
    </div>
    <div class="flex flex-row align-start justify-start" >
      <div class="disappear-on-ipad flex-1" >
        <img style="object-fit: cover;" src="/images/actions/action-image-1.jpg" alt="action-image"/>
      </div>
      <div class="flex flex-col align-center justify-center flex-2" >
        <div class="title-container text-primary">
          <p>Soigner, un devoir, une priorité.</p>
        </div>
        <div class="text-paragraph paragraph-container flex flex-col align-center justify-center">
          <p class="text-paragraph-padding">
            Notre souhait profond est de soigner, dans le champs de nos compétences
            chaque personne qui en a le besoin.
          </p>
          <p class="text-paragraph-padding">
            Animé par ce devoir, nous sommes aujourd’hui une équipe composée
            d’infirmiers, médecins, d’aides-soignants et bien d'autres
            professionnels de la santé publique.
          </p>
          <p class="text-paragraph-padding">
            Nous voyageons depuis peu et rencontrons les populations sur le terrain
            pour comprendre leurs enjeux sanitaires et les préoccupations des
            habitants. Nous partons pendant deux semaines, dans chaque ville, même
            les plus reculées où nous faisons de la prévention sur des pathologies
            propres aux pays confrontés aux développements et soignons des maladies
            qui ne nécessitent pas d’interventions chirurgicales.
          </p>
          <p class="text-paragraph-padding">
            A terme, nous souhaiterions en collaboration avec les localités,
            permettre aux pays d’avoir des clés nécessaires pour être
            auto-suffisants en matière de préventions et de dépistage . Donc
            d’encourager les initiatives locales et pérenniser l’éducation
            thérapeutique reçue.
          </p>
          <p class="link" @click="pdf.openPDF">En savoir plus</p>
          <div class="action-counter-container">
            <div class="action-counter-content">
              <div class="action-counter">
                <div class="action-digit">1</div>
                <div class="action-digit">3</div>
                <div class="action-digit">3</div>
                <div class="action-digit">6</div>
              </div>
              <p>CONSULTATIONS</p>
            </div>

            <div class="action-counter-content">
              <div class="action-counter">
                <div class="action-digit">0</div>
                <div class="action-digit">2</div>
                <div class="action-digit">5</div>
                <div class="action-digit">0</div>
              </div>
              <p>MÉDICAMENTS RÉCOLTÉS</p>
            </div>

            <div class="action-counter-content">
              <div class="action-counter">
                <div class="action-digit">0</div>
                <div class="action-digit">0</div>
                <div class="action-digit">3</div>
                <div class="action-digit">5</div>
              </div>
              <p>SOIGNANTS MOBILISÉS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

img
{
  max-width: 100%;
  object-fit: contain;

}

.action-counter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.action-counter-content {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 15rem;
  padding-top: 3rem;
  font-size: 1rem;
}

.action-counter {
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
}

.action-digit {
  width: 2rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  margin: 0 0.3rem;
  font-weight: bold;
}

@media (max-width: 800px) {
  .action-counter-container {
    flex-direction: column;
  }
}

</style>