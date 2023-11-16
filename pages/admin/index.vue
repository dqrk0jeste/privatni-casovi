<script setup>
  definePageMeta({
    layout: ''
  })

  const username = ref('')
  const password = ref('')
  const error = ref('')

  async function login() {
    const response = await $fetch('api/auth', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
    if(response.code === 401) {
      error.value = 'wrong'
    } else if(response.code === 200) {
      useRouter().push('/admin/dashboard')
    } else {
      error.value = 'server'
    }
  }

  watch(error, () => {
    if(error.value !== '') {
      setTimeout(() => {
        error.value = ''
      }, 3000)
    }
  })
</script>

<template>
  <div class="w-screen h-screen bg-blue-400 flex items-center justify-center text-lg relative">
    <form @submit.prevent="login" class="flex flex-col px-20 pt-20 pb-8 bg-blue-300 rounded-[4rem] items-center">
      <input v-model="username" type="text" name="username" id="username" placeholder="Корисничко име" class="p-2 rounded-lg outline-none">
      <input v-model="password" type="password" name="password" id="password" placeholder="Лозинка" class="p-2 rounded-lg outline-none mt-5">
      <button type="submit" class="py-2 px-5 bg-yellow-200 rounded-full mt-8 font-bold hover:bg-yellow-300">Пријава</button>
    </form>
    <h1 v-if="error === 'server'" class="text-center text-2xl mt-8 absolute top-10 bg-blue-300 rounded-full px-10 py-5">Дошло је до грешке на серверу.</h1>
    <h1 v-if="error === 'wrong'" class="text-center text-2xl mt-8 absolute top-10 bg-blue-300 rounded-full px-10 py-5">Погрешно корисничко име или лозинка.</h1>
  </div>
</template>