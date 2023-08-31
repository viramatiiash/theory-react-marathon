import { compose, pipe } from 'ramda';

// ! Компонування функцій - в одну
function a(value) {
  value += 'a';
  return value;
}

function b(value) {
  value += 'b';
  return value;
}

function c(value) {
  value += 'c';
  return value;
}

console.log(a('_')); // _a
console.log(b(a('_'))); // _ab
console.log(c(b(a('_')))); // _abc

// ? Спеціальна аплікація для функцій - npm i ramda
const f = compose(c, b, a); // функції мають іти у тій самій послідовності, що і в записі вище.
console.log(f('_'));
// _a
// _ab
// _abs

// Можна і console.log туди додати
compose(console.log, c, b, a)('_'); // compose працює справа наліво
pipe(a, b, c, console.log)('_'); // pipe працює зліва направо

