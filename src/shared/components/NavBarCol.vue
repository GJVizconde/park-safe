<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'ParkSafe'
})

const goToHome = () => {
  router.push({
    path: '/'
  })
}

const goTo = (route: string) => {
  router.push({
    path: `/${route}`
  })
}

const router = useRouter()

const goHome = () => {
  router.push({ path: '/home', state: { refresh: true } })
}

const removeLocalStorage = () => {
  localStorage.removeItem('userSession')
}

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  token: ''
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

  console.log(userSession.value.role)
})

router.afterEach(() => {
  // Cargar userSession desde localStorage después de cada cambio de ruta
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

  console.log('Ruta cambiada', userSession.value.role)
  console.log(userSession.value.id)
})
</script>

<template>
  <nav class="bg-psAppBlue px-5 flex justify-between items-center p-1 h-[60px]">
    <div class="flex gap-[5px] cursor-pointer select-none flex-shrink-0" @click="goToHome">
      <img alt="Vue logo" class="" src="@/assets/logo.svg" width="25" height="25" />
      <a class="text-psAppYellow text-xl font-bold cursor-pointer">{{ title }}</a>
    </div>
    <ul class="flex text-sm gap-[10px] font-bold tracking-widest items-center text-center ml-2">
      <li
        class="text-white px-[2px] cursor-pointer"
        @click="
          () => {
            goTo('register-vehicle')
          }
        "
      >
        {{ `Registrar ` }}
      </li>
      <li
        class="text-white px-[2px] cursor-pointer"
        @click="
          () => {
            goTo('enter-vehicle')
          }
        "
      >
        {{ `Ingresar ` }}
      </li>
      <li
        class="text-white px-[2px] cursor-pointer"
        @click="
          () => {
            goTo('ticket-control')
          }
        "
      >
        {{ `Control` }}
      </li>

      <li
        class="text-white bg-red-700 px-[3px] py-[3px] rounded-[4px] cursor-pointer"
        @click="
          () => {
            removeLocalStorage()
            goHome()
          }
        "
      >
        {{ `Cerrar Sesion` }}
      </li>
    </ul>
  </nav>
</template>