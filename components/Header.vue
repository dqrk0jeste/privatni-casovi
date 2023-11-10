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
        <ul class="hidden md:flex items-center gap-5 text-lg">
          <li><a href="/about" class="hover:underline">О нама</a></li>
          <li><a class="hover:underline cursor-pointer">Контакт</a></li>
          <li><a class="hover:underline cursor-pointer"></a></li>
          <li><a class="hover:underline cursor-pointer"></a></li>
        </ul>
        <button class="hidden text-lg font-bold py-3 px-3 rounded-full rounded-br-none bg-red-500 text-white hover:rounded-br-full transition-all md:block">Закажите час</button>
      </nav>
    </div>
  </header>
</template>