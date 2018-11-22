// For..in перебирает ключи
let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (let key in browsers) {
  console.log(browsers[key]);
}

console.log('='.repeat(40));

// For..of перебирает значения
for (let item of browsers) {
  console.log(item);
}

console.log('='.repeat(40));
