// ! Pure function має два критерії:
// 1. Ця функція завжди має повертати один і той самий результат. Такі функції допомагають уникнути багів при розробці.

const sum = (a, b) => a + b;
console.log(sum(3, 5)); // 8
console.log(sum(3, 5)); // 8
console.log(sum(3, 5)); // 8

// Якщо функція залежить від зовнішніх даних, тоді це вже не чиста функція, тому що при тих самих вхідних параметрах, вихід буде змінюватися. Наприклад:

let c = 1;

const sum1 = (a, b) => a + b + c;
console.log(sum1(3, 5)); // 9

c = 4;
console.log(sum1(3, 5)); // 12


