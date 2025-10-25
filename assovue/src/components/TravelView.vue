<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {Travel} from "@/model/Travel";

export default defineComponent({
  setup() {
    const travels_list = ref<Travel[]>([]);
    const selected_travel = ref<number>();

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

    return {travels_list, selected_travel}

  },
})
</script>

<template>
  <section class="flex w-full flex-col items-center justify-center">
    <div class="flex w-full flex-col items-center justify-center bg-primary p-6 text-center text-4xl font-semibold text-white">
      <p>Nos voyages humanitaires.</p>
      <p>L'aide sans frontières.</p>
    </div>
    <div class="relative mt-12 w-4/5">
      <div class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-primary"></div>
      <div class="relative flex w-full justify-between gap-6 overflow-x-auto pb-6">
        <div v-for="(travel, index) in travels_list" :key="index" class="flex flex-col items-center">
          <div
            class="z-10 mb-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xs font-semibold text-white transition-colors duration-300"
            :class="index === selected_travel ? 'bg-primary' : 'bg-travel'"
            @click="selected_travel = index"
          >
            {{ travel.getStartDate() }}
          </div>
          <div class="text-center text-xs font-bold text-black">
            {{ travel.getDestination() }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col gap-10 px-4 pb-12 xl:flex-row xl:items-stretch xl:justify-center">
      <div class="flex flex-1 items-center justify-center self-stretch rounded-lg bg-secondary px-6 py-8 text-center text-2xl font-semibold text-white">
        <p>{{ travels_list[selected_travel]?.getTitle()}}</p>
      </div>

      <div class="flex flex-[2] flex-col items-center justify-center gap-6 px-4 text-center text-base md:text-lg">
        <div
          v-for="(description, idx) in travels_list[selected_travel]?.getDescriptionParagraph()"
          :key="idx"
          class="w-full max-w-3xl"
        >
          <p class="pb-6">
            {{ description }}
          </p>
        </div>
      </div>

      <div class="flex flex-1 max-h-[50vh] w-full justify-center">
        <div
          v-if="travels_list[selected_travel]?.getImagesPath().length > 0"
          class="h-full w-full overflow-hidden px-4"
        >
          <div class="mt-4 flex gap-6 overflow-x-auto scroll-px-6 scroll-smooth snap-x snap-mandatory xl:flex-wrap xl:justify-center xl:overflow-visible">
            <div
              v-for="(img, i) in travels_list[selected_travel]?.getImagesPath()"
              :key="i"
              class="relative h-auto w-64 flex-shrink-0 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.03] snap-center xl:w-[22rem] xl:flex-shrink"
            >
              <img
                :src="img"
                :alt="`Photo ${i+1} du voyage en ${travels_list[selected_travel]?.getDestination()}`"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
