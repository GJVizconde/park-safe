<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import NavBar from '@/shared/components/NavBar.vue'
import NavBar2 from './shared/components/NavBar2.vue'
import { routerLinks } from '@/router/list-routes'

const route = useRoute()

onMounted(() => {
  console.log(route.name)
})
</script>

<template>
  <div class="h-screen bg-psAppBlue flex flex-col">
    <header>
      <div>
        <NavBar v-if="route.name === 'home'" title="ParkSafe" :links="routerLinks" />
        <NavBar2 v-else title="ParkSafe" />
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
