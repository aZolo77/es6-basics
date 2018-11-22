// Параметры по-умолчанию [default]
function greeting(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`);
}

greeting('Hi', 'Bill');
greeting(undefined, 'Bill');
greeting('Hi');

// Оставшиеся параметры [rest]
// превращает оставшиеся параметры в массив
function sum_1(...values) {
  let res = 0;

  values.forEach(function(num) {
    res += num;
  });

  console.log(res);
}

function sum_2(...values) {
  console.log(
    values.reduce(function(prev, current) {
      return prev + current;
    })
  );
}

sum_1(4, 9, 1, 1);
sum_2(15, 10, 5, 9);
