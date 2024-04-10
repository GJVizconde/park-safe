<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import axios from 'axios'
import AccordionTickets from '../components/AccordionTickets.vue'
import { useRouter } from 'vue-router'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

interface User {
  id: number
  name: string
}

interface Vehicle {
  id: string
  licensePlate: string
  description: string
}

interface ParkingReservation {
  id: string
  checkIn: string
  checkOut: string | null
  isDelete: boolean
  userId: number
  vehicleId: string
  parkingId: string
  user: User
  collaborators: { name: string }[]
  vehicle: Vehicle
  checkInFormatted: string
}

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

const router = useRouter()

const tickets = ref<ParkingReservation[]>()

const getActiveTickets = async () => {
  try {
    const allTickets: ParkingReservation[] = (
      await axios.get(`${BASE_URL.value}/ticket/?active=true`)
    ).data

    tickets.value = allTickets
    console.log(tickets.value)
  } catch (error) {
    console.error('Error al obtener los tickets activos:', error)
  }
}

const successToast = () => {
  toast.success(`Se le dió salida al vehículo`, {
    theme: 'colored',
    autoClose: 2000,
    position: 'bottom-center'
  }) // ToastOptions
}

const handleButtonClick = async (quit_id: string) => {
  const ticketDelected = (
    await axios.patch(
      `${BASE_URL.value}/ticket/${quit_id}`,
      {},
      {
        headers: {
          'X-Timezone-Offset': new Date().getTimezoneOffset()
        }
      }
    )
  ).data
  console.log(ticketDelected)
  successToast()

  await getActiveTickets()
}

onMounted(async () => {
  await getActiveTickets()
})

watch(formData.value, (_value) => {}, { deep: true })
</script>

<template>
  <ParkSafeLayout title="Control Tickets" />
  <section class="px-5 mt-10">
    <div
      class="flex flex-col m-auto min-w-[271px] w-3/4 pb-[20px] md:hidden"
      v-if="tickets?.length"
    >
      <div v-for="(ticket, key) in tickets" class="w-full">
        <AccordionTickets
          :id="String(ticket.user.id)"
          :name="ticket.user.name"
          view_more="ver mas"
          licensePlate_title="Placa Vehículo:"
          :licensePlate="ticket.vehicle.licensePlate"
          description_title="Descripción:"
          :description="ticket.vehicle.description"
          time_title="Hora de entrada:"
          :time="ticket.checkInFormatted"
          collaborator_title="Empleado:"
          :collaborator="ticket.collaborators[0].name"
          quit_title="Dar Salida"
          :quit_id="ticket.id"
          @quitVehicle="handleButtonClick"
          :class="[
            ' border-t-0',
            {
              'rounded-tr-lg rounded-tl-lg border-t  ': ticket === tickets[0],
              'rounded-br-lg rounded-bl-lg ': ticket === tickets[tickets.length - 1]
            }
          ]"
        />
      </div>
    </div>
    <h1 v-else class="text-center text-2xl font-bold text-white">
      No hay vehículos en este momento en el estacionamiento
    </h1>
  </section>
</template>
