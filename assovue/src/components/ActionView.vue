<script lang="ts">

import { defineComponent } from "vue";
import {PDFViewer} from "@/model/PDFViewer";

export default defineComponent({
  setup() {

    const pdf : PDFViewer = new PDFViewer("/pdf/action/RAPPORT-AMP-AEH.pdf");

    return {pdf}

  },
})


</script>

<template>
<div class="title-container background_primary-color text-white-color" style="padding: 2vw;">
  <p class="title_size">Nos actions</p>
</div>

  <div class="action-container">
    <div class="action-image">
      <img src="/images/actions/action-image-1.jpg">
    </div>
    <div class="action-text-container">
      <div class="action-title-container">
        <p class="title_size text-primary-color">Soigner, un devoir, une priorité.</p>
      </div>
      <div class="action-text">
        <p class="text_paragraph text-black-color">Notre souhait profond est de soigner, dans le champs de nos compétences chaque personne qui en a le besoin.</p>
        <p class="text_paragraph text-black-color">Animé par ce devoir, nous sommes aujourd’hui une équipe composée d’infirmiers, médecins, d’aides-soignants et bien d'autres professionnels de la santé publique.</p>
        <p class="text_paragraph text-black-color">Nous voyageons depuis peu et rencontrons les populations sur le terrain pour comprendre leurs enjeux sanitaires et les préoccupations des habitants. Nous partons pendant deux semaines, dans chaque ville, même les plus reculées où nous faisons de la prévention sur des pathologies propres aux pays confrontés aux développements et soignons des maladies qui ne nécessitent pas d’interventions chirurgicales.</p>
        <p class="text_paragraph text-black-color">A terme, nous souhaiterions en collaboration avec les localités, permettre aux pays d’avoir des clés nécessaires pour être auto-suffisants en matière de préventions et de dépistage . Donc d’encourager les initiatives locales et pérenniser l’éducation thérapeutique reçue.</p>
        <p class="link" @click="pdf.openPDF" >En savoir plus</p>

        <div class="action-counter-container" >
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
</template>

<style scoped>

.action-container
{
  display: flex;
  flex-direction: row;
}

.action-text-container
{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
}

.action-title-container
{
  padding: 3vh;
}

.action-text
{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  padding: 5vh;
}

.action-image
{
  display: flex;
  flex: 1;
}

.action-image img
{
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  z-index: 1;
}

.action-counter-container
{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}


.action-counter-content {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20vw;
  padding-top: 5vh;
}


.action-counter-content p {
  font-size: 1vw;
  color: black;
}

.action-counter {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.action-digit {
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  color: red;
  border: 0.2vw solid red;
  margin: 0 0.2vw;
  font-weight: bold;
}

@media (max-width: 500px) {

  .action-container
  {
    display: flex;
    flex-direction: column;
  }

  .action-counter-content
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2vh;
  }

  .action-counter-content p
  {
    font-size: 2vw;
  }

  .action-digit
  {
    width: 5vw;
    font-size: 5vw;
  }

  .action-counter-container
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
;
}

</style>