<script setup lang="ts">
import { ref, watch } from 'vue'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import SelectFom from '@/shared/components/SelectForm.vue'
import users from '@/../public/data/usersData.json'

ButtonForm
interface FormData {
  id: string
  licensePlates: string
  place: string
  time: string
}

const formData = ref<FormData>({
  id: '',
  licensePlates: '',
  place: '',
  time: '34242423424'
})

const handleButtonClick = () => {
  console.log('Me hicierón click')
}

const onSelectChange = () => {
  console.log('Se ha cambiado la opcion del Select')
}

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
      v-model="formData.id"
      @change="onSelectChange"
      label="Usuario"
      :data-options="users.users"
    />
    <SelectFom
      v-model="formData.licensePlates"
      @change="onSelectChange"
      label="Placa"
      :data-options="users.users"
    />

    <InputForm
      v-model="formData.place"
      id="Place"
      name="Place"
      label="Lugar"
      placeholder="Ingresar Lugar"
      type="text"
    />

    <InputForm
      class="select-none"
      v-model="formData.time"
      id="Place"
      name="Place"
      label="Fecha"
      placeholder="Ingresar Fecha"
      type="text"
      :value="formData.time"
      disabled
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
