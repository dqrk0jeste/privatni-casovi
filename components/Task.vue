<script setup>
  const open = ref(false)
</script>

<template>
  <div class="ml-5 mb-5">
    <div class="bg-white border-solid border-black border-0 shadow-lg rounded-xl w-[500px] px-5 pt-3 flex justify-between">
      <div>
        <h2 class="text-2xl font-bold -ml-3">~{{ '11-4-2007' }}</h2>
        <p class="text-lg">Име: Валентина</p>
        <p class="text-lg">Предмет: Математика</p>
      </div>
      <button @click="open = !open" class="text-2xl"><i class='bx bx-expand-vertical'></i></button>
    </div>
    <div class="-mt-5 bg-white border-solid border-black border-0 shadow-lg rounded-b-xl w-[500px] text-lg pt-8 px-5 h-0 overflow-hidden" :class="open ? 'h-auto pb-3' : 'h-0'">
      <p>Број телефона: 0649769196</p>
      <p>Школа: Гимназија</p>
      <p>Разред: 4</p>
      <p>Врста часа: Припрема за контролни</p>
      <p>Област: Тригонометрија</p>
      <p>Други разлог: Учим онако</p>
      <p>Преферирано време: Радним даном, ујутру</p>
      <p>Место: Долазак на Вашу адресу</p>
      <p>Напомена:</p>
    </div>
  </div>
</template>