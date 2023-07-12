<template>
  <div class="relative animation-upper-down w-20 h-20 xs:w-40 xs:h-40 flex justify-center items-center">
    <div class="flex justify-center items-center bg-base-100">
      <div class="flex items-center flex-col">
        <a class="hidden xs:block">{{ title }}</a>
        <img class="w-10 xs:w-20" :alt="title" :src="src"/>
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