<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
