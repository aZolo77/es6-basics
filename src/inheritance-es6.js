// В ES6 Классы не поднимаются!! Нельзя использовать Класс до его объявления.
// Классы не засоряют глобальное пространство имён
class Task {
  constructor(title) {
    this._title = title;
    this.done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  get title() {
    return this._title;
  }

  set title(val) {
    this._title = val;
  }

  static getDefaultTitle() {
    return 'Задача';
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполнена`);
  }
}

Task.count = 0;

// наследуемый Класс, не имея своего конструктора, всегда использует конструктор родительского Класса
class SubTask extends Task {
  constructor(title, parent) {
    // super() должен идти первой строчкой в конструкторе подкласса
    super(title);
    this.parent = parent;
    console.log('Создание подзадачи');
  }

  complete() {
    // D.R.Y - Don't Repeat Yourself
    super.complete();
    // небольшое изменение родительского метода
    console.log(`Подзадача "${this.title}" выполнена`);
  }
}

let task = new Task('Изучить Javascript');
let subTask = new SubTask('Изучить ES6', task);

// вызов статического метода и статического свойства у подкласса
console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

// подклассы могут наследовать свойства, методы (в том числе статические), геттеры и сеттеры родителя
task.complete();
subTask.complete();

console.log(task);
console.log(subTask);
