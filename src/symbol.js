// примитивный тип данных "Символ" создаёт уникальный идентификатор

{
  // невозможно создать два одинаковых символа, даже если им задать одинаковое имя
  let symbol = Symbol('name');
  let symbol_2 = Symbol('name');
  console.log(symbol);
  console.log(symbol_2);
}

console.log('='.repeat(50));

{
  // за исключением использования встроенного метода 'for'
  // с помощью данного метода можно найти символ из любого места в программе (из глобального реестра)
  let symbol = Symbol.for('name');
  let symbol2 = Symbol.for('name');
  console.log(symbol === symbol2); // true
}

console.log('='.repeat(50));

{
  // получить имя символа можно с помощью метода 'keyFor'
  let symbol = Symbol.for('zSymbol');
  let name = Symbol.keyFor(symbol);
  console.log(name);
}

console.log('='.repeat(50));

{
  let user = {
    username: 'r2d2',
    // В ES6 свойства объектов могут быть строками || символами
    [Symbol.for('password')]: 'c3po',
    password: 'testtest'
  };

  console.log(user);

  // получение доступа к свойству, заданному с помощью Символа
  let password = user[Symbol.for('password')];
  console.log(password); // c3po

  // получение доступа к названию свойств-символов с помощью нового метода объектов
  console.log(Object.getOwnPropertySymbols(user));
}
