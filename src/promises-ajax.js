let movieList = document.getElementById('movies');

function addMovieList(movie) {
  let img = document.createElement('img');
  img.src = movie.Poster;
  movieList.appendChild(img);
}

function getData(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        res(json.Search);
      } else {
        rej(xhr.statusText);
      }
    };

    xhr.onerror = function(error) {
      rej(error);
    };

    xhr.send();
  });
}

let batman = getData('http://www.omdbapi.com/?s=batman&apikey=278351e1');
let superman = getData('http://www.omdbapi.com/?s=superman&apikey=278351e1');

// batman
//   .then(movies => {
//     movies.forEach(movie => {
//       addMovieList(movie);
//     });
//   })
//   .catch(err => console.error(err));

// superman
// .then(movies => {
//   movies.forEach(movie => {
//     addMovieList(movie);
//   });
// })
// .catch(err => console.error(err));

// "Гонка"
Promise.race([batman, superman])
  .then(movies => {
    movies.forEach(movie => {
      addMovieList(movie);
    });
  })
  .catch(err => console.error(err));

/*
function go(num) {
  return new Promise((res, rej) => {
    let delay = Math.ceil(Math.random() * 3000);
    console.log(num, delay);
    setTimeout(() => {
      if (delay > 2000) {
        rej(num);
      } else {
        res(num);
      }
    }, delay);
  });
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

// Поставить promises в очередь - вернётся массив со значениями из данных промисов или ошибку
Promise.all([p2, p1, p3])
  .then(value => console.log(value))
  .catch(error => console.error(error));

// Вернётся первый сработавший промис
Promise.race([p2, p1, p3])
  .then(value => console.log(value))
  .catch(error => console.error(error));
*/
