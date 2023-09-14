// ! var, let, const
// 1. let
let i = 5;
console.log('i equal to', i); // 5

{
  let i1 = 5;
}
console.log('i equal to', i1); // ReferenceError: i is not defined
// якщо let помістити у блок, тоді область його видимості буде тільки у межах цього блоку.
_________________________________________________________________________________________

// 2. const
const Pi = 3.14;
console.log('Pi is equal to', Pi); // 3.14

{
  const Pi = 3.14;
}
console.log('Pi is equal to', Pi); // ReferenceError: Pi is not defined
// якщо let помістити у блок, тоді область його видимості буде тільки у межах цього блоку.
__________________________________________________________________________________________

// 3. var
var j = 150;
console.log('j is equal to', j); // 150

{
  var j1 = 150;
}
console.log('j is equal to', j1); // 150
// змінна із ключовим словом var видима і поза межами блоку.

function funcField() {
var j3 = 150;
}
console.log('j3 is equal to', j3); // ReferenceError: j3 is not defined
// Областю видимості змінних, створених через var є функція, або вся програма, якщо змінна визначена поза межами функції.