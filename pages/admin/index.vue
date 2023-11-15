<script setup>
  definePageMeta({
    layout: ''
  })

  const username = ref('')
  const password = ref('')

  async function login() {
    await $fetch('api/auth', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

  }
</script>

<template>
  <div class="w-screen h-screen bg-blue-400 flex items-center justify-center text-lg">
    <form @submit.prevent="login" class="flex flex-col px-20 pt-20 pb-8 bg-blue-300 rounded-[4rem] items-center">
      <input v-model="username" type="text" name="username" id="username" placeholder="Корисничко име" class="p-2 rounded-lg outline-none">
      <input v-model="password" type="password" name="password" id="password" placeholder="Лозинка" class="p-2 rounded-lg outline-none mt-5">
      <button type="submit" class="py-2 px-5 bg-yellow-200 rounded-full mt-8 font-bold hover:bg-yellow-300">Пријава</button>
    </form>
  </div>
</template>