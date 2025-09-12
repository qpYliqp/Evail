<script setup></script>

<template>
  <div style="background-color: var(--primary-color); display: flex; flex-direction: column; align-items: center;">
    <div class="subtitle_size text-white flex justify-center align-center" style="padding: 1rem;">
      Contact
    </div>
<div class="flex flex-col align-start justify-start">
    <div class="contact-container">
      <img class="contact-logo" src="/images/logos/mail-logo.png" alt="mail-logo">
      <p class="contact-info">Contact.evailhumanitaire@gmail.com</p>
    </div>
    <div class="contact-container">
      <img src="/images/logos/insta-logo.png" class="contact-logo" alt="insta-logo">
      <p class="contact-info">@evail_humanitaire</p>
    </div>
  </div>
  </div>
</template>

<style scoped>
.contact-info {
  margin: 0;
  font-size: 1rem;
}

.contact-container
{
  display: flex; 
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
}

.contact-logo {
  width: 2rem;
  height: auto;
  margin-right: 0.5rem;
}


</style>
