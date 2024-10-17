<script lang="ts">
import {defineComponent} from "vue";
import {onMounted, ref} from "vue";
import {StaffMember} from "@/model/StaffMember";


import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation ,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default defineComponent({

  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const staff_members = ref<StaffMember[]>([])

    onMounted(() => {
      initStaffMember()
    })

    const initStaffMember = () =>
    {
      let Anne = new StaffMember("Annie","/images/staff/anne.png", "Annie est la fondatrice et présidente de l'association. Ancienne bio-esthéticienne, elle s'est reconvertie en tant qu'agent hospitalier dans la fonction publique. ", "L'humain est au cœur de nos professions,nous restons donc des soignants, non des gens spéciaux " )
      let Yaye = new StaffMember("Yaye","/images/staff/yaye.png", "Yaye est co-fondatrice et vice-présidente de l'association. Elle est certifiée en pratique Snoezelen (accompagnement sensoriel et bien-être) et est professionnelle de la santé à la fois dans le secteur privé et public.", "Mon humanité est liée à la vôtre, car nous ne pouvons être pleinement humains qu'ensemble. Partageons le bonheur." )
      let Minette = new StaffMember("Minette","/images/staff/minette.png", "Co-fondatrice et trésorière de l'association. Architecte d'intérieure et professionnelle de la santé public et privé en soins palliatifs", "L'amour est un guide dans ma vie. Bien plus qu'une étincelle belle, douce et accomplie. Il m'a appris à me servir de ses ailes." )
      let Martine = new StaffMember("Martine Gomis","/images/staff/martine.png", "Martine Gomis secrétaire de l'association, assistante spécialisée dans le milieu du handicap, et professionnelle de santé dans le privé et public.", "Ensemble, vivons des moments uniques, grandissons chaque jour, pour offrir le meilleur à chacun." )

      staff_members.value.push(Anne)
      staff_members.value.push(Yaye)
      staff_members.value.push(Minette)
      staff_members.value.push(Martine)
    }

    return { modules:[Navigation], staff_members }
  }


})

</script>

<template>
<div class="background-white-color text-primary-color title-container">
  <p class="title_size">Une équipe pluri-professionnelle</p>
</div>

  <div class="staff_swiper_container">

    <div class="swiper-button-prev swiper-button-prev-1"></div>

    <swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-button-next-1' ,
          prevEl: '.swiper-button-prev-1'
          }"
        :pagination="{ clickable: true }"
        :slides-per-group="1"
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        class="third_page_swiper"
        style="width: 80vw"
    >
      <swiper-slide v-for="staff in staff_members" :key="staff.name" style="justify-content: center; align-items: center;display:flex;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%;">
          <p class="staff_name" >{{staff.name}}</p>
          <img class="staff_image" :src="staff.imagePath" >

          <p class="staff_description" >{{staff.description}}</p>
          <p class="staff_citation" >
            &ldquo;{{ staff.citation }}&rdquo;
          </p>          </div>
      </swiper-slide>
    </swiper>

    <div class="swiper-button-next swiper-button-next-1"></div>

  </div>


</template>

<style scoped>

.staff_swiper_container
{
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin-bottom: 2vh;
}


.swiper-button-next-1, .swiper-button-prev-1 {
  position: static !important; /* Annule le positionnement absolu */
  width: auto !important; /* Annule la largeur par défaut */
  height: auto !important; /* Annule la hauteur par défaut */
  margin-top: 0 !important; /* Annule le marges par défaut */
  z-index: auto !important; /* Réinitialise le z-index */
  color: var(--primary-color);
  padding: 5vw;

}

.staff_name
{
  color: black; font-size: 2vw; margin-top: 5vh; user-select: none
}

.staff_image
{
  width: 10vw; height: 20vh; border-radius: 50%; margin-top: 5vh;
}

.staff_description
{
  color: black; font-size: 1.5vw; margin-top: 5vh;user-select: none
}

.staff_citation
{
  color: black;
  font-size: 1.5vw;
  margin-top: 5vh;
  font-style: italic;
  position: relative;
  padding: 1vw;
  border-left: 5px solid var(--primary-color);
  background: rgba(169, 40, 49, 0.1);
  user-select: none

}


@media (max-width: 500px) {


  .staff_image
  {
    width: 100px; height: 100px; border-radius: 50%; margin-top: 2vh;
  }

  .staff_name
  {
    color: black; font-size: 4vh; margin-top: 2vh; user-select: none
  }

  .staff_description
  {
    color: black; font-size: 2vh; margin-top: 2vh;user-select: none
  }

  .staff_citation
  {
    color: black; font-size: 2vh; margin-top: 2vh;
    margin-bottom: 2vw;user-select: none
  }

  .swiper-button-next-1, .swiper-button-prev-1
  {
    margin-top: -10vh;
    transform: translateY(-10vh);
  }
  
}

</style>