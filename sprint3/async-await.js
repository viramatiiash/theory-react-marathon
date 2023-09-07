// ! async & await
// async функція буде повертати promise, тому не потрібно створювати проміси самостійно

// promise way
Promise.resolve('Hello');

// is equal to
async function greet() {
  return 'Hello';
}
// тобто, вже не потрібно писати складний конструктор промісів, а писати просту функцію лиш із ключовим словом async

const one = () => Promise.resolve('One!');

async function asyncTest() {
  const res = await one(); // функція почекає виконання функції one і тільки тоді продовжить виконуватися.
  console.log(res);
  if (res === 'One!') {
    return 'Two'; // цей результат також буде огорнутий в проміс, тому ми можемо ще десь використати await
  }
}

// await in global scope works only in browsers,
// in NodeJS await in global scope is experimental
const result = await asyncTest(); // One! // перше результат виб'є не результат цілої функції asyncTest(), а результат першого await, тобто функції one()
console.log(result); // Two // коли вже перший раз відпрацює другий await, тоді у консолі покаже вже результат цілої функції asyncTest()

// ? Проте async/await це просто синтаксичний цукор для промісів, тому ми з ними можемо так само поводитися, як і з промісами
// Продовження коду вище до const result = await ...

asyncTest().then(result => { // One!
  console.log(result); // Two
});
____________________________________________________________________________________________________________________
// ! Error Handling
// ? Функції async/await дозволяють опрацьовувати помилки як у синхронному коді - try...catch

async function thisThrows() {
  throw new Error('Thrown from thisThrows()');
}

async function run() {
  try {
    await thisThrows(); // ми мусимо дочекатися опрацювання помилки. Якщо забрати ключове слово await, то код після цього опрацюється, а помилка ні.
  } catch (e) { // сюди передається наша помилка
    console.error(e);
  } finally {
    console.log('We do cleanup here');
  }
}

run()