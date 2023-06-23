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
          <div class="grid grid-rows-2 grid-flow-col gap-4">
            <Bubble title="HTML" src="/html.png"></Bubble>
            <Bubble title="CSS" src="/css.png"></Bubble>
            <Bubble title="JS" src="/js.png"></Bubble>
            <Bubble title="TailwindCSS" src="/tcss.png"></Bubble>
            <Bubble title="VUE" src="/vue.png"></Bubble>
            <Bubble title="TypeScript" src="/ts.png"></Bubble>
          </div>
        </div>
      </div>
    </div>

  </Teleport>
</template>
<script setup lang="ts">
import {FolderArrowDownIcon} from '@heroicons/vue/24/outline'
</script>