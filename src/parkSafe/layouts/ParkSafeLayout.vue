<script setup lang="ts">
import CompanyImage from '@/shared/components/CompanyImage.vue'

interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <CompanyImage />
  <h1 class="text-psAppYellow text-[32px] mt-11 font-bold tracking-wide text-center w-full">
    {{ title }}
  </h1>
</template>
