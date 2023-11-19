<script setup>
  const { taskInfo, other } = defineProps(['taskInfo', 'other'])
  const emit = defineEmits(['update-my-tasks'])

  const id = taskInfo.id
  
  const open = ref(false)
  const wantsToDelete = ref(false)
  const error = ref(null)

  async function deleteTask() {
    wantsToDelete.value = false
    try {
      const response = await $fetch(`/api/delete`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: id
        })
      })
      if(response.code === 200) {
        emit('update-my-tasks', id)
      } else {
        error.value = true
      }
    } catch(e) {
      console.log(e)
      error.value = e
    }
  }

  async function takeTask() {
    try {
      const response = await $fetch(`/api/take`, {
        method: 'PUT',
        body: JSON.stringify({
          idPrijave: id
        })
      })
      if(response.code === 200) {
        emit('add-to-my-tasks', taskInfo)
      } else {
        error.value = true
      }
    } catch(e) {
      console.log(e)
      error.value = e
    }
  }

  const odrediVrstuCasa = computed(() => {
    if(taskInfo.vrsta_pripreme === 'takmicenje') return 'Припрема за такмичење'
    if(taskInfo.vrsta_pripreme === 'kontrolni') return 'Припрема за контролни'
    if(taskInfo.vrsta_pripreme === 'prijemni') return 'Припрема за пријемни'
    if(taskInfo.vrsta_pripreme === 'drugo') return 'Друго'
  })

  const odrediPreferiranoVreme = computed(() => {
    if(taskInfo.preferirano_vreme === 'ujutru') return 'Радним даном, ујутру'
    if(taskInfo.preferirano_vreme === 'uvece') return 'Радним даном, увече'
    if(taskInfo.preferirano_vreme === 'vikend') return 'Викендом'
    if(taskInfo.preferirano_vreme === 'svejedno') return 'Свеједно'
  })

  const odrediMesto = computed(() => {
    if(taskInfo.mesto === 'online') return 'Онлине'
    if(taskInfo.mesto === 'kod ucenika') return 'Долазак код ученика'
    if(taskInfo.mesto === 'kod nastavnika') return 'Долази код наставника'
    return taskInfo.mesto
  })

  watch(error, () => {
    if(error.value) {
      setTimeout(() => {
        error.value = null
      }, 3000)
    }
  })
</script>

<template>
  <div class="mt-3">
    <div class="bg-white border-solid border-black border-0 shadow-lg rounded-xl px-5 pt-3 flex justify-between">
      <div>
        <h3 class="text-2xl font-bold -ml-3">~{{ taskInfo.rok === '' ? '' : taskInfo.rok }}</h3>
        <p class="text-lg">Име: {{ taskInfo.ime }}</p>
        <p class="text-lg">Предмет: {{taskInfo.predmet }}</p>
      </div>
      <button @click="open = !open" class="text-2xl">
        <i v-if="!open" class='bx bx-expand-vertical'></i>
        <i v-else class='bx bx-collapse-vertical'></i>
      </button>
    </div>
    <div class="-mt-5 bg-white border-solid border-black border-0 shadow-lg rounded-b-xl text-lg pt-8 px-5 overflow-hidden" :class="open ? 'pb-3' : 'max-h-0'">
      <p>Број телефона: {{ taskInfo.broj_telefona }}</p>
      <p>Школа: {{ taskInfo.skola }}</p>
      <p>Разред: {{ taskInfo.razred }}</p>
      <p>Врста часа: {{ odrediVrstuCasa }}</p>
      <p v-if="taskInfo.vrsta_pripreme === 'kontrolni'">Област: {{ taskInfo.detalji_pripreme }}</p>
      <p v-if="taskInfo.vrsta_pripreme === 'drugo'">Други разлог: {{ taskInfo.detalji_pripreme }}</p>
      <p>Преферирано време: {{ odrediPreferiranoVreme }}</p>
      <p>Место: {{ odrediMesto }}</p>
      <p>Напомена: {{ taskInfo.napomena }}</p>
      <div v-if="other">
        <button @click="takeTask" class="px-2 py-1 rounded-lg bg-blue-500 text-white mt-3 hover:bg-blue-600">Преузми</button>
      </div>
      <div v-else>
        <button @click="wantsToDelete = true" class="px-2 py-1 rounded-lg bg-red-500 text-white mt-3 hover:bg-red-600">Обриши</button>
        <button @click="deleteTask" class="ml-2 text-red-500 underline-offset-2 hover:underline" :class="wantsToDelete ? 'inline-block' : 'hidden'">Потврди</button>
      </div>
      <span v-if="error" class="ml-2">Дошло је до грешке.</span>
    </div>
  </div>
</template>