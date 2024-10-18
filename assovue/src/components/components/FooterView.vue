<script setup>

</script>

<template>
  <div style="background-color: var(--primary-color)">
    <div class="subtitle_size" style="color: white; padding: 1vw; display: flex; justify-content: center; align-items: center">
      Contact
    </div>

    <div style="display: flex; flex-direction: row; color: white; justify-content: center; align-items: center; margin-bottom: 0.5vw;">
      <img src="/images/logos/mail-logo.png" style="width: 2.5vw; height: auto; margin-right: 0.5vw;">
      <p  class="contact-info">Contact.evailhumanitaire@gmail.com</p>
    </div>

    <div style="display: flex; flex-direction: row; color: white; justify-content: center; align-items: center; ">
      <img src="/images/logos/insta-logo.png" class="contact-logo">
      <p class="contact-info">@evail_humanitaire</p>
    </div>
  </div>
</template>

<style scoped>

.contact-info
{
  margin: 0; font-size: 1vw;
}

.contact-logo
{
  width: 2.5vw; height: auto; margin-right: 0.5vw;
}
@media (max-width: 600px) {

  .contact-info {
    font-size: 1vh;
  }

  .contact-logo
  {
    width: 1vh; height: auto; margin-right: 0.5vw;
  }
}

</style>