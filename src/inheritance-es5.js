// Функция-конструктор
function Task(title) {
  this._title = title;
  this._done = false;
  Task.count += 1;
}

// Геттер-Сеттер
Object.defineProperty(Task, 'title', {
  get: function() {
    return this._title;
  },
  set: function(val) {
    this._title = val;
  }
});

// публичный метод
Task.prototype.complete = function() {
  this._done = true;
};

// статический метод
Task.getDefaultTitle = function() {
  return 'Задача';
};

// статическое свойство
Task.count = 0;

// ====================
// наследующий подкласс
function SubTask(title, parent) {
  // вызов конструктора родительского класса
  Task.call(this, title);
  this._parent = parent;
}

// отнаследовать родительские свойства и методы
SubTask.prototype = Object.create(Task.prototype);
// В конструктор записываем Функцию-Конструктор SubTask
SubTask.prototype.constructor = SubTask;

var task = new Task('Изучить Javascript');
var subTask = new SubTask('Изучить ES6', task);

console.log(task);
console.log(subTask);
