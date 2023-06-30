<template>
  <div id="about" class="flex flex-col items-center justify-center">
    <h2 class="text-base-content text-3xl font-bold mt-20">ABOUT</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-20"/>
    <div class="grid container mx-auto grid-cols-2 px-20 gap-32 mb-16 items-center">
      <div class="flex flex-col items-center">
        <div class="rounded-full bg-primary w-80 h-80 overflow-hidden me-shadow">
          <img class="w-80 h-80 scale-[1.12] pr-5" alt="picture of me :)" src="/mariangel-circle.png">
        </div>
        <p class="mt-8 text-center max-w-[440px]">Hi, mi name is <b>Mariangel Moya</b>.<br/>
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

  <div id="portfolio" class="flex flex-col items-center justify-center bg-base-200 pt-10 mb-10 relative">
    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="text-base-100 absolute top-0 left-0">
      <path d="M0 0 L50 100 L100 0 Z" fill="currentColor" stroke="currentColor"></path>
    </svg>
    <h2 class="text-base-content text-3xl font-bold mt-20">PORTFOLIO</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-5"/>
    <div class="grid container mx-auto">
      <div class="flex justify-center items-center">
        <button class="button-section-projects ">UI & UX</button>
        <button class="button-section-projects ">Developments</button>
      </div>
    </div>
    <div class="flex gap-8 my-12">
      <!--      <div class="mockup-phone">-->
      <!--        <div class="camera"></div>-->
      <!--        <div class="display overflow-hidden">-->
      <!--          <div class="artboard artboard-demo phone-1 justify-start !w-[300px]">-->
      <!--            <img src="/Home.png" class="w-full" alt="home">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <PortfolioCard v-for="project in data" :data="project">
      </PortfolioCard>
    </div>

    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="text-base-200 absolute top-full left-0">
      <path d="M0 0 L50 100 L100 0 Z" fill="currentColor" stroke="currentColor"></path>
    </svg>
  </div>

  <Contact />

  <Footer />
</template>
<script setup lang="ts">
import Project from "~/types/Project";

definePageMeta({
  layout: 'home',
})

// const e = await useFetch('/api', {
//   method: 'POST' as any    le pongo el metodo que me interesa
// })

const { data } = await useFetch<Project[]>('http://127.0.0.1:8000/api/projects')
</script>