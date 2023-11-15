<script setup>
  definePageMeta({
    middleware: 'auth',
    layout: ''
  })

  const user = useState('user')

  const tasks = await $fetch('/api/prijave')

  async function loggout() {
    try {
      await $fetch('/api/logout', {
        method: 'DELETE'
      })
      useRouter().push('/')
    } catch(error) {
      console.log(error)
    }
  }
</script>

<template>
  <div>
    <p class="px-5 py-2 text-lg">Здраво, {{ user }}! <span @click="loggout" class="hover:underline cursor-pointer">Излогуј се.</span></p>
    <div>
      <section id="my-tasks">
        <Task />
      </section>
      <section id="other-tasks">

      </section>
    </div>
  </div>
</template>