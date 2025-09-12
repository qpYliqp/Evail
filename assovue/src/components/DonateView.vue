<script setup></script>

<template>
  <div class="donate-container">
    <div class="title-container background-white text-primary">
      <p>Nous soutenir</p>
    </div>
    <p class="donation-message">Vos dons sont essentiels pour rendre possible nos actions humanitaires.</p>
    <p class="donation-action">Faire un don, c'est permettre les soins sans frontières.</p>
    <img class="logo" src="/images/logos/colored_evail_logo.png" alt="Evail Logo">
    <a class="donate" href="https://www.payasso.fr/association-evail-humanitaire/don">
      <p class="donate-title">Faire un don</p>
      <p class="tax-info">Vos dons sont déductibles à hauteur de 66% des impôts sur le revenu.</p>
      <p class="cost-info">Pour 100€ donnés, votre don vous revient en réalité à 34€.</p>
    </a>
    <p class="quote">« S'ouvrir un peu aux uns, aux autres permet de faire tomber nos barrières et ainsi de réduire le malheur et l'indifférence. »</p>
    <p class="president">Présidente d'Evail</p>
  </div>
</template>

<style scoped>
.donate-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: black;
  text-align: center;
  margin: 2rem;

}

.donation-message {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.donation-action {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo {
  width: 20rem;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.donate {
  background-color: var(--primary-color);
  text-decoration: none;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  transition: background-color 0.3s;
  margin-bottom: 2rem;

}

.donate:hover {
  background-color: var(--secondary-color) !important;
}

.donate-title {
  font-size: 3rem;
  margin: 0;
}

.tax-info, .cost-info {
  font-size: 1rem;
  margin: 0;
}

.quote {
  font-size: 1.2rem;
  color: #333;
  font-style: italic;
  line-height: 1.5;
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 2rem;

}

.president {
  font-size: 1rem;
  margin-bottom: 2rem;
}

</style>
