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
  <nav class="bg-psAppBlue px-2 flex justify-between items-center p-1 h-[60px] w-full">
    <div class="flex gap-[5px] cursor-pointer select-none" @click="goToHome">
      <img alt="Vue logo" class="hidden md:block" src="@/assets/logo.svg" width="25" height="25" />
      <a class="text-psAppYellow text-lg md:text-xl font-bold cursor-pointer">{{ title }}</a>
    </div>
    <ul class="flex text-[12px] gap-[2px] font-bold tracking-widest items-center text-center ml-2">
      <li
        v-if="userSession.role === 'COLLABORATOR'"
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
        v-if="userSession.role === 'ADMIN'"
        class="text-white px-[2px] cursor-pointer"
        @click="
          () => {
            goTo('register')
          }
        "
      >
        {{ `Registrar ` }}
      </li>
      <li
        class="text-white px-[2px] cursor-pointer"
        @click="
          () => {
            goTo('ticket-generate')
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
