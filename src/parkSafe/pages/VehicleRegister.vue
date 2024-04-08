<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import InputForm from '@/shared/components/InputForm.vue'
import ParkSafeLayout from '../layouts/ParkSafeLayout.vue'
import ButtonForm from '@/shared/components/ButtonForm.vue'
import SelectFom from '@/shared/components/SelectForm.vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import goToRouter from '@/shared/utils/goTo'
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

const router = useRouter()

const users = ref([''])

const model = defineModel()

//TODO: getAllUsers hacerlo una sola vez en el onMounted de la app y luego pasarlo por piña
//TODO: No entrgar la password de los usuarios
//TODO: Encriptar la password de los usersw

const getAllUsers = async () => {
  try {
    const dataUser = (await axios.get(`${BASE_URL.value}/user`)).data
    users.value = dataUser
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
}

const successToast = () => {
  toast.success('Vehículo registrado con exito!', {
    theme: 'colored',
    autoClose: 2000,
    onClose: () => {
      goToRouter(router, 'ticket-generate')
    },
    position: 'bottom-center'
  }) // ToastOptions
}

const registerVehicle = async (body: FormData) => {
  try {
    const register = (await axios.post(`${BASE_URL.value}/vehicle`, body)).data
    successToast()
  } catch (error) {
    console.error('Error al obtener el ticket:', error)
  }
}

const handleButtonClick = () => {
  registerVehicle(formData.value)
}

const onSelectChange = () => {
  // console.log('Se ha cambiado la opcion del Select')
}

onMounted(async () => {
  await getAllUsers()
})

watch(formData.value, (_value) => {}, { deep: true })

watch(
  model,
  (value: any) => {
    // console.log('NUEVO valor de model ==>>', value)
    // console.log('NUEVO valor de value.vehicles ==>>', value.vehicles)
    formData.value.user_id = value.id
  },
  { deep: true }
)
</script>

<template>
  <ParkSafeLayout title="Registrar Vehiculo" />
  <section class="px-5">
    <SelectFom
      v-model="model"
      @change="onSelectChange"
      label="Usuario"
      :data-options="users"
      typeData="user"
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
      placeholder="Ingresar Descripción, marca, modelo, color"
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
