<script setup>

</script>

<template>
  <div class="donate-container">
    <div class="title-container background-white-color text-primary-color">
      <p class="title_size">Nous soutenir</p>
    </div>
    <p style="font-size: 2vw; margin-bottom: 1vh">Vos dons sont essentiels pour rendre possible nos actions humanitaires.</p>
    <p style="font-size: 1.5vw; font-weight: bold">Faire un don, c'est permettre les soins sans frontières.</p>
    <img src="/images/logos/colored_evail_logo.png" style="width: 20vw; height: auto; margin-top: 2vh;margin-bottom: 2vh">
    <a class="donate" href="https://www.payasso.fr/association-evail-humanitaire/don" style=" background-color: var(--primary-color); text-decoration: none; padding: 10px; color: white; display: flex; flex-direction: column;
       justify-content: center; align-items: center; border-radius: 2vw">
      <p style="font-size: 3vw; margin: 0;">Faire un don</p>
      <p style="font-size: 1vw; margin: 0;">Vos dons sont déductibles à hauteur de 66% des impôts sur le revenu.</p>
      <p style="font-size: 1vw; margin: 0;"> Pour 100€ donnés, votre don vous revient en réalité à 34€.</p>
    </a>

    <p style="font-size: 1.2vw; color: #333; font-style: italic; line-height: 1.5; margin-top: 1vw;">
      « S'ouvrir un peu aux uns, aux autres permet de faire tomber nos barrières et ainsi de réduire le malheur et l'indifférence. »
    </p>
    <p style="font-size: 1vw;">Présidente d'Evail</p>

  </div>
</template>

<style scoped>

.donate-container
{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: black;
  padding: 3vw;
}

.donate:hover
{
  background-color: var(--secondary-color) !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
}


</style>