<template>
  <div id="header" class="h-screen items-center justify-center flex px-10 lg:px-20 relative">
    <FallingStars/>
    <div class="flex justify-center flex-col items-center z-10">
      <h2 class="text-2xl text-center">{{ $t('hello_i_am') }}</h2>
      <h1 class="font-bold text-5xl text-primary py-2 text-center">Mariangel Moya</h1>
      <h2 class="text-2xl text-center">{{ $t('who_i_am') }}</h2>
      <a href="/#about" class="btn btn-transparent my-8 text-center rounded-full w-14 p-2 h-14">
        <ChevronDownIcon class="w-8 h-8 stroke-primary "></ChevronDownIcon>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ChevronDownIcon} from "@heroicons/vue/24/outline";
</script>