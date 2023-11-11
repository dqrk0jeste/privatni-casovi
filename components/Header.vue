<script setup>

</script>

<template>
  <header class="fixed z-50 top-0 left-0 py-3 px-4 bg-yellow-300 w-full flex items-center justify-between">
    <div class="flex items-center gap-3">
      <h1 class="text-4xl font-bold text-blue-500">ЧАСОВИ</h1>
      <img src="../assets/images/logo.svg" class="w-10">
    </div>
    <div>
      <nav class="flex">
        <ul class="hidden md:flex items-center gap-5 text-lg mr-10">
          <li class="hover:underline cursor-pointer">О нама</li>
          <li class="hover:underline cursor-pointer">Контакт</li>
        </ul>
        <button class="hidden text-lg font-bold py-3 px-3 rounded-full rounded-br-none bg-red-500 text-white hover:rounded-br-full hover:bg-red-600 transition-all md:block">Закажите час</button>
      </nav>
    </div>
  </header>
</template>