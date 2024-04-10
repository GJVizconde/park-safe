<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import axios from 'axios'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import SelectFom from '@/shared/components/SelectForm.vue'
import goToRouter from '@/shared/utils/goTo'
import { useRouter } from 'vue-router'

// import users from '@/../public/data/usersData.json'

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
  parkingId: string
  collaboratorId: string
}

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  hasTicket: '',
  token: ''
})

const formData = ref<FormData>({
  userId: '',
  vehicleId: '',
  parkingId: '',
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

const router = useRouter()

const model = defineModel()

const vehicles = ref<Vehicle[]>()
const dataTicket = ref()
const disableStatus = ref<boolean>(true)
const disableUsers = ref<boolean>(true)
const availablePlaces = ref([''])

const handleButtonClick = () => {
  generateTicket(formData.value)
}

const successToast = () => {
  toast.success('El vehículo ha ingresado al estacionamiento!', {
    theme: 'colored',
    autoClose: 2000,
    onClose: () => {
      goToRouter(router, 'ticket-control')
    },
    position: 'bottom-center'
  }) // ToastOptions
}

const getAllUsers = async () => {
  try {
    const dataUsers = (await axios.get(`${BASE_URL.value}/user?ticket=false&hasVehicle=true`)).data
    users.value = dataUsers
    disableUsers.value = false
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
}

const generateTicket = async (body: FormData) => {
  try {
    const ticket = (
      await axios.post(`${BASE_URL.value}/ticket/`, body, {
        headers: {
          'X-Timezone-Offset': new Date().getTimezoneOffset()
        }
      })
    ).data

    dataTicket.value = ticket
    successToast()
  } catch (error) {
    console.error('Error al generar el ticket: ', error)
  }
}

const availableParkingPlaces = async () => {
  try {
    const places = (await axios.get(`${BASE_URL.value}/parking?available=true`)).data

    availablePlaces.value = places
  } catch (error) {
    console.log('Error al obtener el ticket: ', error)
  }
}

const onSelectChange = () => {}

onMounted(async () => {
  await getAllUsers()
  await availableParkingPlaces()
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
        hasTicket: false,
        token: ''
      }

  // console.log(userSession.value.role)
})

watch(formData.value, (_value) => {}, { deep: true })

watch(
  model,
  (value: any) => {
    formData.value.userId = value.id
    vehicles.value = value.vehicles
    formData.value.collaboratorId = userSession.value.id
    disableStatus.value = value?.vehicles[0]?.id ? false : true
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
      label="Usuario:"
      placeholder="Seleccionar Usuario"
      :data-options="users"
      typeData="user"
      :disabled="disableUsers ? true : false"
    />
    <SelectFom
      v-model="formData.vehicleId"
      @change="onSelectChange"
      label="Placa:"
      :data-options="vehicles"
      typeData="vehicle"
      :disabled="disableStatus"
    />
    <SelectFom
      v-model="formData.parkingId"
      @change="onSelectChange"
      label="Lugar de estacionamiento:"
      :data-options="availablePlaces"
      typeData="parking"
      :disabled="disableStatus"
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
