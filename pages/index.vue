<template>
  <div class="h-screen items-center justify-center flex px-10 lg:px-20">
    <div class="flex justify-center flex-col items-center">
      <h2 class="text-2xl text-center">Hello, I'm</h2>
      <h1 class="font-bold text-5xl text-primary py-2 text-center">Mariangel Moya</h1>
      <h2 class="text-2xl text-center">I'm a Front end developer </h2>
      <button class="btn btn-primary my-8 text-center">Download cv
        <folder-arrow-down-icon class="w-5"></folder-arrow-down-icon>
      </button>
    </div>
  </div>
  <Teleport to="#afterNav">
    <div id="about" class="flex flex-col items-center justify-center">
      <h2 class="text-base-content text-3xl font-bold mt-20">ABOUT</h2>
      <hr class="bg-base-content h-[4px] w-[70px] mb-20"/>
      <div class="grid container mx-auto grid-cols-2 px-20 gap-32">
        <div class="flex flex-col items-center">
          <div class="rounded-full bg-primary w-80 h-80 overflow-hidden">
            <img class="w-80 h-80 scale-[1.12] pr-5" alt="picture of me :)" src="/mariangel-circle.png">
          </div>
          <p class="my-5 text-center">Hi, mi name is Mariangel Moya.<br/>
            i’m a trainee developer.
            I'm very interested in the front end.<br/>
            Currently, I study and train on my own
            and seek to enter the workforce in the world of web development.</p>
        </div>
        <div class="flex flex-col">
          <div class="flex gap-10 mb-3">
            <img alt="css-logo" src="/HTML5_logo.svg.png" class="w-10"/>
            <p>junior</p>
          </div>
          <div class="flex gap-10 mb-3">
            <img alt="css-logo" src="/css_logo.svg.png" class="w-10"/>
            <p>junior</p>
          </div>
          <div class="flex gap-10 mb-3">
            <img alt="css-logo" src="/Js-Logo.png" class="w-10"/>
            <p>junior</p>
          </div>
          <div class="flex gap-10 mb-3">
            <img alt="css-logo" src="/TypeScript-logo.png" class="w-10"/>
            <p>junior</p>
          </div>
          <div class="flex gap-10 mb-3">
            <img alt="css-logo" src="/Vue.js_Logo_2.svg_bg_transparent.png" class="w-10"/>
            <p>junior</p>
          </div>
          <div class="flex gap-10 mb-3">
            <img alt="css-logo" src="/Tailwind_CSS_Logo.svg.png" class="w-10"/>
            <p>junior</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center min-h-screen bg-base-100">
      <div class="flex items-center flex-col">
        <a>HTML</a>
        <img class="w-20" alt="html" src="/HTML5_logo.svg.png"/>
      </div>
      <div class="bubble">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>


  </Teleport>
</template>
<script setup lang="ts">
import {FolderArrowDownIcon} from '@heroicons/vue/24/outline'
</script>