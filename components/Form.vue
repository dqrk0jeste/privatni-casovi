<template>
  <form class="mt-5 px-5">
    <div class="mb-5">
      <h2 class="text-4xl font-bold text-blue-500 mb-4">Ваши подаци</h2>
      <div class="flex gap-5 flex-col md:flex-row">
        <input name="ime-i-prezime" placeholder="Име и презиме" class="rounded-lg p-3">
        <input name="broj-telefona" placeholder="Број телефона" class="rounded-lg p-3">
      </div>
      <div class="mt-5 flex gap-5 flex-col md:flex-row md:items-center">
        <input name="skola" placeholder="Школа" class="rounded-lg p-3">
        <div>
          <label for="razred">Разред:</label>
          <select name="razred" class="ml-3 p-3 rounded-lg">
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
        <select name="predmet" class="rounded-lg p-3">
          <option value="matematika" class="rounded-lg p-3">Математика</option>
          <option value="fizika">Физика</option>
          <option value="srpski">Српски</option>
        </select>
      </div>
      <div class="mt-5">
        <input type="radio" name="oblast" value="kontrolni" id="kontrolni">
        <label for="kontrolni" class="ml-2">Припреме за контролни</label><br>
        <input type="radio" name="oblast" value="takmicenje" id="takmicenje">
        <label for="takmicenje" class="ml-2">Припреме за такмичење</label><br>
        <input type="radio" name="oblast" value="prijemni" id="prijemni">
        <label for="prijemni" class="ml-2">Припреме за пријемни</label><br>
        <input type="radio" name="oblast" value="drugo" id="drugo">
        <label for="drugo" class="ml-2">Друго</label>
      </div>
      <div class="mt-5">
        <label for="detalji">Детаљније о области из које Вам је потребан час (опционо)</label><br>
        <ResizibleArea nameForAccessability="detalji"/><br>
      </div>
    </div>

    <div class="mb-5">
      <h2 class="text-4xl font-bold text-blue-500 mb-4">Детаљи</h2>
      <label for="datum">До када Вам је потребно да одржимо час?</label>
      <input type="date" name="datum" class="rounded-lg p-3 ml-3 mt-3"><br>
  
      <label for="nastavnik">Одаберите наставника:</label>
      <select name="nastavnik" class="rounded-lg p-3 ml-3 mt-3">
        <option>било ко</option>
        <option>Дарко</option>
        <option>Јаков</option>
        <option>Павле</option>
        <option>Александар</option>
        <option>Вук</option>
      </select><br>
    </div>

    <div class="pt-5 border-solic border-black border-t-2">
      <label for="napomena" class="text-lg">Нека напомена:</label><br>
      <ResizibleArea nameForAccessability="napomena"/>
    </div>
  </form>
</template>

<style scoped>
  input, textarea, select {
    outline: none;
  }
</style>