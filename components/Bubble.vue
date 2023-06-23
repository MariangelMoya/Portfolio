<template>
  <div class="relative animation-upper-down w-40 h-40 flex justify-center items-center">
    <div class="flex justify-center items-center bg-base-100">
      <div class="flex items-center flex-col">
        <a>{{ title }}</a>
        <img class="w-20" :alt="title" :src="src"/>
      </div>
      <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
})
</script>