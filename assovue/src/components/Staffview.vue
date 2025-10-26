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
  <section id="equipe" class="relative w-full py-24">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 via-white to-primary/10"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
      <div class="flex flex-col items-center text-center">
        <span class="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">Notre équipe</span>
        <h2 class="font-display text-4xl font-semibold text-primary md:text-5xl">Une équipe pluri-professionnelle</h2>
        <p class="mt-4 max-w-3xl text-base text-dusk/70 md:text-lg">
          Des soignantes et soignants engagés, réunis par la même volonté : offrir un accompagnement respectueux et humain, où
          chaque rencontre est une histoire de confiance partagée.
        </p>
      </div>

      <div class="relative rounded-[2.5rem] bg-white/70 p-6 shadow-subtle backdrop-blur-xl md:p-10">
        <div class="pointer-events-none absolute -left-10 top-10 hidden h-32 w-32 rounded-full bg-primary/15 blur-3xl lg:block"></div>
        <div class="pointer-events-none absolute -right-6 bottom-6 hidden h-24 w-24 rounded-full bg-secondary/15 blur-3xl md:block"></div>

        <div class="flex w-full items-center justify-center gap-4">
          <button
            type="button"
            class="swiper-button-prev swiper-button-prev-1 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-white/80 text-primary shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Membre précédent"
          ></button>

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
              class="flex justify-center"
            >
              <article
                class="flex w-full max-w-3xl flex-col items-center gap-6 rounded-[2rem] bg-white/80 p-8 text-center text-dusk shadow-subtle transition-transform duration-500 hover:-translate-y-1 hover:shadow-glow md:p-12"
              >
                <p class="text-2xl font-semibold text-primary md:text-3xl">{{ staff.name }}</p>
                <img
                  class="h-32 w-32 rounded-full border-4 border-white/70 object-cover shadow-subtle md:h-40 md:w-40 lg:h-48 lg:w-48"
                  :src="staff.imagePath"
                  :alt="`Portrait de ${staff.name}`"
                  loading="lazy"
                />
                <p class="max-w-prose text-base text-dusk/80 md:text-lg">{{ staff.description }}</p>
                <p class="w-full max-w-3xl rounded-3xl bg-primary/10 p-6 text-base italic text-primary md:text-lg">
                  &ldquo;{{ staff.citation }}&rdquo;
                </p>
              </article>
            </swiper-slide>
          </swiper>

          <button
            type="button"
            class="swiper-button-next swiper-button-next-1 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-white/80 text-primary shadow-subtle transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Membre suivant"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: rgba(169, 40, 49, 0.3);
  opacity: 1;
  transition: background-color 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #A92831;
}
</style>
