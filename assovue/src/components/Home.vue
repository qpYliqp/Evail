<script lang="ts">

import {defineComponent, ref} from 'vue';
import '../assets/css/firstpage.css';


export default defineComponent({
  setup() {

  }
})

</script>

<template>
  <div class="content">
    <div class="screen_display firstpage">
      <div class="firstpage_filter_black">
        <div class="firstpage_logo_container">
          <img src="../assets/logo/logo1.png" alt="Logo" class="logo">
          <p class="firstpage_title_text">Evail | Humanitaire</p>
        </div>
      </div>

    </div>
    <div class="screen_display secondepage">

        <div class="header">
          <p class="subtitle_text">Trois Femmes</p>
          <p class="subtitle_text">Une même ambition</p>
        </div>

      <div style="display: flex; flex-direction: row; width: 100%; padding: 50px">

        <div class="secondepage_information">
          <p class="secondepage_paragraph">EVAIL humanitaire est née d’une amitié, d’un rêve commun : celui d’aider les autres aux delà des frontières.</p>
          <p class="secondepage_paragraph">Pour concrétiser ce projet Annie, Minette et Yaye l’ont porté durant deux ans.  Elles se sont données comme premier objectif de voyager au Sénégal. En France, elles parlent de ce projet à leurs collègues.
            Sitôt, une équipe de soignants est montée.</p>
          <p class="secondepage_paragraph">Les actions se multiplies telles que le démarchage en pharmacies partenaires ou pour des médicaments,
            en magasin pour des fournitures scolaire ou bien en recherche de bénévoles ou encore en organisation de réunion et de rencontres promotionnelles pour l'association.</p>
          <p class="secondepage_paragraph">Ce premier voyage relevé avec brio, ce trio ne souhaite pas s’arrêter en si bon chemin et compte maintenant une équipe de plus de 30 soignants ainsi que de nouvelles actions à travers la France et le monde entier. </p>
        </div>
        <div class="secondepage_image">
<!--          <img src="../assets/images/troisfemmes.jpg" style="width: 90%; height: 90%">-->
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

.content
{
  width : 100%;
  height : 100%;
  display: flex;
  flex-direction: column;
}

.screen_display
{
  color : #fff;
  display : flex;
  justify-content : center;
  align-items : center;
}


.subtitle_text
{
  font-size : 3vw;
}

.secondepage {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  color: var(--primary-color);
}


.header {
  color: #e45655;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: static;

}

.secondepage_information {
  background-color: #e45655; /* Couleur de fond pour la section texte */
  color: white; /* Couleur du texte */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex: 1;
  padding: 10px;
}

.secondepage_paragraph
{
  font-size : 1.3vw;
  margin-left: 5%;
  margin-bottom: 5%;
}

.secondepage_image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}




/* Responsiveness */

/* Styles pour les écrans de tablettes */
@media (max-width: 1024px) {
  .screen_display {

  }

}

/* Styles pour les écrans de téléphones */
@media (max-width: 768px) {

  .screen_display {
    height: 50%
  }

  .content {

  }
}


</style>