<script lang="ts">

import {defineComponent, onMounted, ref} from "vue";
import {Travel} from "@/model/Travel";


export default defineComponent({

  setup() {

    //Voir /model/Travel.ts pour comprendre pourquoi j'ai fait une liste de voyages.
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

      let Casamance : Travel = new Travel("Casamance", "2024", casamance_description, "Du Casamance aux parcelles de Dakar", []);
      let Senegal : Travel = new Travel("Sénégal", "2025", [], "", []);
      let Togo : Travel = new Travel("Togo", "2025", [], "", []);
      let Cameroun : Travel = new Travel("Cameroun", "2025", [], "", []);
      let Inde : Travel = new Travel("Inde", "2025", [], "", []);

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

  <div class="title-container background_primary-color text-white-color">
    <p class="title_size">Découvrez nos voyages humanitaires.</p>
    <p class="title_size">L’aide ne connait pas de frontières.</p>
  </div>

  <div class="travel-timeline">
    <div class="travel-items">
      <div v-for="travel in travels_list">
          <div class="travel-circle">{{travel.getStartDate()}}</div>
          <div class="travel-circle-date">{{ travel.getDestination() }}</div>
      </div>
    </div>
  </div>

  <div class="travel-information-container">
    <div class="travel-title-container background-secondary-color text-white-color disappear_on_mobile">
      <p class="subtitle_size">{{ travels_list[selected_travel]?.getTitle()}}</p>
    </div>

    <div class="travel-information">
      <div v-for="description in travels_list[selected_travel]?.getDescriptionParagraph()">
        <p class="text_paragraph">{{description}}</p>
      </div>

    </div>

      <div style="flex:1;">

        <div style="display: flex; flex-direction: row; align-self: stretch">
          <div style="display: flex; flex-direction: column; flex: 1">
            <div class="big_image">
              <img src="/images/travels/casamance/casamance-7.jpg" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="little_image">
              <img src="/images/travels/casamance/casamance-5.jpg" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>

          <div style="display: flex; flex-direction: column; flex: 1">
            <div class="little_image">
              <img src="/images/travels/casamance/casamance-1.jpg" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="big_image" >
              <img src="/images/travels/casamance/casamance-2.jpg" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>

          <div style="display: flex; flex-direction: column; flex: 1">
            <div class="middle_image" >
              <img src="/images/travels/casamance/casamance-3.jpg" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="middle_image">
              <img src="/images/travels/casamance/casamance-4.jpg" style="width: 100%; height: 100%; object-fit: cover;">

            </div>
          </div>
        </div>

      </div>
    </div>






</template>

<style scoped>


.travel-information-container
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.travel-information
{
  display : flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  align-items: center;
  padding: 2vw;
}

.travel-image
{
  flex: 1;
}

.travel-title-container
{
  display: flex;
  flex: 0.7;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: 2vw;

}



.travel-information-container
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
}

.travel-timeline {
  display: flex;
  justify-content: start;
  width: 80%;
  margin: 3vw auto;
  position: relative;
  padding-top: 1vw;
}

.travel-timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.2vw;
  background-color: #b58632;
  z-index: -1;
}

.travel-circle {
  width: 2.5vw;
  height: 2.5vw;
  background-color: #b58632;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 0.5vw;
  font-size: 0.8vw;
  position: relative;
  z-index: 1;
}

.travel-circle-date {
  color: black;
  font-size: 0.8vw;
  font-weight: bold;
  text-align: center;
  margin-top: 0.5vw; /* Pour espacer la date du cercle */
}

.travel-items {
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-between;
}

.big_image
{
  height:25vh;

}

.middle_image
{
  height:22.5vh;
}

.little_image
{
  height:20vh;
}

@media (max-width: 500px) {

  .big_image
  {

    height:15vh;
  }

  .middle_image
  {
    height:12.5vh;
  }

  .little_image
  {
    height:10vh;
  }


}



</style>