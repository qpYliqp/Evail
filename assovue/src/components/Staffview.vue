<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { StaffMember } from "@/model/StaffMember";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const staff_members = ref<StaffMember[]>([]);

    onMounted(() => {
      initStaffMember();
    });

    const initStaffMember = () => {
      let Anne = new StaffMember(
          "Annie",
          "/images/staff/anne.png",
          "Annie est la fondatrice et présidente de l'association. Ancienne bio-esthéticienne, elle s'est reconvertie en tant qu'agent hospitalier dans la fonction publique.",
          "L'humain est au cœur de nos professions,nous restons donc des soignants, non des gens spéciaux "
      );
      let Yaye = new StaffMember(
          "Yaye",
          "/images/staff/yaye.png",
          "Yaye est co-fondatrice et vice-présidente de l'association. Elle est certifiée en pratique Snoezelen (accompagnement sensoriel et bien-être) et est professionnelle de la santé à la fois dans le secteur privé et public.",
          "Mon humanité est liée à la vôtre, car nous ne pouvons être pleinement humains qu'ensemble. Partageons le bonheur."
      );
      let Minette = new StaffMember(
          "Minette",
          "/images/staff/minette.png",
          "Co-fondatrice et trésorière de l'association. Architecte d'intérieure et professionnelle de la santé public et privé en soins palliatifs",
          "L'amour est un guide dans ma vie. Bien plus qu'une étincelle belle, douce et accomplie. Il m'a appris à me servir de ses ailes."
      );
      let Martine = new StaffMember(
          "Martine Gomis",
          "/images/staff/martine.png",
          "Martine Gomis secrétaire de l'association, assistante spécialisée dans le milieu du handicap, et professionnelle de santé dans le privé et public.",
          "Ensemble, vivons des moments uniques, grandissons chaque jour, pour offrir le meilleur à chacun."
      );

      staff_members.value.push(Anne, Yaye, Minette, Martine);
    };

    return { modules: [Navigation, Pagination], staff_members };
  },
});
</script>

<template>
  <div class="full-width-panel">
    <div class="background-white-color text-primary title-container">
      <p>Une équipe pluri-professionnelle</p>
    </div>

    <div class="flex flex-row">
      <div class="swiper-button-prev swiper-button-prev-1"></div>

      <swiper
          :modules="modules"
          :navigation="{
          nextEl: '.swiper-button-next-1',
          prevEl: '.swiper-button-prev-1'
        }"
          :pagination="{ clickable: true }"
          :slides-per-group="1"
          :slides-per-view="1"
          :space-between="50"
          :loop="true"
          class="third_page_swiper"
          style="width: 100%"
      >
        <swiper-slide
            v-for="staff in staff_members"
            :key="staff.name"
            class="staff-slide"
        >
          <p class="staff-name">{{ staff.name }}</p>
          <img class="staff-image" :src="staff.imagePath"     :alt="`Image ${staff.name}`"  />
          <p class="staff-description">{{ staff.description }}</p>
          <p class="staff-citation">
            &ldquo;{{ staff.citation }}&rdquo;
          </p>
        </swiper-slide>
      </swiper>

      <div class="swiper-button-next swiper-button-next-1"></div>
    </div>
  </div>
</template>

<style scoped>


.staff-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.swiper-button-next-1,
.swiper-button-prev-1 {
  position: static !important;
  width: auto !important;
  height: auto !important;
  margin-top: 0 !important;
  z-index: auto !important;
  color: var(--primary-color);
  padding: 2rem;
}

.staff-name {
  color: black;
  font-size: 2rem;
  margin-top: 3rem;
  user-select: none;
}

.staff-image {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-top: 3rem;
  object-fit: cover;
}

.staff-description {
  color: black;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
  max-width: 60ch;
  user-select: none;
}

.staff-citation {
  color: black;
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  padding: 1rem;
  border-left: 5px solid var(--primary-color);
  background: rgba(169, 40, 49, 0.1);
  max-width: 100%;
  user-select: none;
}

@media (max-width: 1024px) {
  .staff-image {
    width: 8rem;
    height: 8rem;
    margin-top: 1rem;
  }

  .staff-name {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .staff-description {
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0 1rem;
  }

  .staff-citation {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.8rem;
  }

  .swiper-button-next-1,
  .swiper-button-prev-1 {
    margin-top: -5rem;
    transform: translateY(-5rem);
  }
}
</style>
