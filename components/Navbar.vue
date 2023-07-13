<template>
  <nav class="style-navbar">
    <div class="dropdown justify-start flex w-full md:hidden">
      <label tabindex="0" class="btn btn-primary btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/#header" >Home</a></li>
        <li><a href="/#about" >About</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li>
          <details>
            <summary>Themes</summary>
            <ul>
              <li v-for="theme of themes" :key="theme" @click="colorMode.preference = theme"><a class="capitalize">{{ theme }}</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    <div class="md:grid hidden grid-cols-3 justify-items-center justify-between items-center">
      <div class="flex justify-self-start">
        <a href="/#header" class="cursor-pointer text-sm lg:text-xl text-primary-content">Mariangel Moya</a>
      </div>
      <div class="flex gap-x-5 items-center text-sm lg:text-lg">
        <div class="flex gap-x-5">
          <a href="/#about" class="cursor-pointer hover:underline text-primary-content">ABOUT</a>
          <a href="/#portfolio" class="cursor-pointer hover:underline text-primary-content">PORTFOLIO</a>
          <a href="/#contact" class="cursor-pointer hover:underline text-primary-content">CONTACT</a>
        </div>
      </div>

        <div class="justify-self-end">
        <div class="dropdown dropdown-end dropdown-button">
          <label tabindex="0" class="btn btn-ghost normal-case tooltip before:bg-base-300 after:border-b-base-300 before:text-base-content tooltip-bottom inline-flex text-primary-content px-2 m-1 min-h-0 h-8" data-tip="Themes">
            <swatch-icon class="w-6"></swatch-icon>
          </label>
          <ul tabindex="0" class="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="theme of themes" :key="theme" @click="colorMode.preference = theme"><a class="capitalize">{{ theme }}</a></li>
          </ul>
        </div>

        <div class="dropdown dropdown-end dropdown-button">
          <label tabindex="0" class="btn btn-ghost normal-case tooltip before:bg-base-300 after:border-b-base-300 before:text-base-content tooltip-bottom inline-flex text-primary-content px-2 m-1 min-h-0 h-8" data-tip="Languages">
            <LanguageIcon class="w-6"></LanguageIcon>
          </label>
          <ul tabindex="0" class="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="theme of themes" :key="theme" @click="colorMode.preference = theme"><a class="capitalize">{{ theme }}</a></li>
          </ul>
        </div>
      </div>
      </div>

  </nav>
</template>
<script setup lang="ts">
import {SwatchIcon, LanguageIcon} from '@heroicons/vue/24/outline'

const colorMode = useColorMode();
const themes = [
  'dark',
  'emerald',
  'lofi',
  'night',
  'winter',
];
</script>