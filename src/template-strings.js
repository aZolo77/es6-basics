// Шаблонные строки

function greet(name) {
  // можно применять все методы строк
  console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

// поддержка многострочности
function createEmail(to, from, subject, msg) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${msg}
  `);
}

createEmail('malibu@mail.com', 'zolo@mail.com', 'hello', 'How r u?');

// можно применять интерполяцию любого выражения или функции
function add(x, y) {
  console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('2', '5');

// Тегирование
let name = 'Bill';
console.log(upperName`Hello ${name} darling`);

// функция принимает массив строковых литераллов
function upperName(literals, value) {
  console.log(literals);
  return literals[0] + value.toUpperCase() + literals[1];
}
