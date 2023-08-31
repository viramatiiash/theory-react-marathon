// ! Function declaration & expression
// Синтаксис у цих двох видів функцій дуже схожить. Найголовніша відмінність полягає у назві функції, яку можна пропустити у функціональних виразах, щоб створити анонімну функцію. Функціональний вираз може бути використаний як функція, яку можна викликати негайно, тобто, вона відпрацьовує як-тільки назначається.


// ! Hoisting - підняття функції
// * 1. function declarations can be hoisted
function catName(name) {
  console.log('My cat\'s name is ' + name);
}

catName('Tiger'); // My cat's name is Tiger

catName1('Tiger');
function catName1(name) {
  console.log("My cat's name is " + name);
} // My cat's name is Tiger
// Немає значення, чи виклик функції є після неї, чи перед нею. Функція все одно відпрацює навіть до моменту її створення.
____________________________________________________________________________________________________________________

// * 2. function expressions cannot be hoisted
// Ми не можемо використовувати функціональні вирази перед тим, як ми їх створили.

someFE();
var someFE = function () {
  console.log('FE executed');
} // Uncaught TypeError: someFE is not a function
____________________________________________________________________________________________________________________

// * 3. Підняття змінних
console.log(num);
var num; // declaration - оголошення
num = 6; // initialization - присвоєння значення
// у консолі покаже undefined

console.log(num1);
var num1 = 6; // тут нічого не зміниться, консоль покаже undefined


// ? Підняття змінних let i const
console.log(foo); // Uncaught ReferenceError: foo is not defined
let foo = 2;

console.log(foo1); // Uncaught ReferenceError: foo1 is not defined
const foo1 = 2;
