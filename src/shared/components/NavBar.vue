<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'
import { useRouter } from 'vue-router'

interface Props {
  title?: string
  links: RouterLink[]
}

withDefaults(defineProps<Props>(), {
  title: 'CompoApp'
})

const router = useRouter()

const goToHome = () => {
  router.push({
    path: '/'
  })
}
</script>

<template>
  <nav class="bg-psAppBlue px-5 flex justify-between items-center p-1 h-[60px]">
    <div class="flex gap-[5px] cursor-pointer select-none" @click="goToHome">
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="25" height="25" />
      <a class="text-psAppYellow text-xl font-bold cursor-pointer">{{ title }}</a>
    </div>

    <div class="flex text-sm gap-[10px] font-bold tracking-widest">
      <RouterLink class="text-grayLink px-[10px]" to="/login">Acceso</RouterLink>
      <RouterLink class="text-white px-[10px]" to="/register">Registrate</RouterLink>
    </div>
  </nav>
</template>
