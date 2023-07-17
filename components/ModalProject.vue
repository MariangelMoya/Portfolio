<template>
  <dialog :id="'modal_' + data.id" class="modal">
    <form method="dialog" class="modal-box p-4 sm:w-11/12 max-w-full relative">
      <div class="flex justify-center flex-col items-center">
        <h1 class="text-xl xs:text-2xl sm:text-3xl my-4 uppercase font-bold">{{ data.title }}</h1>
        <div class="xl:grid grid-cols-3 gap-8 sm:p-8">
          <div class="max-h-[65vh] overflow-auto col-span-2">
            <img  alt="project-image" :src="data.image"/>
          </div>
          <div class="col-span-1">
            <div class="my-4">
              <h2 class="font-bold sm:text-2xl mb-2">Description:</h2>
              <p class="sm:text-xl">{{ data.description }}</p>
            </div>
            <div class="my-4">
              <h2 class="font-bold sm:text-2xl mb-2">Type:</h2>
              <p class="sm:text-xl">{{ data.type }}</p>
            </div>
            <div v-show="data.languages.length > 0" class="my-4">
              <h2 class="font-bold sm:text-2xl mb-2">Languages:</h2>
              <p class="sm:text-xl">{{ data.languages }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-ghost absolute top-6 right-6 rounded-full w-12 h-12 p-2">
        <XMarkIcon/>
      </button>
    </form>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import Project from "~/types/Project";
import {XMarkIcon} from "@heroicons/vue/20/solid";

defineProps({
  data: {
    type: Object as PropType<Project>,
    required: true
  }
})
</script>