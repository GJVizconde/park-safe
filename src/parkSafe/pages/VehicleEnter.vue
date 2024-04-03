<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import SelectFom from '@/shared/components/SelectForm.vue'
// import users from '@/../public/data/usersData.json'
import axios from 'axios'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

interface FormData {
  userId: string
  licensePlates: string
  parkingPlace: string
  collaboratorId: string
}

const formData = ref<FormData>({
  userId: '',
  licensePlates: '',
  parkingPlace: '',
  collaboratorId: ''
})

const users = ref([''])

const handleButtonClick = () => {
  console.log('Me hicierón click')
}

const getAllUsers = async () => {
  try {
    const dataUsers = (await axios.get(`${BASE_URL.value}/user`)).data
    console.log(dataUsers)
    users.value = dataUsers
    console.log('users => ', users.value)
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
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
  <ParkSafeLayout title="Ingresar Vehículo" />
  <section class="px-5">
    <SelectFom
      v-model="formData.userId"
      @change="onSelectChange"
      label="Usuario"
      :data-options="users"
    />
    <SelectFom
      v-model="formData.licensePlates"
      @change="onSelectChange"
      label="Placa"
      :data-options="users"
    />

    <InputForm
      v-model="formData.parkingPlace"
      id="Place"
      name="Place"
      label="Lugar"
      placeholder="Ingresar Lugar"
      type="text"
    />
  </section>

  <div class="flex justify-center items-center mt-[50px]">
    <ButtonForm
      label="Ingresar"
      buttonType="inputForm"
      size="standard-form"
      @click="handleButtonClick"
    />
  </div>
</template>
