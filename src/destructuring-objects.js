// деструктивное присваивание объектов
{
  let person = {
    firstName: 'Malibu',
    lastName: 'Zolo'
  };

  let { firstName, lastName } = person;

  console.log(firstName, lastName);
}

console.log('='.repeat(50));

{
  // присваивание переменных с другим именем
  let { firstName: first, lastName: last } = {
    firstName: 'Malibu',
    lastName: 'Zolo'
  };

  console.log(first, last);
}

console.log('='.repeat(50));

{
  // указание значений по умолчанию
  let { firstName: first, age = 30 } = {
    firstName: 'Malibu'
  };

  console.log(first, age);
}

console.log('='.repeat(50));

{
  // динамическое объявление имени свойства
  let { ['first' + 'Name']: first } = {
    firstName: 'Malibu'
  };

  console.log(first);
}

console.log('='.repeat(50));

{
  // извлечение значения свойств вложенных объектов
  let user = {
    firstName: 'Malibu',
    lastName: 'Zolo',
    social: {
      facebook: 'zolo_O',
      twitter: 'liberta'
    }
  };

  let {
    firstName,
    lastName,
    social: { facebook: fb, twitter }
  } = user;

  console.log(firstName, lastName, fb, twitter);
}

console.log('='.repeat(50));

{
  // деструктивное присваивание объектов в параметры функции
  function post(url, { data: { firstName, lastName }, cache }) {
    // к значению свойства data доступа не будет
    console.log(url);
    console.log(firstName, lastName);
    console.log(cache);
  }

  let user = {
    firstName: 'Malibu',
    lastName: 'Zolo',
    social: {
      facebook: 'zolo_O',
      twitter: 'liberta'
    }
  };

  let res = post('api/users', { data: user, cache: false });
}

console.log('='.repeat(50));

{
  // возврат нескольких значений из функции
  function getUserInfo() {
    return {
      firstName: 'Malibu',
      lastName: 'Zolo',
      social: {
        facebook: 'zolo_O',
        twitter: 'liberta'
      }
    };
  }

  let {
    firstName,
    lastName,
    social: { twitter: tw }
  } = getUserInfo();

  console.log(firstName, lastName, tw);
}
