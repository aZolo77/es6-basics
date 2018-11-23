// Деструктивное присваивание массивов

{
  let scores = [3, 4, 5, 6, 7];

  // внести оставшиеся значения в новый массив
  let [low, ...rest] = scores;

  console.log(low, rest);
}

console.log('='.repeat(40));

{
  let scores = [3, 4];

  // задать значение по умолчанию
  let [low, mid, high = 5] = scores;

  console.log(low, mid, high);
}

console.log('='.repeat(40));

{
  // значение является массивом в массиве
  let scores = [3, 4, [5, 6]];

  let [low, mid, [high, higher]] = scores;

  console.log(low, mid, high, higher);
}

console.log('='.repeat(40));

{
  // использование деструктивного присваивания в качестве параметров функции
  function computeScore([low, mid]) {
    console.log(low, mid);
  }

  computeScore([3, 4]);
}

console.log('='.repeat(40));

{
  // возврат нескольких значений из функции
  function getScores() {
    return [3, 4, 5];
  }

  let [low, mid, high] = getScores();
  console.log(low, mid, high);
}

console.log('='.repeat(40));

{
  // быстро обменять значения переменных
  let yes = 'yes';
  let no = 'no';
  [yes, no] = [no, yes];

  console.log(`yes = ${yes}, no = ${no}`);
}

console.log('='.repeat(40));
