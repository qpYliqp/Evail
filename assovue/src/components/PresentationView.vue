<script setup lang="ts">

</script>

<template>
  <div class="full-width-panel">
    <div class="title-container text-primary">
      <p>Trois Femmes</p>
      <p>Une même ambition</p>
    </div>
    <div class="full-width-panel background-primary text-white flex presentation-container">
      <div class="background-secondary subtitle-container text-white flex flex-1 align-center justify-center self-stretch">
        <p>Notre Histoire</p>
      </div>
      <div class="text-paragraph flex flex-col align-center justify-center text-white flex-2 paragraph-container">
        <p class="text-paragraph-padding">EVAIL humanitaire est née d’une amitié, d’un rêve commun : celui d’aider les autres aux delà des frontières. Pour concrétiser ce projet Annie, Minette et Yaye l’ont porté durant deux ans.</p>
        <p class="text-paragraph-padding">Annie, Minette et Yaye ont porté ce projet, elles l'ont soigneusement peaufiné. Elles se sont données comme premier objectif de voyager au Sénégal. En France, elles parlent de ce projet à leurs collègues. Sitôt, une équipe de soignants est montée.</p>
        <p class="text-paragraph-padding">Les actions se multiplient telles que le démarchage en pharmacies partenaires ou pour des médicaments, en magasin pour des fournitures scolaires ou bien en recherche de bénévoles ou encore en organisation de réunions et de rencontres promotionnelles pour l'association.</p>
        <p>Ce premier voyage relevé avec brio, ce trio ne souhaite pas s’arrêter en si bon chemin et compte maintenant une équipe de plus de 30 soignants ainsi que de nouvelles actions à travers la France et le monde entier.</p>
      </div>
      <div class="flex-1 flex" style="justify-content:end;">
        <img src="/images/staff/staff.png" alt="staff-image">
      </div>
    </div>
  </div>
</template>

<style scoped>

.presentation-container
{
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
}

.presentation-container img
{
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  flex-shrink: 0;
}



@media (max-width: 1200px) {
  .presentation-container
  {
    flex-direction: column;
    align-items: center;
  }

  .subtitle-container
  {
    padding: 2rem;
    margin: 0;
  }
}

</style>