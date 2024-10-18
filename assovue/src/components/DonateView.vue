<script setup>

</script>

<template>
  <div class="donate-container">
    <div class="title-container background-white-color text-primary-color">
      <p class="title_size">Nous soutenir</p>
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
  padding: 3vw;
}

.donation-message {
  font-size: 2vw;
  margin-bottom: 1vh;
}

.donation-action {
  font-size: 1.5vw;
  font-weight: bold;
}

.logo {
  width: 20vw;
  height: auto;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.donate {
  background-color: var(--primary-color);
  text-decoration: none;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  transition: background-color 0.3s;
}

.donate:hover {
  background-color: var(--secondary-color) !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
}

.donate-title {
  font-size: 3vw;
  margin: 0;
}

.tax-info, .cost-info {
  font-size: 1vw;
  margin: 0;
}

.quote {
  font-size: 1.2vw;
  color: #333;
  font-style: italic;
  line-height: 1.5;
  margin-top: 1vw;
}

.president {
  font-size: 1vw;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .donation-message {
    font-size: 4vw; /* Increase size on smaller screens */
  }

  .donation-action {
    font-size: 3vw;
  }

  .logo {
    width: 50vw; /* Adjust logo size */
  }

  .donate {
    padding: 15px; /* Adjust padding */
  }

  .donate-title {
    font-size: 5vw; /* Increase button text size */
  }

  .tax-info, .cost-info {
    font-size: 3vw; /* Increase size for smaller screens */
  }

  .quote {
    font-size: 3vw; /* Increase quote size */
  }

  .president {
    font-size: 2vw; /* Increase size for smaller screens */
  }
}

@media (max-width: 480px) {
  .donation-message {
    font-size: 5vw; /* Further increase size for very small screens */
  }

  .donation-action {
    font-size: 4vw;
  }

  .logo {
    width: 80vw; /* Further adjust logo size */
  }

  .donate-title {
    font-size: 6vw; /* Adjust button text size */
  }

  .tax-info, .cost-info {
    font-size: 4vw; /* Adjust size for smaller screens */
  }

  .quote {
    font-size: 4vw; /* Adjust quote size */
  }

  .president {
    font-size: 3vw; /* Adjust president text size */
  }
}
</style>
