<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from '@/router/list-routes'
</script>

<template>
  <div class="h-screen bg-psAppBlue flex flex-col">
    <header>
      <div>
        <NavBar title="ParkSafe" :links="routerLinks" />
      </div>
    </header>
    <RouterView class="flex items-center justify-center" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
