<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from "./views/HomeView.vue"

</script>

<template>
  <div>
  <HomeView />
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->
  </div>
  <RouterView />
</template>

<style scoped>

</style>
