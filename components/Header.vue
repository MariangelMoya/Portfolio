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
</template>
<script setup lang="ts">
import {FolderArrowDownIcon} from "@heroicons/vue/24/outline";
</script>