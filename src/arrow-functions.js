let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 45;

let log = () => console.log('Logging');

let multiply = (x, y) => {
  let res = x * y;
  return res;
};

// при возврате литерала объекта, его необходимо обернуть в круглые скобки
let getPerson = () => ({ name: 'Zolo' });

// IIFE
(() => console.log('IIFE'))();

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

// перебор массива
nums.forEach(num => (sum += num));

// операция над каждым элементом массива и возврат изменённого массива
let squared = nums.map(n => n * n);

let person = {
  name: 'Malibu',
  greet: function() {
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
      // значение this берётся из контекста, в котором объявлена стрелочная функция
      console.log(this);
    }, 0);
  }
};

person.greet();

// стрелочные функции нельзя рассматривать как конструкторы объектов (new)
// со стрелочными функциями нельзя использовать методы bind, call и apply, так как мы не можем изменить значение this
