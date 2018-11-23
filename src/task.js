// function declaration
// function Task() {}

// function expression
// let Task = function Task() {};

// =================================

// class declaration
// class Task {
//   constructor() {
//     console.log('Creating a task');
//   }
// }

// =================================

// class expression
let Task = class {
  constructor() {
    console.log('Creating a task');
  }
};

let SubTask = class extends Task {
  constructor() {
    super();
    console.log('Creating a subtask');
  }
};

let task = new Task();
let subTask = new SubTask();

console.dir(task);
console.dir(subTask);
