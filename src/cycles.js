// array cycles

{
  let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

  // обычный цикл for..
  console.info('%c for', 'background: #222; color: #bada55');
  for (let i = 0; i < xmen.length; i++) {
    const xMen = xmen[i];
    console.log(xMen);
  }
  console.log('='.repeat(12));

  // цикл for..in
  console.info('%c for..in', 'background: #222; color: #bada55');
  for (const key in xmen) {
    if (xmen.hasOwnProperty(key)) {
      const element = xmen[key];
      console.log(element);
    }
  }
  console.log('='.repeat(12));

  // метод массивов forEach
  console.info('%c forEach', 'background: #222; color: #bada55');
  xmen.forEach(xman => {
    console.log(xman);
  });
  console.log('='.repeat(12));

  // цикл из ES6 for..of
  console.info('%c for..of', 'background: #222; color: #bada55');
  for (const xman of xmen) {
    console.log(xman);
  }
}
