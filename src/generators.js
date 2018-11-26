// "Генераторы" - новый вид функций. Могат приостанавливать выполнение, возвращать промежуточный результат и возобновлять своё выполнение в впроизвольный момент времени

{
  function* generate() {
    // Генераторы работают как фабрика итераторов
    console.log('Start');
    yield 1; // ключевое слово, сохраняющее внутренне состояние функции
    yield 2;
    yield 3;
    console.log('Finish');
  }

  // console.log(generate());

  let iterator = generate();
  iterator.next(); // Start [value: 1] // промежуточный результат

  console.log(iterator.next().value); // [value: 2]
  console.log(iterator.next().value); // [value: 3]

  iterator.next(); // Finish
}

console.log('='.repeat(50));

{
  // перебор знаечний с помощью 'функции-генератора'
  function* range(start, end) {
    let current = start;
    while (current <= end) {
      yield current++; // возврат промежуточного значения
    }
  }

  for (const num of range(1, 10)) {
    let parrot;
    num > 1 ? (parrot = 'parrots') : (parrot = 'parrot');
    console.log(`${num} ${parrot}`);
  }
}

console.log('='.repeat(50));

{
  // генератор в качестве метода объекта
  let numbers = {
    *range(start, end) {
      let current = start;
      while (current <= end) {
        yield current++;
      }
    }
  };

  for (const num of numbers.range(1, 10)) {
    let parrot;
    num > 1 ? (parrot = 'parrots') : (parrot = 'parrot');
    console.log(`${num} ${parrot}`);
  }
}

console.log('='.repeat(50));

{
  // "Ручной Генератор"
  function generate() {
    let current = 1;
    console.log('Start');

    return {
      [Symbol.iterator]() {
        return {
          next() {
            let result = {
              value: undefined,
              done: true
            };

            if (current <= 3) {
              result.value = current;
              result.done = false;
              current++;
            } else {
              result.value = undefined;
              result.done = true;
              console.log('Finish');
            }

            return result;
          }
        };
      }
    };
  }

  let iterator = generate()[Symbol.iterator]();
  console.log(iterator.next().value); // [value: 1]
  console.log(iterator.next().value); // [value: 2]
  console.log(iterator.next().value); // [value: 3]

  iterator.next(); // Finish
}

console.log('='.repeat(50));
