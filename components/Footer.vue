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
          <h1 class="text-4xl font-bold text-yellow-300">ЧАСОВИ</h1>
          <img src="../assets/images/logo.svg" class="w-10">
        </div>
        <p class="text-white text-center">Услуге приватних часова из разних предмета</p>
      </div>
      <div class="text-white">
        <h1 class="text-2xl font-bold mb-3 text-yellow-300">Контактирајте нас:</h1>
        <a href="mailto:privatnicasovikraljevo@gmail.com" class="flex items-center gap-1">
          <i class='bx bxl-gmail text-black'></i>
          <p class="hover:underline">privatnicasovikraljevo@gmail.com</p>
        </a>
        <div class="flex items-center gap-1">
          <i class='bx bxs-phone text-black'></i>
          <a href="tel:0649769196" class="hover:underline">064 976 9196 - Дарко</a>
        </div>
        <div class="flex items-center gap-1">
          <i class='bx bxs-phone text-black'></i>
          <a href="tel:0644408747" class="hover:underline">064 440 8747 - Јаков</a>
        </div>
      </div>
    </div>
  </footer>
</template>