<script lang="ts">

import {defineComponent, onMounted, ref} from "vue";

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

     const images_path = ref<string[]>([]);
     onMounted(() => {
       loadImagesFromCarousel()
       console.log(images_path.value)
     })
     const loadImagesFromCarousel = () => {

      images_path.value.push("/images/carousel/carousel-image-1.jpg")
      images_path.value.push("/images/carousel/carousel-image-2.jpg")
      images_path.value.push("/images/carousel/carousel-image-3.jpg")
     }

     return {modules:[Navigation],images_path}
   }


 })

</script>

<template>

  <div class="carousel-container">

    <swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-button-next-2' ,
          prevEl: '.swiper-button-prev-2'
          }"
        :slides-per-group="1"
        :slides-per-view="1"
        :loop="true"
        style="width: 100vw;position: relative;">

      <div class="swiper-button-prev swiper-button-prev-2"></div>
      <div class="swiper-button-next swiper-button-next-2"></div>
      <swiper-slide v-for="image in images_path" :key="image">
        <div
            style=" width: 100vw; height:82vh; display: flex; justify-content: center; align-items: center;">
          <img :src="image" style="width: 100%; height: 100%; object-fit: cover; user-select: none">
        </div>
      </swiper-slide>

    </swiper>

  </div>


</template>

<style scoped>

.carousel-container
{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: black;
}

.swiper-button-next-2, .swiper-button-prev-2 {
  position: absolute !important;
  width: auto !important;
  height: auto !important;
  margin-top: 0 !important;
  z-index: 10 !important;
  color: var(--primary-color);
  padding: 2vw;

}

.swiper-button-next-2 {
  right: 10px;
  font-weight: bold;
}

.swiper-button-prev-2 {
  left: 10px;
  font-weight: bold;
}

</style>