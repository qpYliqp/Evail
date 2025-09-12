<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
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
    const images_path = ref<string[]>([]);
    onMounted(() => {
      loadImagesFromCarousel();
    });

    const loadImagesFromCarousel = () => {
      images_path.value.push("/images/carousel/carousel-image-1.jpg");
      images_path.value.push("/images/carousel/carousel-image-2.jpg");
      images_path.value.push("/images/carousel/carousel-image-3.jpg");
    };

    return { modules: [Navigation], images_path };
  },
});
</script>

<template>
  <div class="carousel-container">
    <swiper
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2'
      }"
      :slides-per-group="1"
      :slides-per-view="1"
      :loop="true"
      style="width: 100%; position: relative;"
    >
      <div class="swiper-button-prev swiper-button-prev-2"></div>
      <div class="swiper-button-next swiper-button-next-2"></div>
      <swiper-slide v-for="image in images_path" :key="image">
        <div class="carousel-slide">
          <img :src="image" :alt="`Image ${index + 1}`"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.carousel-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: black;
}

.carousel-slide {
  width: 100%;
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.swiper-button-next-2,
.swiper-button-prev-2 {
  position: absolute !important;
  width: auto !important;
  height: auto !important;
  margin-top: 0 !important;
  z-index: 10 !important;
  color: var(--primary-color);
  padding: 1.5rem;
}

.swiper-button-next-2 {
  right: 0.5rem;
  font-weight: bold;
}

.swiper-button-prev-2 {
  left: 0.5rem;
  font-weight: bold;
}
</style>
