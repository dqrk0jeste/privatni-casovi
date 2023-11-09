<script setup lang='ts'>

</script>

<template>
  <div class="p-20 bg-yellow-300">
    <h1 class="text-5xl text-red-500 font-bold">Закажите час</h1>
    <form>
      <label for="ime-i-prezime">Ваше име и презиме:</label>
      <input name="ime-i-prezime"><br>

      <label for="broj-telefona">Број телефона:</label>
      <input name="broj-telefona"><br>

      <label for="skola">Школа:</label>
      <input name="skola"><br>

      <label for="razred">Разред:</label>
      <select name="razred">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select><br>

      <label for="predmet">Одаберите предмет:</label>
      <select name="predmet">
        <option value="matematika">Математика</option>
        <option value="fizika">Физика</option>
        <option value="srpski">Српски</option>
      </select><br>

      <label for="takmicenja">Припрема за такмичења?</label><br>
      <input type="radio" name="takmicenja" value="true" id="da">
      <label for="da">Да</label>
      <input type="radio" name="takmicenja" value="false" id="ne" checked>
      <label for="ne">Не</label><br>

      <label for="oblast">Укратко о области из које Вам је потребна помоћ</label><br>
      <textarea name="oblast"></textarea><br>

      <label for="datum">До када Вам је потребно да одржимо час?</label>
      <input type="date" name="datum"><br>

      <label for="bira">Желите ли бирати наставника? (Уколико Вам је хитно, боље је да одаберете опцију 'не')</label><br>
      <input type="radio" name="bira" value="true" id="da">
      <label for="da">Да</label>
      <input type="radio" name="bira" value="false" id="ne" checked>
      <label for="ne">Не</label><br>

      <label for="nastavnik">Одаберите наставника:</label>
      <select name="nastavnik">
        <option>Дарко</option>
        <option>Јаков</option>
        <option>Павле</option>
        <option>Александар</option>
        <option>Вук</option>
      </select><br>
      <label for="napomena">Нека напомена:</label><br>
      <textarea name="napomena"></textarea>
    </form>
  </div>
</template>