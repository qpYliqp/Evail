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
  <div class="flex flex-col items-center text-black">
    <swiper
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2'
      }"
      :slides-per-group="1"
      :slides-per-view="1"
      :loop="true"
      class="relative w-full"
    >
      <div class="swiper-button-prev swiper-button-prev-2 !absolute !left-2 !top-1/2 !h-auto !w-auto !-translate-y-1/2 p-6 text-primary font-bold"></div>
      <div class="swiper-button-next swiper-button-next-2 !absolute !right-2 !top-1/2 !h-auto !w-auto !-translate-y-1/2 p-6 text-primary font-bold"></div>
      <swiper-slide v-for="(image, index) in images_path" :key="image">
        <div class="flex h-[82vh] w-full items-center justify-center">
          <img :src="image" :alt="`Image ${index + 1}`" class="h-full w-full select-none object-cover" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
