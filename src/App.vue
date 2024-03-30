<script setup lang="ts">
import { watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import NavBar from '@/shared/components/NavBar.vue'
import NavBar2 from './shared/components/NavBar2.vue'
import { routerLinks } from '@/router/list-routes'

const route = useRoute()

watch(
  () => route.name,
  (value) => {
    console.log(value)
  },
  { deep: true }
)
</script>

<template>
  <div class="flex flex-col pb-[80px]">
    <header>
      <div>
        <NavBar v-if="route.name === 'home'" title="ParkSafe" :links="routerLinks" />
        <NavBar2 v-else title="ParkSafe" />
      </div>
    </header>
    <RouterView />
  </div>
</template>
