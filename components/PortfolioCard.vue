<template>
  <div class="bg-base-100 rounded p-4 group">
    <div class="w-[380px] relative h-[300px] overflow-hidden rounded">
      <img alt="project-image" class="group-hover:scale-110 transition" :src="data.image_thumb"/>
      <div class="absolute cursor-pointer transition items-center justify-center z-0 inset-0 bg-gray-400/30 flex scale-0 group-hover:scale-100" @click="$emit('openModal')" >
        <button class="rounded-full bg-primary flex items-center justify-center w-12 h-12">
          <PlusIcon class="w-8 h-8 stroke-primary-content"></PlusIcon>
        </button>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="my-6">
        <h2 class="font-bold">{{ data.title }}</h2>
        <p>{{ data.description }}</p>
      </div>
      <button :onclick="'modal_' + data.id + '.showModal()'" class="flex cursor-pointer transition group-hover:bg-primary rounded-full bg-base-200 justify-center items-center w-8 h-8">
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