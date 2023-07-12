<template>
  <div class="bg-base-100 rounded p-4 group w-11/12 xs:w-fit">
    <div class="overflow-hidden rounded xs:w-[380px] relative xs:h-[300px]">
      <img alt="project-image" class="group-hover:scale-110 transition" :src="data.image_thumb"/>
      <div class="absolute cursor-pointer transition items-center justify-center z-0 inset-0 bg-gray-400/30 hidden xs:flex scale-0 group-hover:scale-100">
        <button @click="$emit('openModal')"  class="rounded-full bg-primary flex items-center justify-center w-12 h-12">
          <PlusIcon class="w-8 h-8 stroke-primary-content"></PlusIcon>
        </button>
      </div>
    </div>
    <div class="flex flex-col xs:flex-row justify-between items-end xs:items-center">
      <div class="my-6 self-start">
        <h2 class="font-bold">{{ data.title }}</h2>
        <p>{{ data.description.slice(0,40) }}{{ data.description.length > 39 ? '...' : '' }}</p>
      </div>
      <button :onclick="'modal_' + data.id + '.showModal()'" class="flex cursor-pointer transition bg-primary md:bg-base-200 group-hover:bg-primary rounded-full justify-center items-center w-8 h-8">
        <ChevronRightIcon class="w-6 h-6 stroke-primary-content" />
      </button>
    </div>
  </div>
  <ModalProject :data="data"></ModalProject>
</template>
<script setup lang="ts">
import {ChevronRightIcon,PlusIcon} from '@heroicons/vue/24/outline'
import {PropType} from "@vue/runtime-core";
import Project from "~/types/Project";

defineProps({
  data: {
    type: Object as PropType<Project>,
    required: true
  }
})

defineEmits(['openModal'])
</script>