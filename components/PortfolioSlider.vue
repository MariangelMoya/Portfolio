<template>
  <div class="w-full container mx-auto">
    <swiper
        :grabCursor="true"
        auto-height
        :centered-slides="true"
        :breakpoints="breakpoints"
        :navigation="true"
        :modules="modules"
        class=""
    >
      <swiper-slide class="!w-fit !flex justify-center !overflow-auto py-8" v-for="cart in carts">
        <PortfolioCard @open-modal="$emit('openModal')" :data="cart">
        </PortfolioCard>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
// import required modules
import {Navigation, SwiperOptions} from 'swiper';

import {PropType} from "@vue/runtime-core";
import Project from "~/types/Project";

let modules = [Navigation];

const props = defineProps({
  carts: Array as PropType<Project[]>,
})

defineEmits(['openModal'])

let breakpoints = {
  '680': {
    centeredSlides: false,
    spaceBetween: "30",
    slidesPerView: 'auto',
  },
} as SwiperOptions['breakpoints']
</script>