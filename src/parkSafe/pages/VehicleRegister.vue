<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import SelectFom from '@/shared/components/SelectForm.vue'
import axios from 'axios'
// import users from '@/../public/data/usersData.json'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

interface FormData {
  user_id: string
  licensePlate: string
  description: string
}

const formData = ref<FormData>({
  user_id: '',
  licensePlate: '',
  description: ''
})

const users = ref([''])

const getAllUsers = async () => {
  try {
    const dataUser = (await axios.get(`${BASE_URL.value}/user`)).data
    console.log(dataUser)
    users.value = dataUser
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
}

const registerVehicle = async (body: FormData) => {
  try {
    const register = (await axios.post(`${BASE_URL.value}/vehicle`, body)).data
    console.log(register)
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
}

const handleButtonClick = () => {
  registerVehicle(formData.value)
}

const onSelectChange = () => {
  console.log('Se ha cambiado la opcion del Select')
}

onMounted(async () => {
  await getAllUsers()
})

watch(
  formData.value,
  (value) => {
    console.log(value)
  },
  { deep: true }
)
</script>

<template>
  <ParkSafeLayout title="Registrar Vehiculo" />
  <section class="px-5">
    <SelectFom
      v-model="formData.user_id"
      @change="onSelectChange"
      label="Usuario"
      :data-options="users"
    />

    <InputForm
      v-model="formData.licensePlate"
      id="Placa"
      name="Placa"
      label="Placa"
      placeholder="Ingresar Placa"
      type="text"
    />

    <InputForm
      v-model="formData.description"
      id="Description"
      name="Description"
      label="Description"
      placeholder="Ingresar Descripción"
      type="text"
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
