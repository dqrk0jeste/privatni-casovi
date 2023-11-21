<script setup>
  const footer = useState('footer')
  const zakaziteCas = useState('zakazite-cas')
  const usluge = useState('usluge')

  const openMenu = ref(false)
  const openMenuForMiddle = ref(false)
  let timeout;

  const route = useRoute()
  const router = useRouter()

  function handleHome() {
    if(route.path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  function handleZakaziteCas() {
    if(route.path === '/') {
      zakaziteCas.value.scrollIntoView({ behavior: 'smooth'})
    } else {
      router.push('/')
    }
  }

  function openMenuEvent() {
    openMenu.value = !openMenu.value;
    if(!openMenu.value) {
      clearTimeout(timeout)
      timeout = setTimeout(() => openMenuForMiddle.value = false, 140)
    } else {
      clearTimeout(timeout)
      openMenuForMiddle.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth >= 668) {
        openMenu.value = false
        openMenuForMiddle.value = false
      }
    })
  })
</script>

<template>
  <header class="fixed z-50 top-0 left-0 bg-yellow-300 w-full flex flex-col">
    <div class="flex items-center justify-between py-3 px-4 h-[76px]">
      <div @click="handleHome" class="flex items-center gap-3 cursor-pointer">
        <span class="text-4xl font-bold text-blue-500">ЧАСОВИ</span>
        <img src="../assets/images/logo.svg" class="w-10" alt="logo">
      </div>
      <div>
        <button @click="openMenuEvent" class="md:hidden" :class="openMenu ? 'py-2' : ''">
          <div class="w-8 h-1 mb-2 transition-all duration-300" :class="openMenu ? '-rotate-45 translate-y-[6px] bg-red-500' : 'bg-black '"></div>
          <div class="w-8 h-1 bg-black mb-2" :class="openMenuForMiddle ? 'hidden' : ''"></div>
          <div class="w-8 h-1 transition-all duration-300" :class="openMenu ? 'rotate-45 -translate-y-[6px] bg-red-500' : 'bg-black '"></div>
        </button>
        <nav class="hidden md:flex">
          <ul class="flex items-center gap-5 text-lg mr-10">
            <li v-if="route.path === '/'" @click="usluge.scrollIntoView({ behavior: 'smooth'})" class="hover:underline cursor-pointer">Услуге</li>
            <li @click="footer.scrollIntoView({ behavior: 'smooth'})" class="hover:underline cursor-pointer">Контакт</li>
            <li v-if="route.path !== '/o-nama'"><NuxtLink href="/o-nama" class="hover:underline cursor-pointer">О нама</NuxtLink></li>
          </ul>
          <button @click="handleZakaziteCas" class="hidden text-lg font-bold py-3 px-3 rounded-full rounded-br-none bg-red-500 text-white hover:rounded-br-full hover:bg-red-600 transition-all md:block">Закажите час</button>
        </nav>
      </div>
    </div>
    <div v-if="openMenu">
      <ul class="border-solid border-b-2 border-black">
        <li v-if="route.path !== '/'" @click="router.push('/'); openMenu = false; openMenuForMiddle = false" class="text-xl border-solid border-t-2 border-black px-5 py-3 cursor-pointer hover:bg-yellow-200 active:bg-yellow-200">Почетна</li>
        <li v-if="route.path === '/'" @click="usluge.scrollIntoView({ behavior: 'smooth'}); openMenu = false; openMenuForMiddle = false" class="text-xl border-solid border-t-2 border-black px-5 py-3 cursor-pointer hover:bg-yellow-200 active:bg-yellow-200">Услуге</li>
        <li @click="footer.scrollIntoView({ behavior: 'smooth'}); openMenu = false; openMenuForMiddle = false" class="text-xl border-solid border-t-2 border-black px-5 py-3 cursor-pointer hover:bg-yellow-200 active:bg-yellow-200">Контакт</li>
        <li v-if="route.path !== '/o-nama'" @click="router.push('/o-nama'); openMenu = false; openMenuForMiddle = false" class="text-xl border-solid border-t-2 border-black px-5 py-3 cursor-pointer hover:bg-yellow-200 active:bg-yellow-200">О нама</li>
      </ul>
    </div>
  </header>
</template>