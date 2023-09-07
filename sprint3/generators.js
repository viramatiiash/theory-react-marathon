// ! Generators basics
// Generator function це функція, яка повертає об'єкт, що називається Generator. Щоб промаркувати цю особливу функцію, до ключового слова додається зірочка: function* generatorFunction() {}. Або може бути зірочка перед назвою функції: function *generatorFunction() {}
// Перший варіант більш розповсюджений

const { __ } = require('ramda');

// Якщо у функції упускається ключове слово return, то у консолі видасть undefined
// Функція-генератор не повертає значення одразу, замість цього повертається об'єкт Генератор, який можна ітерувати (проходитись по всіх його елементах).

function* generatorFunction() {
  return 'Hallo, Generator!';
}

// Assign the Generator object to generator
const generator = generatorFunction();

console.log(generator); // Object [Generator] {}

console.log(generator.next()); // {value: 'Hello, Generator!', done: true} ітератори мають метод .next(), який показує наступне значення. Оскільки генератор є ітератором, то і він має цей метод. Property done покаже true, якщо у генераторі більше немає, що повертати. Якщо є ще значення, які можна повернути, то буде done: false.
____________________________________________________________________________________________________________________
// ? yield operator (вихід). Він зупиняє функцію генератора і повертає значення, що слідує після ключового слова yield.
function* generatorFunction1() {
  yield 'Hello' // покаже перше це
  yield ','// друге це
  yield 'World' // третє це

  return '!' // аж вкінці заретурнить '!'

  const generator1 = generatorFunction1();

  // Call next 4 times
  generator1.next(); // {value: 'Hello' , done: false}
  generator1.next(); // {value: ',' , done: false}
  generator1.next(); // {value: 'World' , done: false}
  generator1.next(); // {value: '!' , done: true}
}

____________________________________________________________________________________________________________________
// ! Generators Advanced
// По Arrays, Maps, Sets, Generators можна проходитися через for...of
// spread operator також можна використати, щоб назначити значення генератора до масиву
// і for...of і spread operator не будуть повертати значення, які ретурняться у генераторі.

// 1. for...of
for (const value of generator) {
  console.log(value);
}
// Hello
// ,
// World

// 2. spread operator
const values = [...generator]
console.log(values); // (3) ['Hello', ',', 'World']

// ? Методи об'єктного генератора
// 1. .next() - ретурнить наступне значення генератора
// 2. .return() - повертає значення у генераторі і зупиняє генератор
// 3. .throw() - показує помилку і зупиняє генератор

// ? Стани генератора
// 1. suspended (підвішений, висячий) - якщо closed не стався, то генератор так ніби спить, поки не буде наступного next(). Тоді генератор прокидається, дає нам значення і знову засинає.
// 2. closed - або виникла помилка, або ретурн, або закінчились значення, які цей генератор міг повертати
____________________________________________________________________________________________________________________
// ! Yield delegate() - можна у одному генераторі приєднатися до іншого
// Функція генератора, до якої ми будемо переходити
function* delegate() {
  yield 3
  yield 4
}

// Основна початкова функція генератора
function* begin() {
  yield 1
  yield 2
  yield* delegate() // з допомогою * ми приєднуємося, або переходимо на цьому моменті у інший генератор
}

// Проходимося по початковому генераторі
const generator4 = begin();
for (const value of generator4) {
  console.log(value);
}

// 1
// 2
// 3
// 4
____________________________________________________________________________________________________________________
// ! За допомогою генераторів можна створювати безкінечні потоки даних. Для цього достатньо створити безкінечний цикл всередині генератора.
// Create a fibonacci generator function
function* fibonacci() {
  let prev = 0
  let next = 1

  yield prev // повернути 0
  yield next // повернути 1
  // Add previous and next values and yield the forever
  while (true) {
    const newVal = next + prev
    yield newVal
    prev = next
    next = newVal
  }
}

// Print the first 10 values of fibonacci
const fib = fibonacci();

for (let i = 0; i < 10; i++){
  console.log(fib.next().value); // це масив, тому можна використовувати синтаксис масиву
}

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34