<script setup>

</script>

<template>
 <div class="title-container background-white-color">
    <p class="title_size text-primary-color">Trois Femmes</p>
   <p class="title_size text-primary-color">Une même ambition</p>
 </div>
  <div class="presentation-content background_primary-color">

    <div class="presentation-information-container ">
      <div class="presentation-title-container background-secondary-color disappear_on_mobile">
        <p class="subtitle_size text-white-color">Notre Histoire</p>
      </div>
      <div class="presentation-text-container">
        <p class="text_paragraph text-white-color">EVAIL humanitaire est née d’une amitié, d’un rêve commun : celui d’aider les autres aux delà des frontières. Pour concrétiser ce projet Annie, Minette et Yaye l’ont porté durant deux ans.</p>
        <p class="text_paragraph text-white-color">Annie, Minette et Yaye ont porté ce projet, elles l'ont soigneusement peaufiné. Elles se sont données comme premier objectif de voyager au Sénégal. En France, elles parlent de ce projet à leurs collègues. Sitôt, une équipe de soignants est montée.</p>
        <p class="text_paragraph text-white-color">Les actions se multiplient telles que le démarchage en pharmacies partenaires ou pour des médicaments, en magasin pour des fournitures scolaires ou bien en recherche de bénévoles ou encore en organisation de réunions et de rencontres promotionnelles pour l'association.</p>
        <p class="text_paragraph text-white-color">Ce premier voyage relevé avec brio, ce trio ne souhaite pas s’arrêter en si bon chemin et compte maintenant une équipe de plus de 30 soignants ainsi que de nouvelles actions à travers la France et le monde entier.</p>
      </div>
    </div>
    <div class="presentation-image-container">
      <img src="/images/staff/staff.png" style="width: 100%">

    </div>

  </div>
</template>

<style scoped>

.presentation-content
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  width: 100vw;

}

.presentation-information-container
{
  display: flex;
  flex: 2;
  flex-direction: row;

  align-items: center;
}

.presentation-title-container
{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.presentation-text-container
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
  padding: 5vh;
}

.presentation-image-container
{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.presentation-image-container img
{
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  z-index: 1;

}


@media (max-width: 800px)
{
  .presentation-content
  {
    flex-direction: column;
    align-items: center;
  }



}

</style>