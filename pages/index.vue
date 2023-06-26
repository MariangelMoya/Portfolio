<template>
  <div id="about" class="flex flex-col items-center justify-center">
    <h2 class="text-base-content text-3xl font-bold mt-20">ABOUT</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-20"/>
    <div class="grid container mx-auto grid-cols-2 px-20 gap-32">
      <div class="flex flex-col items-center">
        <div class="rounded-full bg-primary w-80 h-80 overflow-hidden me-shadow">
          <img class="w-80 h-80 scale-[1.12] pr-5" alt="picture of me :)" src="/mariangel-circle.png">
        </div>
        <p class="my-8 text-center max-w-[440px]">Hi, mi name is Mariangel Moya.<br/>
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
  <div id="projects" class="flex flex-col items-center justify-center">
    <h2 class="text-base-content text-3xl font-bold mt-20">PROJECTS</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-5"/>
    <div class="grid container mx-auto">
      <div class="flex justify-center items-center">
        <button class="button-section-projects ">UI & UX</button>
        <button class="button-section-projects ">Developments</button>
      </div>
    </div>
    <div class="flex gap-8 my-12">
      <div class="mockup-phone h-[500px]">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            <img src="/Home-cut.png" alt="home">
          </div>
        </div>
      </div>
      <div class="mockup-window border border-base-300 w-[470px] h-[500px]">
        <div class="flex justify-center px-4 py-16 border-t border-base-300">
          <img src="/Home-cut.png" alt="home">
        </div>
      </div>
      <div class="mockup-window border border-base-300 w-[470px] h-[500px]">
        <div class="flex justify-center px-4 py-16 border-t border-base-300">
          <img src="/travel_bootsrapStudio-cut.png" alt="home">
        </div>
      </div>
    </div>
  </div>
  <div id="contact" class="flex flex-col items-center justify-center">
    <h2 class="text-base-content text-3xl font-bold mt-20">CONTACT</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-5"/>
    <h3 class="my-10">Send me a message if you want to be in contact with me</h3>
    <input type="text" placeholder="Name" class="mb-2 bg-primary-content px-5 py-2 w-96"/>
    <input type="text" placeholder="Email" class="mb-2 bg-primary-content px-5 py-2 w-96"/>
    <textarea class="mb-2 bg-primary-content px-5 py-2 w-96">Message</textarea>
  </div>
  <div>

  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>