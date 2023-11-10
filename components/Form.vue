<script setup>
  const imeIPrezime = ref('')
  const brojTelefona = ref('')
  const skola = ref('')
  const razred = ref('')
  const predmet = ref('')
  const oblast = ref('')
  const detalji = ref('')
  const datum = ref('')
  const nastavnik = ref('')
  const napomena = ref('')
  function submitForm() {
    console.log(imeIPrezime)
    console.log(brojTelefona)
    console.log(skola)
    console.log(razred)
    console.log(predmet)
    console.log(oblast)
    console.log(detalji)
    console.log(datum)
    console.log(nastavnik)
    console.log(napomena)
  }
</script>

<template>
  <form @submit.prevent="submitForm" class="mt-5 px-5">
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
          <select v-model="razred" name="razred" class="ml-3 p-3 rounded-lg" required>
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
      <div>
        <select v-model="predmet" name="predmet" class="rounded-lg p-3">
          <option value="matematika" class="rounded-lg p-3">Математика</option>
          <option value="fizika">Физика</option>
          <option value="srpski">Српски</option>
        </select>
      </div>
      <div class="mt-5">
        <input v-model="oblast" type="radio" name="oblast" value="kontrolni" id="kontrolni" checked>
        <label for="kontrolni" class="ml-2">Припреме за контролни</label><br>
        <input v-model="oblast" type="radio" name="oblast" value="takmicenje" id="takmicenje">
        <label for="takmicenje" class="ml-2">Припреме за такмичење</label><br>
        <input v-model="oblast" type="radio" name="oblast" value="prijemni" id="prijemni">
        <label for="prijemni" class="ml-2">Припреме за пријемни</label><br>
        <input v-model="oblast" type="radio" name="oblast" value="drugo" id="drugo">
        <label for="drugo" class="ml-2">Друго</label>
      </div>
      <div class="mt-5">
        <label for="detalji">Детаљније о области из које Вам је потребан час (опционо)</label><br>
        <ResizibleArea nameForAccessability="detalji" @input="(data) => { detalji = data }" /><br>
      </div>
    </div>

    <div class="mb-5">
      <h2 class="text-4xl font-bold text-blue-500 mb-4">Детаљи</h2>
      <label for="datum">До када Вам је потребно да одржимо час?</label>
      <input v-model="datum" type="date" name="datum" class="rounded-lg p-3 ml-3 mt-3" required><br>
  
      <label for="nastavnik">Одаберите наставника:</label>
      <select v-model="nastavnik" name="nastavnik" class="rounded-lg p-3 ml-3 mt-3">
        <option selected value="bilo ko">било ко</option>
        <option value="darko">Дарко</option>
        <option value="jakov">Јаков</option>
        <option value="pavle">Павле</option>
        <option value="aleksandar">Александар</option>
        <option value="vuk">Вук</option>
      </select><br>
    </div>

    <div class="pt-5 border-solic border-black border-t-2">
      <label for="napomena" class="text-lg">Нека напомена:</label><br>
      <ResizibleArea nameForAccessability="napomena" @input="(data) => { napomena = data }" />
    </div>

    <div class="flex justify-end">
      <button type="submit" class="mt-5 px-5 py-3 border-2 border-none bg-red-500 text-white text-lg font-bold rounded-full hover:bg-white hover:text-red-500 hover:border-solid hover:border-red-500 hover:px-[calc(1.25rem-2px)]
      hover:py-[calc(0.75rem-2px)] transition-color">Проследи пријаву</button>
    </div>
  </form>
</template>

<style scoped>
  input, textarea, select {
    outline: none;
  }
</style>