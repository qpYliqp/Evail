<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Travel } from "@/model/Travel";

export default defineComponent({
  setup() {
    const travels_list = ref<Travel[]>([]);
    const selected_travel = ref<number>();

    onMounted(() => {
      initTravel();
    });

    const initTravel = () => {
      let casamance_d1: string =
        "Ce premier voyage nous a permis d’être accueillies par les habitants des villages en collaboration avec l’association AMP présente sur place, le consulat général et les autorités du Sénégal.";
      let casamance_d2: string =
        "Nous avons majoritairement fait de la prévention sur des pathologies comme le diabète, l’hypertension artérielle, le cholestérol, les IST, les douleurs articulaires, l’arthrite, l’arthrose ainsi que les problèmes oculaires.";
      let casamance_d3: string =
        "Nous avons également soigné beaucoup de blessures liées à ces maladies. Notre équipe plus que jamais soudée par les difficultés n’a pas eu peur de se confronter à la dureté de la vie des habitants.";
      let casamance_description: string[] = [casamance_d1, casamance_d2, casamance_d3];

      let casamance_img1: string = "/images/travels/casamance/casamance-1.jpg";
      let casamance_img2: string = "/images/travels/casamance/casamance-2.jpg";
      let casamance_img3: string = "/images/travels/casamance/casamance-3.jpg";
      let casamance_images: string[] = [casamance_img1, casamance_img2, casamance_img3];

      let Casamance: Travel = new Travel(
        "Casamance",
        "2024",
        casamance_description,
        "Du Casamance aux parcelles de Dakar",
        casamance_images
      );
      let Senegal: Travel = new Travel("Sénégal", "2025", ["Ce voyage est à venir"], "Voyage au Sénégal", []);
      let Togo: Travel = new Travel("Togo", "2025", ["Ce voyage est à venir"], "voyage au Togo", []);
      let Cameroun: Travel = new Travel("Cameroun", "2025", ["Ce voyage est à venir"], "Voyage au Cameroun", []);
      let Inde: Travel = new Travel("Inde", "2025", ["Ce voyage est à venir"], "Voyage en Inde", []);

      travels_list.value.push(Casamance);
      travels_list.value.push(Senegal);
      travels_list.value.push(Togo);
      travels_list.value.push(Cameroun);
      travels_list.value.push(Inde);

      selected_travel.value = 0;
    };

    return { travels_list, selected_travel };
  },
});
</script>

<template>
  <section
    id="travels"
    class="relative flex w-full flex-col items-center justify-center overflow-hidden py-20"
  >
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-midnight/50 via-black/50 to-primary/20"></div>
    <div class="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
      <div class="flex flex-col items-center text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-primary/70">Nos voyages humanitaires</p>
        <h2 class="mt-3 text-3xl font-bold md:text-5xl">L&rsquo;aide sans frontières</h2>
        <p class="mt-4 max-w-3xl text-base text-white/70">
          Des expéditions solidaires menées avec écoute et humilité pour créer
          des liens durables avec les populations locales.
        </p>
      </div>
      <div class="relative mx-auto flex w-full max-w-5xl flex-col gap-12">
        <div class="relative flex justify-between gap-8 overflow-x-auto pb-4">
          <div class="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-white/10"></div>
          <button
            v-for="(travel, index) in travels_list"
            :key="index"
            type="button"
            class="relative z-10 flex min-w-[5.5rem] flex-col items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            :class="
              index === selected_travel
                ? 'bg-primary text-white shadow-glow'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            "
            @click="selected_travel = index"
          >
            <span class="text-base font-bold">{{ travel.getStartDate() }}</span>
            <span class="text-[0.65rem] tracking-[0.25em]">{{ travel.getDestination() }}</span>
          </button>
        </div>
        <div
          class="grid grid-cols-1 gap-12 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl xl:grid-cols-[1.1fr_1.4fr]"
        >
          <div class="flex flex-col gap-6">
            <div class="rounded-3xl border border-white/10 bg-black/30 p-6 text-center shadow-lg backdrop-blur">
              <p class="text-xl font-semibold text-white">
                {{ travels_list[selected_travel]?.getTitle() }}
              </p>
            </div>
            <div class="flex flex-col gap-4 text-left text-base text-white/80">
              <p
                v-for="(description, idx) in travels_list[selected_travel]?.getDescriptionParagraph()"
                :key="idx"
                class="leading-relaxed"
              >
                {{ description }}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <div
              v-if="travels_list[selected_travel]?.getImagesPath().length > 0"
              class="relative"
            >
              <div class="flex gap-6 overflow-x-auto scroll-px-6 scroll-smooth snap-x snap-mandatory xl:grid xl:grid-cols-2 xl:gap-6 xl:overflow-visible">
                <div
                  v-for="(img, i) in travels_list[selected_travel]?.getImagesPath()"
                  :key="i"
                  class="group relative h-64 w-60 flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl snap-center xl:h-60 xl:w-full"
                >
                  <img
                    :src="img"
                    :alt="`Photo ${i + 1} du voyage en ${travels_list[selected_travel]?.getDestination()}`"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </div>
            </div>
            <div
              v-else
              class="flex h-full items-center justify-center rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-sm text-white/50"
            >
              Bientôt disponible : les images de cette mission.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
