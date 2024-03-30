<script setup lang="ts">
import { ref } from 'vue'
import ticketExample from '@/../public/data/ticketExample.json'

import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'

const ticketData = ref(ticketExample)
</script>

<template>
  <ParkSafeLayout title="User Ticket" />

  <section class="flex flex-col gap-8 items-center justify-center mt-7 px-5">
    <div
      class="grid grid-cols-2 gap-y-5 bg-ticketBg w-[500px] p-7 rounded-2xl items-center justify-center"
      v-for="(ticket, key) in ticketData"
      :key="key"
    >
      <p class="bg-ticketBg font-bold">Cliente:</p>
      <p class="bg-ticketBg">{{ ticket.username }}</p>
      <p class="bg-ticketBg font-bold">Empleado:</p>
      <p class="bg-ticketBg">{{ ticket.employee }}</p>
      <p class="bg-ticketBg font-bold">Vehiculo:</p>
      <p class="bg-ticketBg">{{ ticket.vehicle_id }}</p>
      <p class="bg-ticketBg font-bold">Fecha:</p>
      <p class="bg-ticketBg">{{ ticket.current_date }}</p>
    </div>
  </section>
</template>
