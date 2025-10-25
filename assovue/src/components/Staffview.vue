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
  <section id="team" class="relative w-full overflow-hidden py-20">
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-secondary/25 opacity-70"></div>
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6">
      <div class="flex flex-col items-center text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-primary/70">Notre équipe</p>
        <h2 class="mt-3 text-3xl font-bold md:text-5xl">Une équipe pluri-professionnelle</h2>
        <p class="mt-4 max-w-2xl text-base text-white/70">
          Des professionnelles de santé engagées qui mettent leurs compétences au
          service des communautés. Découvrez les visages qui portent l&rsquo;action
          d&rsquo;Evail.
        </p>
      </div>
      <div
        class="flex w-full flex-col items-center gap-6 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
      >
        <div class="flex w-full items-center justify-between gap-6">
          <div
            class="swiper-button-prev swiper-button-prev-1 !static !m-0 !h-12 !w-12 !transform-none rounded-full border border-white/20 bg-white/10 text-lg font-bold text-white transition-all duration-300 hover:bg-white/20"
            aria-label="Voir le membre précédent"
          ></div>
          <div class="flex-1">
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
                <div
                  class="mt-8 flex w-full max-w-2xl flex-col items-center gap-6 rounded-[2.5rem] border border-white/10 bg-black/40 px-6 py-10 shadow-lg backdrop-blur-xl md:px-10"
                >
                  <img
                    class="h-32 w-32 rounded-full border-4 border-white/30 object-cover shadow-lg transition-transform duration-300 hover:scale-[1.03] md:h-40 md:w-40 lg:h-48 lg:w-48"
                    :src="staff.imagePath"
                    :alt="`Portrait de ${staff.name}`"
                  />
                  <div class="flex flex-col gap-3">
                    <p class="text-2xl font-semibold md:text-3xl">{{ staff.name }}</p>
                    <p class="text-base text-white/80 md:text-lg">{{ staff.description }}</p>
                  </div>
                  <p class="w-full max-w-3xl rounded-3xl border border-primary/40 bg-primary/20 p-6 text-base italic text-white/90 md:text-lg">
                    &ldquo;{{ staff.citation }}&rdquo;
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div
            class="swiper-button-next swiper-button-next-1 !static !m-0 !h-12 !w-12 !transform-none rounded-full border border-white/20 bg-white/10 text-lg font-bold text-white transition-all duration-300 hover:bg-white/20"
            aria-label="Voir le membre suivant"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
