<script setup lang="ts">
import { ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import { loginInputData } from '@/parkSafe/helpers/loginData'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

ButtonForm
interface FormData {
  email: string
  id: string
  label: string
  username: string
  password: string
  passwordConfirm: string
}

const router = useRouter()

const goHome = () => {
  router.push({ path: '/home', state: { refresh: true } })
}

const formData = ref<FormData>({
  email: '',
  id: '',
  label: '',
  username: '',
  password: '',
  passwordConfirm: ''
})

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  token: ''
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

const handleButtonClick = async () => {
  console.log('Me hicierón click')
  await axios
    .post(`${BASE_URL.value}/auth/login`, {
      id: formData.value.id,
      password: formData.value.password
    })
    .then((res) => {
      const user = res.data.user
      const token = res.data.token
      console.log(user)
      userSession.value = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: token
      }

      console.log('userSessionAxios', userSession.value)
      goHome()
    })
    .catch((error) => {
      console.log(error)
    })
}

watch(
  formData.value,
  (value) => {
    console.log(value)
  },
  { deep: true }
)

watch(
  userSession,
  (value) => {
    window.localStorage.setItem('userSession', JSON.stringify(value))
    console.log(userSession.value)
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

  <div class="flex justify-center items-center mt-[50px]">
    <ButtonForm
      label="Acceder"
      buttonType="inputForm"
      size="standard-form"
      @click="handleButtonClick"
    />
  </div>
</template>
