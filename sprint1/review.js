// babel compiler - перетворює 2023 екмаскрипт у 2009 + мініфікує
// Функції - їх не існує у js, це різновид об'єктів
// У стрілочній функції немає свого контексту (this)

function sum(a, b) {
  return a + b;
} // undefined

const c = new sum(); // undefined // Object {}
// Коли ми пишемо біля функції ключове слово new, то до функції дописується два рядки (this = {}, return this)
function sum(a, b) {
  this = {}; // створюється новий об'єкт
  let answer = a + b;
  return this; // і повертається
}

// Обчислювальний ключ всередині об'єкта: ['a' + 'b']:5
let obj = {
  ['a' + 'b']: 5
}
obj // Object {ab: 5} // ab: 5