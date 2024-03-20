<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'ParkSafe'
})

const router = useRouter()

const goToHome = () => {
  router.push({
    path: '/'
  })
}
</script>

<template>
  <nav class="bg-psAppBlue px-5 flex justify-center items-center p-1 h-[60px]">
    <div class="flex gap-[5px] cursor-pointer select-none" @click="goToHome">
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="25" height="25" />
      <a class="text-psAppYellow text-xl font-bold cursor-pointer">{{ title }}</a>
    </div>
  </nav>
</template>
