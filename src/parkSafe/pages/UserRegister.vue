<script setup lang="ts">
import { ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import { userRegisterInputData } from '@/parkSafe/helpers/userRegisterData'

interface FormData {
  email: string
  id: string
  label: string
  username: string
  password: string
  passwordConfirm: string
}

const formData = ref<FormData>({
  email: '',
  id: '',
  label: '',
  username: '',
  password: '',
  passwordConfirm: ''
})

let newTypePassword = ref('password')
let newTypeConfirm = ref('password')

const onChangeType = (newType: string, label: string) => {
  label === 'Password' ? (newTypePassword.value = newType) : (newTypeConfirm.value = newType)
}

const inputGetType = (label: string, type: string): string => {
  if (label === 'Password') {
    return newTypePassword.value
  } else if (label === 'Confirmar Password') {
    return newTypeConfirm.value
  } else {
    return type
  }
}

watch(
  formData.value,
  (value) => {
    console.log(value)
  },
  { deep: true }
)
</script>

<template>
  <ParkSafeLayout title="Registro" />
  <section class="px-5">
    <InputForm
      v-model="formData[key]"
      v-for="(userRegister, key) in userRegisterInputData"
      :id="userRegister.label"
      :name="userRegister.label"
      :key="key"
      :label="userRegister.label"
      :placeholder="userRegister.placeholder"
      :type="inputGetType(userRegister.label, userRegister.type)"
      :labelFor="userRegister.label"
      :icon="userRegister.label.toUpperCase().includes('PASSWORD') ? true : false"
      @change-type="onChangeType"
    />
  </section>
</template>
