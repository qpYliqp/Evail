<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {Travel} from "@/model/Travel";

export default defineComponent({
  setup() {
    const travels_list = ref<Travel[]>([]);
    const selected_travel = ref<number>(0);

    onMounted(() => {
      initTravel()
    })

    const initTravel = () => {

      let casamance_d1 : string = "Ce premier voyage nous a permis d’être accueillies par les habitants des villages en collaboration avec l’association AMP présente sur place, le consulat général et les autorités du Sénégal.";
      let casamance_d2 : string = "Nous avons majoritairement fait de la prévention sur des pathologies comme le diabète, l’hypertension artérielle, le cholestérol, les IST, les douleurs articulaires, l’arthrite, l’arthrose ainsi que les problèmes oculaires.";
      let casamance_d3 : string = "Nous avons également soigné beaucoup de blessures liées à ces maladies. Notre équipe plus que jamais soudée par les difficultés n’a pas eu peur de se confronter à la dureté de la vie des habitants.";
      let casamance_description : string[] = [casamance_d1, casamance_d2, casamance_d3]

      let casamance_img1 : string = "/images/travels/casamance/casamance-1.jpg";
      let casamance_img2 : string = "/images/travels/casamance/casamance-2.jpg";
      let casamance_img3 : string = "/images/travels/casamance/casamance-3.jpg";
      let casamance_images : string[] = [casamance_img1, casamance_img2, casamance_img3];

      let Casamance : Travel = new Travel("Casamance", "2024", casamance_description, "Du Casamance aux parcelles de Dakar", casamance_images);
      let Senegal : Travel = new Travel("Sénégal", "2025", ["Ce voyage est à venir"], "Voyage au Sénégal", []);
      let Togo : Travel = new Travel("Togo", "2025", ["Ce voyage est à venir"], "voyage au Togo", []);
      let Cameroun : Travel = new Travel("Cameroun", "2025", ["Ce voyage est à venir"], "Voyage au Cameroun", []);
      let Inde : Travel = new Travel("Inde", "2025", ["Ce voyage est à venir"], "Voyage en Inde", []);

      travels_list.value.push(Casamance);
      travels_list.value.push(Senegal);
      travels_list.value.push(Togo);
      travels_list.value.push(Cameroun);
      travels_list.value.push(Inde);

      selected_travel.value = 0;
    }

    const selectTravel = (index: number) => {
      selected_travel.value = index;
    }

    return {travels_list, selected_travel, selectTravel}

  },
})
</script>

<template>
  <section id="voyages" class="relative w-full py-24">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-travel/10 via-white to-primary/10"></div>
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
      <div class="flex flex-col items-center text-center">
        <span class="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">Nos voyages</span>
        <h2 class="font-display text-4xl font-semibold text-primary md:text-5xl">L'aide sans frontières</h2>
        <p class="mt-4 max-w-3xl text-base text-dusk/70 md:text-lg">
          Chaque mission est une immersion au cœur des réalités locales. Nous apprenons, partageons et construisons avec les
          communautés partenaires un avenir plus juste.
        </p>
      </div>

      <div class="relative">
        <div class="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"></div>
        <div class="flex w-full gap-4 overflow-x-auto pb-4">
          <div
            v-for="(travel, index) in travels_list"
            :key="travel.getDestination()"
            class="flex flex-col items-center"
          >
            <button
              type="button"
              class="group flex flex-col items-center gap-3 rounded-full border border-primary/30 px-4 py-2 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              :class="index === selected_travel ? 'bg-primary text-white shadow-glow' : 'bg-white/80 text-primary'"
              :aria-pressed="index === selected_travel"
              @click="selectTravel(index)"
            >
              <span class="text-xs font-semibold uppercase tracking-widest">{{ travel.getDestination() }}</span>
              <span class="text-lg font-bold">{{ travel.getStartDate() }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.9fr_1.1fr_1fr] xl:items-stretch">
        <div class="flex flex-col justify-between gap-6 rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-subtle xl:p-10">
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-white/70">Destination</p>
            <h3 class="mt-4 font-display text-3xl font-semibold leading-tight">
              {{ travels_list[selected_travel]?.getTitle()}}
            </h3>
          </div>
          <p class="text-lg font-semibold">
            {{ travels_list[selected_travel]?.getDestination() }} · {{ travels_list[selected_travel]?.getStartDate() }}
          </p>
        </div>

        <div class="flex flex-col gap-6 rounded-[2rem] bg-white/70 p-8 text-base leading-relaxed text-dusk/80 shadow-subtle backdrop-blur-xl md:text-lg xl:p-10">
          <div
            v-for="(description, idx) in travels_list[selected_travel]?.getDescriptionParagraph()"
            :key="idx"
            class="rounded-2xl bg-white/60 p-4 shadow-sm"
          >
            <p>
              {{ description }}
            </p>
          </div>
        </div>

        <div class="flex flex-1 flex-col justify-center gap-6 rounded-[2rem] bg-white/60 p-4 shadow-subtle backdrop-blur-xl xl:p-6">
          <template v-if="travels_list[selected_travel]?.getImagesPath().length">
            <div class="flex gap-6 overflow-x-auto scroll-px-6 scroll-smooth pb-2 xl:flex-col xl:overflow-visible">
              <div
                v-for="(img, i) in travels_list[selected_travel]?.getImagesPath()"
                :key="i"
                class="relative h-52 w-64 flex-shrink-0 overflow-hidden rounded-2xl shadow-subtle transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-glow xl:h-44 xl:w-full"
              >
                <img
                  :src="img"
                  :alt="`Photo ${i+1} du voyage en ${travels_list[selected_travel]?.getDestination()}`"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex h-full items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-white/70 p-6 text-center text-sm text-primary/80">
              Les images de cette mission seront bientôt disponibles.
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
