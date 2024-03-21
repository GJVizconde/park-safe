<script setup lang="ts">
import { ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import { loginInputData } from '@/parkSafe/helpers/loginData'
import ButtonForm from '@/shared/components/ButtonForm.vue'

ButtonForm
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

const handleButtonClick = () => {
  console.log('Me hicierón click')
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
  <ParkSafeLayout title="Acceso" />
  <section class="px-5">
    <InputForm
      v-model="formData[key]"
      v-for="(userLogin, key) in loginInputData"
      :id="userLogin.label"
      :name="userLogin.label"
      :key="key"
      :label="userLogin.label"
      :placeholder="userLogin.placeholder"
      :type="inputGetType(userLogin.label, userLogin.type)"
      :labelFor="userLogin.label"
      :icon="userLogin.label.toUpperCase().includes('PASSWORD') ? true : false"
      @change-type="onChangeType"
    />
  </section>

  <div class="h-screen flex justify-center items-center">
    <ButtonForm
      label="Acceder"
      buttonType="inputForm"
      size="standard-form"
      @click="handleButtonClick"
    />
  </div>
</template>
