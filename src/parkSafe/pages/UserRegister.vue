<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import { userRegisterInputData } from '@/parkSafe/helpers/userRegisterData'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

interface FormData {
  email: string
  id: string
  label: string
  name: string
  password: string
  passwordConfirm: string
}

const formData = ref<FormData>({
  email: '',
  id: '',
  label: '',
  name: '',
  password: '',
  passwordConfirm: ''
})

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  hasTicket: false,
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

const router = useRouter()

const goHome = () => {
  router.push({ path: '/' })
}

const successToast = () => {
  toast.success('Inicio de Sesion, exitoso !', {
    theme: 'colored',
    autoClose: 2000,
    onClose: goHome,
    position: 'bottom-center'
  }) // ToastOptions
}

const userLogin = async () => {
  const loginData = (
    await axios.post(`${BASE_URL.value}/auth/login`, {
      id: formData.value.id,
      password: formData.value.password
    })
  ).data
  console.log(loginData)
  const user = loginData.user
  const token = loginData.token
  console.log(user)
  userSession.value = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    hasTicket: user.hasTicket,
    token: token
  }
  successToast()
}

const registerNewUser = async () => {
  console.log('Hola', BASE_URL.value)
  console.log('Me hicierón click')

  try {
    const userData = (await axios.post(`${BASE_URL.value}/auth/register`, formData.value)).data
    console.log('UserData =>>', userData)
    await userLogin()
  } catch (error) {
    console.log('Error registrando al nuevo usuario:', error)
  }
}

const registerNewCollaborator = async () => {
  console.log('Hola', BASE_URL.value)
  console.log('Me hicierón click, soy ADMIN')

  try {
    const newCollaborator = (
      await axios.post(`${BASE_URL.value}/collaborator/register`, {
        email: formData.value.email,
        id: formData.value.id,
        name: formData.value.name,
        password: formData.value.password,
        role: 'COLLABORATOR'
      })
    ).data

    console.log(newCollaborator)
  } catch (error) {
    console.log('Error registrando un nuevo empleado: ', error)
  }
}

const handleButtonClick = () => {
  console.log(userSession.value.role === 'ADMIN')
  if (userSession.value.role === 'ADMIN') {
    registerNewCollaborator()
  } else {
    registerNewUser()
  }
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

onMounted(() => {
  const storedData = localStorage.getItem('userSession')
  userSession.value = storedData
    ? JSON.parse(storedData)
    : {
        name: '',
        id: '',
        email: '',
        role: '',
        hasTicket: false,
        token: ''
      }

  console.log(userSession.value.role)
})

onMounted(() => {})
</script>

<template>
  <ParkSafeLayout title="Registro" />
  <section class="px-5">
    <InputForm
      v-model="formData[key]"
      v-for="(userRegister, key) in userRegisterInputData"
      :key="key"
      :id="userRegister.label"
      :name="userRegister.label"
      :label="userRegister.label"
      :placeholder="userRegister.placeholder"
      :type="inputGetType(userRegister.label, userRegister.type)"
      :labelFor="userRegister.label"
      :icon="userRegister.label.toUpperCase().includes('PASSWORD') ? true : false"
      @change-type="onChangeType"
    />
  </section>

  <div class="flex justify-center items-center mt-[50px]">
    <ButtonForm
      label="Registrar"
      buttonType="inputForm"
      size="standard-form"
      @click="handleButtonClick"
    />
  </div>
</template>
