<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import SelectFom from '@/shared/components/SelectForm.vue'
// import users from '@/../public/data/usersData.json'
import axios from 'axios'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

interface Vehicle {
  id: string
  licensePlate: string
  description: string
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  role: 'USER' | 'COLLABORATOR' | 'ADMIN'
  vehicles: Vehicle[]
}

interface FormData {
  userId: string
  vehicleId: string
  parkingPlace: string
  collaboratorId: string
}

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  token: ''
})

const formData = ref<FormData>({
  userId: '',
  vehicleId: '',
  parkingPlace: '',
  collaboratorId: ''
})

const users = ref<User[]>([
  {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: 'USER',
    vehicles: []
  }
])

const model = defineModel()

const user = ref<User>()
const vehicles = ref<Vehicle[]>()
const dataTicket = ref()

const handleButtonClick = () => {
  console.log('Me hicierón click')
  generateTicket(formData.value)
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

const generateTicket = async (body: FormData) => {
  try {
    const ticket = (await axios.post(`${BASE_URL.value}/ticket/`, body)).data
    console.log(ticket)
    dataTicket.value = ticket
  } catch (error) {
    console.error('Error al generar el ticket: ', error)
  }
}

const onSelectChange = () => {
  console.log('Se hizo un cambioo')
}

onMounted(async () => {
  await getAllUsers()
})

onMounted(() => {
  const storedData = localStorage.getItem('userSession')
  userSession.value = storedData
    ? JSON.parse(storedData)
    : {
        name: '',
        id: '',
        email: '',
        role: '',
        token: ''
      }

  // console.log(userSession.value.role)
})

watch(
  formData.value,
  (value) => {
    console.log('FormData has changed', value)
  },
  { deep: true }
)

watch(
  model,
  (value: any) => {
    console.log('NUEVO valor de model ==>>', value)
    console.log('NUEVO valor de value.vehicles ==>>', value.vehicles)
    formData.value.userId = value.id
    vehicles.value = value.vehicles
    formData.value.collaboratorId = userSession.value.id
  },
  { deep: true }
)
</script>

<template>
  <ParkSafeLayout title="Generar Ticket" />
  <section class="px-5">
    <SelectFom
      v-model="model"
      @change="onSelectChange"
      label="Usuario"
      :data-options="users"
      typeData="user"
    />
    <SelectFom
      v-model="formData.vehicleId"
      @change="onSelectChange"
      label="Placa"
      :data-options="vehicles"
      typeData="vehicle"
    />

    <InputForm
      v-model="formData.parkingPlace"
      id="Place"
      name="Place"
      label="Lugar"
      placeholder="Ingresar Lugar"
      type="text"
    />
    <InputForm
      v-model="formData.collaboratorId"
      id="collaborator"
      name="collaborator"
      label="Empleado"
      placeholder="Colaborador"
      :value="userSession?.name"
      type="text"
      disabled
      class="text-gray-500"
    />
  </section>

  <div class="flex justify-center items-center mt-[50px]">
    <ButtonForm
      label="Generar ticket"
      buttonType="inputForm"
      size="standard-form"
      @click="handleButtonClick"
    />
  </div>
</template>
