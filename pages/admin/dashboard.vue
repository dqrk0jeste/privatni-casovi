<script setup>

  definePageMeta({
    layout: ''
  })

  const { data: user, pending: userPending } = await useFetch('/api/current', {
    transform: (data) => {
      console.log(data)
      const a = useState('user')
      a.value = data
      return data
    }
  })
  const { data: tasks, error: tasksError, pending: tasksPending } = await useFetch('/api/prijave', {
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
      useRouter().push('/admin')
    } catch(error) {
      console.log(error)
    }
  }

  function compareFn(a, b) {
    if(a.rok === '') return 1
    if(b.rok === '') return -1
    return new Date(a.rok).getTime() > new Date(b.rok).getTime()
  }

  function updateMyTasks(id) {
    tasks.value.myTasks = tasks.value.myTasks.filter(task => {
      console.log(task.id !== id)
      return task.id !== id
    })
    console.log(tasks.value)
  }

  function addToMyTasks(task) {
    tasks.value.myTasks.push(task)
    tasks.value.myTasks = tasks.value.myTasks.sort(compareFn)
    tasks.value.otherTasks = tasks.value.otherTasks.filter(t => {
      return t.id !== task.id
    })
  }
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <p class="px-5 py-2 text-lg">Здраво, {{ user.username }}! <span @click="loggout" class="hover:underline cursor-pointer">Излогуј се.</span></p>
    <div class="flex flex-col justify-center items-start gap-12 md:flex-row p-5">
      <section id="my-tasks" class="bg-white border-solid border-black border-0 shadow-lg rounded-xl p-5">
        <h2 class="text-4xl text-bold">Моји часови</h2>
        <div v-if="!tasksPending">
          <div v-if="tasksError" class="text-2xl p-5">Дошло је до грешке.</div>
          <Task v-for="task in tasks.myTasks" :key="task.id" :taskInfo="task" @update-my-tasks="updateMyTasks"/>
        </div>
      </section>
      <section id="other-tasks" class="bg-white border-solid border-black border-0 shadow-lg rounded-xl p-5">
        <h2 class="text-4xl text-bold">Недодељени часови</h2>
        <div v-if="!tasksPending">
          <div v-if="tasksError" class="text-2xl p-5">Дошло је до грешке.</div>
          <Task v-for="task in tasks.otherTasks" :key="task.id" :taskInfo="task" other="true" @add-to-my-tasks="addToMyTasks"/>
        </div>
      </section>
    </div>
  </div>
</template>