<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label?: string
  type?: string
  labelFor?: string
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Input',
  type: 'text',
  icon: false
})

const emit = defineEmits(['changeType', 'click'])

let isOpenEye = ref(false)

const model = defineModel()

const classOpenEyePass = () => {
  if (props.icon === false) {
    return 'hidden'
  } else if (isOpenEye.value === false) {
    return 'w-5 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
  }
}

const onStatusEye = (value: string) => {
  isOpenEye.value = !isOpenEye.value
  onChangeType(value)
}

const onChangeType = (value: string) => {
  isOpenEye.value ? emit('changeType', 'text', value) : emit('changeType', 'password', value)
}
</script>

<template>
  <div class="mt-[30px]">
    <label :for="props.labelFor" class="block text-left mb-[7px] text-white">{{
      props.label
    }}</label>
    <div class="relative">
      <input
        :type="props.type"
        class="block w-full h-[42px] text-lg py-[3px] px-[10px] border rounded-md focus:outline-none"
        v-bind="$attrs"
        v-model="model"
      />
      <img
        :class="classOpenEyePass()"
        v-if="isOpenEye === false"
        src="/images/eye-solid.svg"
        @click="onStatusEye(props.label)"
      />
      <img
        class="w-5 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        v-else
        src="/images/eye-slash-solid.svg"
        @click="onStatusEye(props.label)"
      />
    </div>
  </div>
</template>
