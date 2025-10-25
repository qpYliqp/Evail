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
  <section class="w-full">
    <div class="flex w-full flex-col items-center justify-center bg-white p-6 text-center text-4xl font-semibold text-primary">
      <p>Une équipe pluri-professionnelle</p>
    </div>

    <div class="flex w-full items-center justify-center gap-4 px-4">
      <div class="swiper-button-prev swiper-button-prev-1 !static !mt-0 !h-auto !w-auto !transform-none p-6 text-primary"></div>

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
        class="w-full"
      >
        <swiper-slide
          v-for="staff in staff_members"
          :key="staff.name"
          class="flex flex-col items-center text-center"
        >
          <p class="mt-12 text-2xl font-semibold text-black select-none lg:mt-12 lg:text-3xl">{{ staff.name }}</p>
          <img
            class="mt-12 h-32 w-32 rounded-full object-cover select-none md:h-40 md:w-40 lg:h-48 lg:w-48"
            :src="staff.imagePath"
            :alt="`Image ${staff.name}`"
          />
          <p class="mt-8 max-w-prose px-4 text-center text-base text-black select-none lg:text-lg">{{ staff.description }}</p>
          <p class="mt-8 mb-8 w-full max-w-3xl border-l-4 border-primary bg-primary/10 p-4 text-base italic text-black select-none lg:text-lg">
            &ldquo;{{ staff.citation }}&rdquo;
          </p>
        </swiper-slide>
      </swiper>

      <div class="swiper-button-next swiper-button-next-1 !static !mt-0 !h-auto !w-auto !transform-none p-6 text-primary"></div>
    </div>
  </section>
</template>
