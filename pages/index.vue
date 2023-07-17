<template>
  <div id="about" class="flex flex-col items-center justify-center pt-10">
    <h2 class="text-base-content text-3xl font-bold mt-20 uppercase">{{ $t('about') }}</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-20"/>
    <div class="grid container mx-auto grid-cols-1 lg:grid-cols-2 px-5 xl:px-20 gap-32 mb-16 items-center">
      <div class="flex flex-col items-center">
        <div class="rounded-full bg-primary w-60 h-60 xs:w-80 xs:h-80 overflow-hidden me-shadow">
          <img class="w-60 h-60 scale-[1.13] pr-4 xs:w-80 xs:h-80 xs:scale-[1.12] xs:pr-5" alt="picture of me :)" src="/mariangel-circle.png">
        </div>
        <p class="mt-8 text-center max-w-[440px]">{{ $t('hi,_my_name_is' ) }} <b>Mariangel Moya</b>.<br/>
          {{ $t ('I\'m a front-end web developer with a passion for creating beautiful and engaging user experiences') }}<br/>
          {{$t ('I\'m currently available for freelance opportunities and excited to collaborate with innovative clients like you') }}<br/>
          {{$t ('Based in Italy, I offer my services to clients worldwide') }}</p>
      </div>
      <div class="flex flex-col">
        <h2 class="text-center text-2xl mb-10 font-bold">{{ $t('my_Skills') }}</h2>
        <div class="grid grid-cols-2 justify-items-center xl:grid-cols-3 gap-4">
          <Bubble title="HTML" src="/html.png"></Bubble>
          <Bubble title="CSS" src="/css.png"></Bubble>
          <Bubble title="JS" src="/js.png"></Bubble>
          <Bubble title="TailwindCSS" src="/tcss.png"></Bubble>
          <Bubble title="VUE" src="/vue.png"></Bubble>
          <Bubble title="TypeScript" src="/ts.png"></Bubble>
          <Bubble size="w-1/3" title="Figma" src="/figma.png"></Bubble>
          <Bubble title="Nuxt" src="/nuxt.png"></Bubble>
        </div>
      </div>
    </div>
  </div>

  <div id="portfolio" class="flex flex-col items-center justify-center bg-base-200 pt-10 mb-10 relative">
    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" xmlns="http://www.w3.org/2000/svg" class="text-base-100 absolute top-0 left-0">
      <path d="M0 0 L50 100 L100 0 Z" fill="currentColor" stroke="currentColor"></path>
    </svg>
    <h2 class="text-base-content text-3xl font-bold mt-20 uppercase">{{ $t('portfolio') }}</h2>
    <hr class="bg-base-content h-[4px] w-[70px] mb-5"/>
    <div class="grid container mx-auto">
      <div class="flex justify-center items-center">
        <button :class="type === 'UI & UX' ? 'active' : ''" @click="changeType('UI & UX')" class="button-section-projects">{{ $t('ui_&_ux') }}</button>
        <button :class="type === 'Development' ? 'active' : ''" @click="changeType('Development')" class="button-section-projects">{{ $t('developments') }}</button>
        <button :class="type === null ? 'active' : ''" @click="changeType(null)" class="button-section-projects">{{ $t('all') }}</button>
      </div>
    </div>

    <PortfolioSlider @openModal="showState = true" v-if="projects" :carts="projects.data"/>

    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" xmlns="http://www.w3.org/2000/svg" class="text-base-200 absolute top-full left-0">
      <path d="M0 0 L50 100 L100 0 Z" fill="currentColor" stroke="currentColor"></path>
    </svg>
  </div>

  <Contact />

  <Footer />
  <ImagesModal :show="showState" @close="showState = false" v-if="!pending" :images="projects?.data.map(e => e.image)"></ImagesModal>

</template>
<script setup lang="ts">
import Project from "~/types/Project";
import {computed, Ref} from "vue";
import Paginate from "~/types/Paginate";
import {useI18n} from "#imports";

definePageMeta({
  layout: 'home',
})

useHead({
  title: 'Mariangel Moya - Portfolio',
})

useSeoMeta({
  author: 'Mariangel Moya',
  description: 'description',
  ogType: 'website',
  ogUrl: '',
  title: 'Mariangel Moya - Portfolio',
  ogTitle: 'Mariangel Moya - Portfolio',
  ogSiteName: 'Mariangel Moya - Portfolio',
  ogDescription: 'Portfolio website by Mariangel Moya. \nYou can see a brief description of me, my skills, projects and contact me.',
  ogImage: 'Mariangel.ico',
  ogImageAlt: 'Mariangel Moya Icon'
})

const {locale} = useI18n()

const runtimeConfig = useRuntimeConfig()
// const e = await useFetch('/api', {
//   method: 'POST' as any    le pongo el metodo que me interesa
// })
type Types = 'UI & UX' | 'Development' | null

const type = ref<Types>(null)

const changeType = (value: Types) => {
  type.value = value
}

const url = computed(() => {
  let query = ''
  if (type.value) {
    query = '?filter[type]=' + type.value
  }
  return runtimeConfig.public.api + '/projects' + query
})

const { data, pending } = await useFetch<Paginate<Project>>(url, {
  server: false,
  headers: {
    'accept-language': locale.value
  }
})

const projects = data as Ref<Paginate<Project>|null>

let showState = ref(false)
</script>