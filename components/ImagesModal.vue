<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50">
    <span class="absolute inset-0 cursor-pointer" @click.stop="$emit('close')"/>
    <div class="w-[500px]">
      <swiper
          :effect="'cards'"
          :grabCursor="true"
          auto-height
          :navigation="true"
          :modules="modules"
          class=""
      >
        <swiper-slide class="max-h-screen !overflow-auto py-8" v-for="image in images">
          <img class="w-full" alt="project-image" :src="image"/>
        </swiper-slide>
      </swiper>
    </div>
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
import {EffectCards, Navigation} from 'swiper';
import {PropType} from "@vue/runtime-core";

let modules = [EffectCards, Navigation];

const props = defineProps({
  images: Array as PropType<string[]>,
  show: {
    type: Boolean,
    default: false
  },
})

defineEmits(['close'])

watch(() => props.show, (show) => {
  let body = document.body

  if (show) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'auto'
  }
})
</script>
