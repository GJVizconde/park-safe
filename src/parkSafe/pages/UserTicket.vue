<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import ticketExample from '@/../public/data/ticketExample.json'

import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import axios from 'axios'

const BASE_URL = ref(import.meta.env.VITE_BASE_URL)

let ticketData = ref([
  {
    name: '',
    collaborator: '',
    vehicle_id: '',
    place: '',
    current_date: ''
  }
])

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  token: ''
})

const getTicket = async (id: number) => {
  try {
    const dataTicket = (await axios.get(`${BASE_URL.value}/ticket/userTicket?id=${id}`)).data
    console.log(dataTicket)
    ticketData.value = [
      {
        name: dataTicket.user.name,
        collaborator: dataTicket?.collaborators[0]?.name,
        vehicle_id: dataTicket.vehicle.licensePlate,
        place: dataTicket.parkingId,
        current_date: dataTicket.checkIn
      }
    ]
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
}

onMounted(async () => {
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

  console.log('User session:', userSession.value)

  // Llamar a getTicket después de obtener los datos de la sesión del usuario
  await getTicket(Number(userSession.value.id))
})

watch(
  userSession.value,
  async (value) => {
    await getTicket(Number(value.id))
  },
  { deep: true }
)
</script>

<template>
  <ParkSafeLayout title="User Ticket" />

  <section class="flex flex-col gap-8 items-center justify-center mt-10 px-11">
    <div v-if="ticketData[0].name !== ''">
      <div
        class="grid grid-cols-2 gap-y-5 bg-ticketBg w-full p-7 rounded-2xl items-center justify-center"
        v-for="(ticket, key) in ticketData"
        :key="key"
      >
        <p class="bg-ticketBg font-bold">Cliente:</p>
        <p class="bg-ticketBg">{{ ticket.name }}</p>
        <p class="bg-ticketBg font-bold">Empleado:</p>
        <p class="bg-ticketBg">{{ ticket.collaborator }}</p>
        <p class="bg-ticketBg font-bold">Vehiculo:</p>
        <p class="bg-ticketBg">{{ ticket.vehicle_id }}</p>
        <p class="bg-ticketBg font-bold">Puesto:</p>
        <p class="bg-ticketBg">{{ ticket.place }}</p>
        <p class="bg-ticketBg font-bold">Fecha:</p>
        <p class="bg-ticketBg">{{ ticket.current_date }}</p>
      </div>
    </div>

    <h1 v-else class="text-center text-2xl font-bold text-white">
      No tienes ningún vehículo en el estacionamiento
    </h1>
  </section>
</template>
