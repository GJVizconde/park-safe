<script setup lang="ts">
import type { User } from '@/parkSafe/pages/GenerateTicket.vue'

interface Props {
  label?: string
  dataOptions: any[] | undefined | User[]
  placeholder?: string
  typeData?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Select'
})

const model = defineModel()
</script>

<template>
  <div class="mt-[30px]">
    <label :for="label" class="block text-left mb-[7px] text-white">{{ props.label }}</label>
    <div>
      <select
        class="block w-full h-[42px] text-lg py-[3px] px-[10px] border rounded-md focus:outline-none bg-ticketBg"
        v-bind="$attrs"
        v-model="model"
        :id="label"
      >
        <option class="bg-ticketBg" value="" disabled default selected>
          {{ props.placeholder }}
        </option>
        <option
          v-if="typeData === 'user'"
          v-for="(data, key) in dataOptions"
          :key="key"
          class="bg-ticketBg"
          :value="data"
        >
          {{ `${data.id + ' ' + data.name}` }}
        </option>
        <option
          v-if="typeData === 'vehicle'"
          v-for="(data, key) in dataOptions"
          :key="key"
          class="bg-ticketBg"
          :value="data.id"
        >
          {{ `${data.licensePlate + ' ' + data.description}` }}
        </option>
        <option
          v-if="typeData === 'parking'"
          v-for="(data, key) in dataOptions"
          :key="key"
          class="bg-ticketBg"
          :value="data.id"
        >
          <span>{{ data.id }}</span> - <span style="color: green">Disponible</span>
        </option>
      </select>
    </div>
  </div>
</template>
