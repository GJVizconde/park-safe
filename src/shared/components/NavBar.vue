<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'

interface Props {
  title?: string
  links: RouterLink[]
}

withDefaults(defineProps<Props>(), {
  title: 'CompoApp'
})
</script>

<template>
  <nav class="bg-psAppBlue px-5 flex justify-between items-center p-1 h-[60px]">
    <div class="flex gap-[5px]">
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="25" height="25" />
      <a href=""
        ><span class="text-psAppYellow text-xl font-bold">{{ title }}</span></a
      >
    </div>

    <div class="flex text-sm gap-5 font-bold tracking-widest">
      <RouterLink class="text-grayLink" to="/login">Login</RouterLink>
      <RouterLink class="text-white" to="/register">Register</RouterLink>
    </div>
  </nav>
</template>
