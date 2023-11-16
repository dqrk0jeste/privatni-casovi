<script setup>

  definePageMeta({
    layout: ''
  })

  const refetch = useState('refetch')

  const user = await $fetch('/api/current')
  const { data: tasks, error, pending } = await useFetch('/api/prijave', {
    server: false,
    watch: [refetch],
    transform: (data) => {
      data.myTasks = data.myTasks.sort(compareFn)
      data.otherTasks = data.otherTasks.sort(compareFn)
      return data
    }
  })

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

  function compareFn(a, b) {
    if(a.rok === '') return 1
    if(b.rok === '') return -1
    return new Date(a.rok).getTime() > new Date(b.rok).getTime()
  }
</script>

<template>
  <div class="bg-blue-100 min-h-screen">
    <p class="px-5 py-2 text-lg">Здраво, {{ user }}! <span @click="loggout" class="hover:underline cursor-pointer">Излогуј се.</span></p>
    <div class="flex flex-col justify-center gap-12 md:flex-row p-5">
      <section id="my-tasks" class="bg-white border-solid border-black border-0 shadow-lg rounded-xl p-5">
        <h2 class="text-4xl text-bold">Моји часови</h2>
        <div v-if="!pending">
          <Task v-for="task in tasks.myTasks" :key="task.id" :taskInfo="task" other="false" @refetch="refetch = true"/>
        </div>
      </section>
      <section id="other-tasks" class="bg-white border-solid border-black border-0 shadow-lg rounded-xl p-5">
        <h2 class="text-4xl text-bold">Недодељени часови</h2>
        <div v-if="!pending">
          <Task v-for="task in tasks.otherTasks" :key="task.id" :taskInfo="task" other="true"/>
        </div>
      </section>
    </div>
  </div>
</template>