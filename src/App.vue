<script setup lang="ts">
import { onMounted, onUpdated, ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

import NavBar from '@/shared/components/NavBar.vue'
import NavBar2 from './shared/components/NavBar2.vue'
import NavBarUser from './shared/components/NavBarUser.vue'
import NavBarUserTicket from './shared/components/NavBarUserTicket.vue'
import { routerLinks } from '@/router/list-routes'
import NavBarCol from './shared/components/NavBarCol.vue'

const route = useRoute()
const router = useRouter()

const userSession = ref({
  name: '',
  id: '',
  email: '',
  role: '',
  hasTicket: false,
  token: ''
})

watch(
  () => route.name,
  (value) => {
    console.log(value)
  },
  { deep: true }
)

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
        hasTicket: false,
        token: ''
      }

  console.log('Ruta cambiada', userSession.value.role)
  console.log(userSession.value.id)
})
</script>

<template>
  <div class="flex flex-col pb-[80px]">
    <header>
      <div>
        <NavBar
          v-if="route.name === 'home' && !userSession.id"
          title="ParkSafe"
          :links="routerLinks"
        />
        <NavBar2 v-if="route.name !== 'home' && !userSession.id" title="ParkSafe" />

        <NavBarUser v-if="route.name === 'home' && userSession.role === 'USER'" title="ParkSafe" />
        <NavBarUserTicket
          v-if="route.name !== 'home' && userSession.role === 'USER'"
          title="ParkSafe"
        />
        <NavBarCol v-if="userSession.role === 'COLLABORATOR'" title="ParkSafe" />
      </div>
    </header>
    <RouterView />
  </div>
</template>
