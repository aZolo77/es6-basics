// Syntactic sugar (Классы) - функции (шаблоны) по которым создаются объекты
// название свойст и методов у Классов может быть вычислено динамически с помощью '[]'

class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title;
    this._done = false; // личное свойство
    // статическое свойство вызывается при каждом создании нового экземпляра
    Task.count += 1;
  }

  // Публичный метод доступен экземплярам Класса
  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполнена`);
  }

  // Статический метод доступен только внутри Класса, служит вспомогательной функцией
  static getDefaultTitle() {
    return 'Задача';
  }

  // Фильтры для новых свойств (Геттер/Сеттер)
  get done() {
    let ttl = this.title;
    return this._done
      ? `Задача "${ttl}" выполнена`
      : `Задача "${ttl}" не выполнена`;
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
      console.error('Ошибка! Укажите значение true или false');
    }
  }
}

// Статические свойства доступны только внутри Класса
Task.count = 0;

let task_1 = new Task('Убрать комнату');

let task_2 = new Task('Купить продукты');

let task_3 = new Task();

console.log(task_1);
console.log(task_2);
console.log(task_3);

console.log(Task.count);

task_1.complete();

console.log(task_1.done);
console.log(task_2.done);
