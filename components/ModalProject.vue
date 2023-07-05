<template>
  <dialog :id="'modal_' + data.id" class="modal">
    <form method="dialog" class="modal-box w-11/12 max-w-full relative">
      <div class="flex justify-center flex-col items-center">
        <h1 class="font-bold text-2xl my-4">Detailed Project 1</h1>
        <div class="grid grid-cols-3 gap-8 p-8">
          <div class="max-h-[65vh] overflow-auto col-span-2">
            <img  alt="project-image" :src="data.image"/>
          </div>
          <div class="col-span-1">
            <h2 class="my-4"><b>Title: </b>{{ data.title }}</h2>
            <div class="my-4">
              <h2 class="font-bold">Description:</h2>
              <P>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</P>
            </div>
            <P>Type: loodksk</P>
            <P>lenguages: loodksk</P>
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