<script setup>
  const imeIPrezime = ref('')
  const brojTelefona = ref('')
  const skola = ref('')
  const razred = ref('')
  const predmet = ref('')
  const oblast = ref('')
  const detaljiOblasti = ref('')
  const drugiRazlog = ref('')
  const datum = ref('')
  const mesto = ref('')
  const drugoMesto = ref('')
  const vreme = ref('')
  const nastavnik = ref('0')
  const napomena = ref('')

  const formSubmitted = ref(false)
  const formError = ref(null)

  const { data: predmeti, pending: predmetiPending, error: predmetiError } = await useFetch('/api/predmeti')
  const { data: nastavnici, pending: nastavniciPending, error: nastavniciError } = await useFetch('/api/nastavnici', {
    query: {
      predmet: predmet
    },
    transform: (data) => {
      nastavnik.value = '0'
      return data
    }
  })

  async function submitForm() {
    const formData = {
      podaci: {
        imeIPrezime: imeIPrezime.value,
        brojTelefona: brojTelefona.value,
        skola: skola.value,
        razred: razred.value
      },
      predmet: {
        id: predmet.value,
        vrstaCasa: {
          vrsta: oblast.value,
          detalji: oblast.value === 'kontrolni' ? detaljiOblasti.value : drugiRazlog.value
        }
      },
      vreme: {
        rok: datum.value,
        preferiranoVreme: vreme.value
      },
      mesto: mesto.value === 'drugo' ? drugoMesto.value : mesto.value,
      nastavnik: nastavnik.value,
      napomena: napomena.value
    }
    const { error } = await useFetch('/api/prijava', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if(error.value) {
      formError.value = error.value
      resetFields()
    } else {
      formSubmitted.value = true
    }
  }

  function resetFields() {
    imeIPrezime.value = ''
    brojTelefona.value = ''
    skola.value = ''
    razred.value = ''
    predmet.value = ''
    oblast.value = ''
    detaljiOblasti.value = ''
    drugiRazlog.value = ''
    datum.value = ''
    mesto.value = ''
    drugoMesto.value = ''
    vreme.value = ''
    nastavnik.value = '0'
    napomena.value = ''
  }

  const nastavnikovaNapomena = computed(() => {
    if(nastavnik.value !== '0' && nastavnici.value) {
      const found = nastavnici.value.filter(n => n.id === nastavnik.value)[0]
      return found.napomena
    }
  })

  watch(formSubmitted, () => {
    if(formSubmitted.value === true) {
      setTimeout(() => {
        formSubmitted.value = false
      }, 5000)
    }
  })
</script>

<template>
  <div v-if="formError || predmetiError || nastavniciError" class="text-center p-20 bg-yellow-200 w-fit mx-auto mt-10 rounded-[4rem]">
    <h1 class="text-3xl">Дошло је до грешке. Mолим Вас покушајте касније.</h1>
    <p>Уколико се грешке наставе контактирајте нас <a class="underline underline-offset-2 cursor-pointer" href="mailto:darkonikoloc@gmail.com">кликом овде.</a></p>
  </div>
  <div v-else-if="formSubmitted" class="text-center px-5 py-10 bg-yellow-200 w-fit mx-auto mt-10 rounded-[4rem] max-w-[1200px] mx-auto md:p-20">
    <h1 class="text-4xl">Ваша пријава је послата. Очекујте позив наставника наредних дана.</h1>
    <p>Уколико имате нека питања или желите нешто додати Вашој пријави, можете то учинити <a class="underline underline-offset-2 cursor-pointer" href="mailto:darkonikoloc@gmail.com">кликом овде.</a></p>
  </div>
  <form v-else @submit.prevent="submitForm" class="mt-10 px-5 flex flex-col justify-center gap-x-20 lg:flex-row">
    <div>
      <div class="mb-5">
        <h2 class="text-4xl font-bold text-blue-500 mb-4">Ваши подаци</h2>
        <div class="flex gap-5 flex-col md:flex-row">
          <input v-model="imeIPrezime" name="ime-i-prezime" placeholder="Име и презиме" class="rounded-lg p-3" required>
          <input v-model="brojTelefona" name="broj-telefona" placeholder="Број телефона" class="rounded-lg p-3" required>
        </div>
        <div class="mt-5 flex gap-5 flex-col md:flex-row md:items-center">
          <input v-model="skola" name="skola" placeholder="Школа" class="rounded-lg p-3" required>
          <div>
            <label for="razred">Разред:</label>
            <select v-model="razred" name="razred" id="razred" class="ml-3 p-3 rounded-lg" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select><br>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <h2 class="text-4xl font-bold text-blue-500 mb-4">Предмет</h2>
        <div v-if="predmetiPending">
          Учитавање...
        </div>
        <div v-else-if="predmeti">
          <label for="predmet">Одаберите предмет</label>
          <select v-model="predmet" name="predmet" id="predmet" class="rounded-lg p-3 ml-3 my-3" required>
            <option v-for="p in predmeti" :key="p.id" :value="p.id">{{ p.ime }}</option>
          </select>
        </div>
        <div class="mt-5">
          <input v-model="oblast" type="radio" name="oblast" value="kontrolni" id="kontrolni" required>
          <label for="kontrolni" class="ml-2">Припреме за контролни</label><br>
          <input v-model="oblast" type="radio" name="oblast" value="takmicenje" id="takmicenje">
          <label for="takmicenje" class="ml-2">Припреме за такмичење</label><br>
          <input v-model="oblast" type="radio" name="oblast" value="prijemni" id="prijemni">
          <label for="prijemni" class="ml-2">Припреме за пријемни</label><br>
          <input v-model="oblast" type="radio" name="oblast" value="drugo" id="drugo">
          <label for="drugo" class="ml-2">Друго</label>
        </div>
        <div v-if="oblast === 'kontrolni'" class="mt-5">
          <label for="detalji-oblasti">Oбласт из које Вам је потребан час</label><br>
          <ResizibleArea idForAccessability="detalji-oblasti" @input="(data) => { detaljiOblasti = data }" required/><br>
        </div>
        <div v-if="oblast === 'drugo'" class="mt-5">
          <label for="drugi-razlog">Напишите зашто Вам је потребан час?</label><br>
          <ResizibleArea idForAccessability="drugi-razlog" @input="(data) => { drugiRazlog = data }" required/><br>
        </div>
      </div>
    </div>
    
    <div>
      <div class="mb-5">
        <h2 class="text-4xl font-bold text-blue-500 mb-4">Детаљи</h2>
        <div v-if="oblast === 'kontrolni'">
          <label for="datum">До када Вам је потребно да одржимо час?</label>
          <input v-model="datum" type="date" name="datum" id="datum" class="rounded-lg p-3 ml-3 my-3" required><br>
        </div>
        <div>
          <label for="vreme">Које Вам време одговара?</label>
          <select v-model="vreme" name="vreme" id="vreme" class="rounded-lg p-3 ml-3 my-3" required>
            <option value="vikend">Викенд</option>
            <option value="ujutru">Радним даном, ујутру</option>
            <option value="uvece">Радним даном, увече</option>
            <option value="svejedno">Свеједно</option>
          </select>
        </div>
        <div>
          <label for="mesto">Где бисте желели да одржимо час?</label>
          <select v-model="mesto" name="mesto" id="mesto" class="rounded-lg p-3 ml-3 my-3" required>
            <option value="kod nastavnika">Код наставника кући</option>
            <option value="kod ucenika">Долазак на Вашу адресу</option>
            <option value="online">Онлине</option>
            <option value="drugo">Негде другде</option>
          </select>
        </div>
        <div v-if="mesto === 'drugo'" class="my-5">
          <label for="drugo-mesto">Где? (библиотека, школа...)</label><br>
          <ResizibleArea idForAccessability="drugo-mesto" @input="(data) => { drugoMesto = data }" required/><br>
        </div>
        <div v-if="nastavniciPending">
          Учитавање...
        </div>
        <div v-else>
          <label for="nastavnik">Одаберите наставника</label>
          <select v-model="nastavnik" name="nastavnik" id="nastavnik" class="rounded-lg p-3 ml-3 mt-3" required>
            <option value="0">Било ко</option>
            <option v-for="n in nastavnici" :value="n.id">{{ n.ime }}</option>
          </select><br>
          <p v-if="nastavnikovaNapomena" class="text-sm text-red-500 mt-2">Напомена: {{ nastavnikovaNapomena }}</p>
        </div>
      </div>
  
      <div class="pt-5 border-solic border-black border-t-2">
        <label for="napomena">Нека напомена (опционо)</label><br>
        <ResizibleArea idForAccessability="napomena" @input="(data) => { napomena = data }" />
      </div>
  
      <div class="flex justify-end">
        <button type="submit" class="mt-5 px-5 py-3 border-2 border-none bg-red-500 text-white text-lg font-bold rounded-full hover:bg-red-600">Проследи пријаву</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
  input, textarea, select {
    outline: none;
  }
</style>