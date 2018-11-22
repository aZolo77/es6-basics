// переменные объявленные с помощью let не поднимаются

var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  // let видны только в пределах кода блока
  var button = buttons[i];
  button.innerText = i + 1 + ' button';
  button.onclick = function(e) {
    console.log(i + 1);
  };
}
