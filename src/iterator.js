{
  // wellknown symbols
  let obj = {
    iterator: 0,
    // данное свойство, с внутренним методом next(), любого итерируемого объекта возвращает объект, который называется "Итератор" и имеет 2 свойства: done и value
    [Symbol.iterator]() {}
  };

  console.log(obj);
}

console.log('='.repeat(50));

{
  let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

  // цикл из ES6 for..of
  console.info('%c for..of', 'background: #222; color: #bada55');
  for (const xman of xmen) {
    console.log(xman);
  }

  console.log('='.repeat(20));

  // console.log(typeof xmen[Symbol.iterator]); // function
  let iterator = xmen[Symbol.iterator](); // присваиваем значение встроенного свойства-метода
  // console.log(iterator.next().value); // Cyclops
  // console.log(iterator.next().value); // Wolverine
  // console.log(iterator.next().value); // Rogue

  let next = iterator.next();
  while (!next.done) {
    console.log(next.value);
    next = iterator.next(); // присваиваем следующее значение
  }
}

console.log('='.repeat(50));

// ручное создание итератора
{
  let randomGenerator = {
    generate() {
      return this[Symbol.iterator]();
    },
    [Symbol.iterator]() {
      let count = 0;
      return {
        next() {
          let value = Math.ceil(Math.random() * 100);
          let done = count > 9;
          count += 1;
          return {
            value,
            done
          };
        }
      };
    }
  };

  let random = randomGenerator.generate();
  console.log(random.next().value);
  console.log(random.next().value);
  console.log(random.next().value);

  // for (const item of randomGenerator) {
  //   console.log(item);
  // }
}

console.log('='.repeat(50));

{
  // класс Итератор
  class ArrayIterator {
    constructor(arr) {
      // сортировка по алфавиту
      this.arr = arr.map(item => item).sort();
      this.index = 0;
    }

    next() {
      let res = {
        value: undefined,
        done: true
      };

      if (this.index < this.arr.length) {
        res.value = this.arr[this.index];
        res.done = false;
        this.index++;
      }

      return res;
    }
  }

  // класс с итератором, созданным вручную
  class TaskList {
    constructor() {
      this.tasks = [];
    }

    addTasks(...tasks) {
      this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
      return new ArrayIterator(this.tasks);
    }
  }

  let taskList = new TaskList();
  taskList.addTasks('Изучить JS', 'Изучить ES6', 'Почитать Сократа');

  for (const task of taskList) {
    console.log(task);
  }
}
