<template>
  <div class="content bg-red-800 items-center justify-center flex px-10 lg:px-20">
    <div class="flex justify-center flex-col items-center">
      <h2 class="text-2xl text-center">Hello, I'm</h2>
      <h1 class="font-bold text-5xl text-primary py-2 text-center">Mariangel Moya</h1>
      <h2 class="text-2xl text-center">I'm a Front end developer </h2>
      <button class="btn btn-primary my-8 text-center">Download cv<folder-arrow-down-icon class="w-5"></folder-arrow-down-icon></button>
    </div>
<!--    <div class="rounded-full bg-primary w-80 h-80 overflow-hidden">-->
<!--      <img class="w-80 h-80 scale-[1.12] pr-5" alt="picture of me :)" src="/mariangel-circle.png">-->
<!--    </div>-->
  </div>

</template>
<script setup lang="ts">
import {FolderArrowDownIcon} from '@heroicons/vue/24/outline'
</script>