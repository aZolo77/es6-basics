let firstName = 'Bill',
  lastName = 'Gates',
  email = 'billgates@microsoft.com';

// если название свойства совпадает с названием переменной, можно указать его без двоеточия и последующего значения (оно само подставится)
let person = {
  firstName,
  lastName,
  email,
  // методы также можно указывать без добавления слова function
  sayHello() {
    console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
  },
  // ES6 "свойства-методы"
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set newFirstName(value) {
    this.firstName = value;
  }
};

// ES5 добавление метода, который снаружи выглядит как свойство и вызывается без круглых скобок

// Object.defineProperty(person, 'fullName', {
//   get: function() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function(value) {
//     this.firstName = value;
//   }
// });

console.log(person);
person.sayHello();

// добраться до значения свойства объекта можно с помощью объявления переменной, которая в качестве значения принимает название данного свойства

let property_1 = 'firstName';
console.log(person[property_1]); // == person['firstName']

// динамическое указание названия свойства объекта
property_2 = 'firstName';
let person_2 = {
  [property_2]: 'Gilly' // == person_2['firstName']
};

// создание динамических свойств и методов с помощью функции
function createCar(property, value) {
  // let car = {};
  // car[property] = value;
  // return car;

  return {
    [property]: value,
    ['_' + property]: value,
    [property.toUpperCase()]: value,
    ['get' + property]() {
      return this[property];
    }
  };
}

console.log(createCar('vin', 1));
