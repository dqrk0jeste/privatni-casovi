<script setup>
  const footer = ref(null)

  onMounted(() => {
    useState('footer', () => footer.value)
  })
</script>

<template>
  <footer ref="footer" class="bg-blue-500 w-full">
    <div class="max-w-[1500px] mx-auto px-5 py-20 flex flex-col gap-10 items-center justify-evenly md:flex-row">
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-3">
          <h2 class="text-4xl font-bold text-yellow-300">ЧАСОВИ</h2>
          <img src="../assets/images/logo.svg" class="w-10" alt="logo">
        </div>
        <p class="text-white text-center">Услуге приватних часова у Краљеву.</p>
      </div>
      <div class="flex flex-col items-center text-white">
        <h3 class="text-2xl font-bold mb-3 text-yellow-300">Контактирајте нас</h3>
        <div class="flex items-center gap-1">
          <i class='bx bxl-instagram text-black'></i>
          <a href="https://instagram.com/privatni.casovi.kraljevo?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" class="hover:underline">@privatni.casovi.kraljevo</a>
        </div>
        <div class="flex items-center gap-1">
          <i class='bx bxl-gmail text-black'></i>
          <a href="mailto:privatnicasovikraljevo@gmail.com" target="_blank" class="hover:underline">privatnicasovikraljevo@gmail.com</a>
        </div>
        <div class="flex items-center gap-1">
          <i class='bx bxs-phone text-black'></i>
          <a href="tel:0644408747" target="_blank" class="hover:underline">064 440 8747 - Јаков</a>
        </div>
      </div>
    </div>
  </footer>
</template>