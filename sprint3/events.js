// ! Events
// Приклад асихронної функції - івенти
const btn = document.getElementById('btn');
btn.onclick = (event) => console.log(event); 

// Callback function - функція, що часто виступає в якості аргумента. Ці функції викликаються після якоїсь асинхронної операції.

import { readFile } from 'fs';

readFile('file.txt', (err, contents) => {
  if (err) {
    throw err;
  }
  console.log(contents);
})

// Функції у функціях
function getPart1(callback) {
  sth.get('...', callback);
}
function getPart2(callback) {
  sth.get('...', callback);
}
function getPart3(callback) {
  sth.get('...', callback);
}

getPart1(function () {
  getPart2(function () {
    getPart3(function () {
      // Add value
    })
  })
}) 
// Таким чином може зробитися callback hell. Щоб цього не сталося, з'явилися проміси.
