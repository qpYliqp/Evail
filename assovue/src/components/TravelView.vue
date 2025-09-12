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

      let casamance_d1 : string = "Ce premier voyage nous a permis d’être accueillies par les habitants des villages en collaboration avec l’association AMP présente sur place, le consulat général et les autorités du Sénégal."
      let casamance_d2 : string = "Nous avons majoritairement fait de la prévention sur des pathologies comme le diabète, l’hypertension artérielle, le cholestérol, les IST, les douleurs articulaires, l’arthrite, l’arthrose ainsi que les problèmes oculaires."
      let casamance_d3 : string = "Nous avons également soigné beaucoup de blessures liées à ces maladies. Notre équipe plus que jamais soudée par les difficultés n’a pas eu peur de se confronter à la dureté de la vie des habitants."
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
  <div class="full-width-panel flex flex-col align-center justify-center">
    <div class="title-container background-primary text-white">
      <p>Nos voyages humanitaires.</p>
      <p>L'aide sans frontières.</p>
    </div>
    <div class="travel-timeline">
      <div class="travel-items">
        <div v-for="(travel, index) in travels_list" :key="index">
            <div class="travel-circle" :class="index === selected_travel ? 'background-primary' : 'background-travel'" @click="selected_travel = index">{{travel.getStartDate()}}</div>
            <div class="travel-circle-date"     >{{ travel.getDestination() }}</div>
        </div>
      </div>
    </div>
    <div class="flex travel-container full-width-panel align-center justify-center" >

      <div class="subtitle-container flex-1 text-white background-secondary justify-center align-center flex self-stretch">
        <p>{{ travels_list[selected_travel]?.getTitle()}}</p>
      </div>

      <div class="paragraph-container flex flex-col align-center justify-center text-paragraph flex-2">
        <div v-for="description in travels_list[selected_travel]?.getDescriptionParagraph()" class="text-paragraph-padding ">
          <p>{{description}}</p>
        </div>
      </div>

      <div class="flex flex-1 self-stretch" style="max-height: 50vh">
        <div
            v-if="travels_list[selected_travel]?.getImagesPath().length > 0"
            class="travel-images-container">
          <div class="travel-images-grid">
            <div
                v-for="(img, i) in travels_list[selected_travel]?.getImagesPath()"
                :key="i"
                class="image-item"
            >
              <img
                  :src="img"
                  :alt="`Photo ${i+1} du voyage en ${travels_list[selected_travel]?.getDestination()}`"
                  class="travel-image"
                  loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>






</template>
<style scoped>

.travel-container {
  flex-direction: row;
  overflow-y: auto;
}

.travel-images-container {
  padding: 1rem;
  overflow-y: auto;
}

.travel-images-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;
}

.image-item {
  position: relative;
  flex: 1 1 500px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  aspect-ratio: 4/3;
}

.travel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.travel-image:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .travel-container {
    flex-direction: column;
    overflow: hidden;
  }

  .travel-images-container {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
  }

  .travel-images-grid {
    flex-wrap: nowrap;
    gap: 1rem;
  }

  .image-item {
    flex: 0 0 240px;
    aspect-ratio: 4/3;
    scroll-snap-align: start;
  }

  .subtitle-container
  {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
}

@media (max-width: 800px) {
  .image-item {
    flex: 0 0 200px;
  }
}

@media (max-width: 480px) {
  .image-item {
    flex: 0 0 100%;
  }
}


.travel-timeline {
  display: flex;
  justify-content: start;
  width: 80%;
  margin: 3rem auto;
  position: relative;
  padding-top: 1rem;
}


.travel-timeline::before {
  content: '';
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background-color: var(--primary-color);
  z-index: -1;
}

.travel-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  position: relative;
  z-index: 1;
}

.travel-circle:hover
{
  cursor: pointer;
}

.travel-circle-date {
  color: black;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.5rem;
}

.travel-items {
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-between;
}


.travel-images-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {

}


</style>