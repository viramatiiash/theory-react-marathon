// ! Spread operator & rest operator

import { __ } from 'types-ramda';

// Додавання елементів існуючого масиву в новий масив - spread operator
let additionalSubjects = ['Philosophy', 'Phsychology'];
let subjects = ['Math', 'Ukrainian language', 'Chemistry', ...additionalSubjects];
console.log(subjects); // ['Math', 'Ukrainian language', 'Chemistry', 'Philosophy', 'Psychology']
// Тут ми використовуємо spread operator. Вже існуючий масив розгортається у масиві, де виконаний спред оператор. Цей оператор можна розмістити будь-де у масиві, де ми хочемо розгорнути інший масив (перед елементами, серед елементів, або після)

let additionalSubjects1 = ['Philosophy', 'Phsychology'];
let subjects1 = [
  'Math',
  ...additionalSubjects1,
  'Ukrainian language',
  'Chemistry'
];
console.log(subjects1); // ['Math', 'Ukrainian language', 'Philosophy', 'Psychology', 'Chemistry']
____________________________________________________________________________________________________________________
// Копіювання масиву - spread operator
let numbers1 = [1, 2, 3];
let numbers2 = [...numbers1]; // масив numbers1 копіюється у numbers2.
console.log(numbers1); // [1, 2, 3]
console.log(numbers2); // [1, 2, 3]
____________________________________________________________________________________________________________________// Конкатенація масивів - spread operator
let numbers3 = [1, 2, 3];
let numbers4 = [4, 5, 6];
console.log(numbers3.concat(numbers4)); // [1, 2, 3, 4, 5, 6]
console.log([...numbers3, 10, ...numbers4]); // [1, 2, 3, 10, 4, 5, 6]
____________________________________________________________________________________________________________________
// Передача елементів масиву в ролі аргументів функції - spread operator
function perimeter(a, b, c) {
  console.log(a + b + c);
}
let args = [2, 3, 4];
perimeter(...args); // 9  / спред оператор передає всі наявні елементи масиву args в якості аргументів функції perimeter.
____________________________________________________________________________________________________________________
// rest - збирає окремі елементи в масив
function addExclamation(...arr) {
  return arr.map(el => el + '!');
}

console.log(addExclamation(1, 3, 'hello', 'rest')); // ['1!', '3!', 'hello!', 'rest!']