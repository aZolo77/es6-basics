// == создание генератора с помощью function declaration
// let generator = function*() {};

// == определение метода-генератора у объекта
// let obj = {
//   *generator() {}
// }

// == создание метода "Генератор" в классе
// class SomeClass {
//   *generator() {}
// }

// =====================================================
{
  function* generator() {
    let result = 1 + (yield); // присваивание возвращаемого значения
    console.log(`Result: ${result}`);
  }

  let iterator = generator();
  console.log(iterator.next());
  console.log(iterator.next(1)); // result == 1 + 1
}

console.log('='.repeat(50));

{
  // последовательная передача значений в объекты, возвращаемый итератором yield
  function* generator() {
    let array = [yield, yield, yield];
    console.log(array[0]); // 1
    console.log(array[1]); // 2
    console.log(array[2]); // 3
  }

  let iterator = generator();
  console.log(iterator.next()); // запуск генератора
  console.log(iterator.next(1));
  console.log(iterator.next(2));
  console.log(iterator.next(3));
}

console.log('='.repeat(50));

{
  function* generator() {
    yield 42;
    yield* [1, 2, 3]; //делегирование итераторов - отдаёт каждый элемент массива по отдельности
    yield 43;
  }

  let iterator = generator();
  console.log(iterator.next().value); // 42
  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2
  console.log(iterator.next().value); // 3
  console.log(iterator.next().value); // 43
}

console.log('='.repeat(50));

{
  // можно передать Генератор в теле другого Генератора
  function* generateArray() {
    yield* [1, 2, 3];
  }

  function* generator() {
    yield 42;
    yield* generateArray();
    yield 43;
  }

  let iterator = generator();
  console.log(iterator.next().value); // 42
  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2
  console.log(iterator.next().value); // 3
  console.log(iterator.next().value); // 43
}

console.log('='.repeat(50));

{
  // использование дополнительных методов Генератора: return
  function* generator() {
    yield 1;
    yield 2;
    yield 3;
  }

  let iterator = generator();
  console.log(iterator.next()); // 1
  console.log(iterator.return()); // остановка Генератора
  console.log(iterator.next());
}

console.log('='.repeat(50));

{
  // использование дополнительных методов Генератора: throw
  function* generator() {
    try {
      yield 1;
      yield 2;
      yield 3;
    } catch (error) {
      // поймать ошибку прямо в теле функции
      console.error(error.message);
    }
  }

  let iterator = generator();
  console.log(iterator.next()); // 1
  console.log(iterator.throw(new Error('error ;) MF'))); // можно отправить ошибку
  console.log(iterator.next());
}
