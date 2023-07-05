<template>
  <nav class="style-navbar">
    <div class="flex gap-x-5 items-center">
      <div class="flex gap-x-5">
        <nuxt-link to="/#about" class="cursor-pointer hover:underline text-primary-content">ABOUT</nuxt-link>
        <nuxt-link to="/#portfolio" class="cursor-pointer hover:underline text-primary-content">PORTFOLIO</nuxt-link>
        <nuxt-link to="/#contact" class="cursor-pointer hover:underline text-primary-content">CONTACT</nuxt-link>
      </div>
      <div class="dropdown dropdown-end dropdown-button">
        <label tabindex="0" class="btn btn-ghost text-primary-content m-1">
          <swatch-icon class="w-6"></swatch-icon>
        </label>
        <ul tabindex="0" class="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="theme of themes" :key="theme" @click="colorMode.preference = theme"><a class="capitalize">{{ theme }}</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {SwatchIcon} from '@heroicons/vue/24/outline'

const colorMode = useColorMode();
const themes = [
  'dark',
  'emerald',
  'lofi',
  'night',
  'winter',
];
</script>