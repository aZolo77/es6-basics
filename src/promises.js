// Обещания

// пример без промисов - на cb-функциях
/*
{
  function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления на визу...');

    setTimeout(function() {
      // 50% random
      Math.random() > 0.5
        ? resolve({})
        : reject('В визе отказано: нехватка документов');
    }, 2000);
  }

  function bookHotel(visa) {
    console.log(`Забронировать отель`);
  }

  function buyTickets() {
    console.log(`Купить билеты на самолёт`);
  }

  // callbackHell
  applyForVisa(
    {},
    function(visa) {
      console.info(`Виза получена`);
      bookHotel(
        visa,
        function(reservation) {
          buyTickets(reservation, function() {}, function() {});
        },
        function(error) {}
      );
    },
    function(reason) {
      console.error(reason);
    }
  );
}

console.log('='.repeat(50));
*/

// пример с промисами
{
  function applyForVisa(documents) {
    console.log('Обработка заявления на визу...');
    // создаём промис
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        // 50% random
        Math.random() > 0
          ? resolve({})
          : reject('В визе отказано: нехватка документов');
      }, 2000);
    });
    // возвращаем промис
    return promise;
  }

  // результат вызова функции - объект "Обещание" с предопределёнными методами
  applyForVisa({})
    .then(getVisa) // автоматически создаётся новое обещание, которое по цепочке передаётся дальше
    .then(bookHotel) // бронь отеля
    .then(buyTickets) // покупка авиабилетов
    .catch(error => console.error(error))
    .then(() => console.log('Я ещё тут')); // сюда код придёт в любом случае!!

  function getVisa(visa) {
    console.log(`Виза получена`);
    // можно "вручную" создать и вернуть "обещание"
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(visa), 2000);
    });
  }

  function bookHotel(visa) {
    console.log(visa);
    console.log(`Забронировать отель`);
    return Promise.resolve('Отель забронирован'); // можно сразу вернуть resolve
    // return {}; // передаём данные в следующее обещание
  }

  function buyTickets(booking) {
    console.log(`Бронь:`, booking);
    console.log(`Купить билеты на самолёт`);
    return Promise.reject('Билеты закончились');
  }
}
