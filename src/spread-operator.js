// Оператор разворота позволяет разворачивать элементы массива, передавать его в качестве аргумента в функцию

let staticLanguages = ['C', 'C++', 'JAVA'];
let dynamicLanguages = ['JS', 'PHP', 'RUBY'];
let languages = [...staticLanguages, 'C#', ...dynamicLanguages, 'PYTHON']; // concat

console.log(languages);

function add(x, y, z) {
  console.log(x + y + z);
}

let nums = [1, 2, 3];

add(...nums);
