<template>
  <nav class="style-navbar">
    <div class="flex gap-x-5 items-center">
      <div class="flex gap-x-5">
        <nuxt-link to="#about-me" class="cursor-pointer hover:underline hover:text-primary">ABOUT ME</nuxt-link>
        <nuxt-link to="#" class="cursor-pointer hover:underline hover:text-primary">PORTFOLIO</nuxt-link>
        <nuxt-link to="#" class="cursor-pointer hover:underline hover:text-primary">SKILLS</nuxt-link>
        <nuxt-link to="#" class="cursor-pointer hover:underline hover:text-primary">CONTACT</nuxt-link>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn m-1 border-base-100 bg-base-100">
          <swatch-icon class="w-6"></swatch-icon>
        </label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="theme of themes" :key="theme" @click="colorMode.preference = theme"><a>{{ theme }}</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {SwatchIcon} from '@heroicons/vue/24/outline'

const colorMode = useColorMode();
const themes = [
  'system',
  'dark',
  'emerald',
  'lofi',
  'night',
  'winter',
];
</script>