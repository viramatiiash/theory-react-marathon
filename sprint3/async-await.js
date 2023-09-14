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



function job() {
  return new Promise(function (resolve, reject) {
    reject();
  })
}

let promise = job();

promise
  .then(function () {
    console.log('Success 1');
  })
  .then(function () {
    console.log('Success 2');
  })
  .then(function () {
  console.log(('Success 3'));
    })
  .then(function () {
  console.log(('Error 1'));
  })
  .then(function () {
  console.log(('Success 4'));
  })



function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');

    } else {
      reject('error');
      }
    })
}
  
let promise1 = job(true);

promise1
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return 'Error caught'
  })
   .then(function (data) {
    console.log(data);
    return job(true);
   })
   .catch(function (error) {
    console.log(error);

   })
  

let fs = require('fs');
console.log('1');

fs.readFile('test.txt', 'utf8', function (error, data) {
  if (error) {
    throw error;
  }
  console.log('2');
})
console.log('3');


async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  })
}

result = await promise;
console.log(result);

f();


function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);



async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();


try {
  console.log('Start program');
  let result = sum(10, 20);
  console.log('End program');
} catch (error) {
  console.log('We caught a bug!');
} finally {
  console.log('Finish!');
}

const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();


const teams = [
  { name: 'Team 1', members: ['Paul', 'Lisa'] },
  { name: 'Team 2', members: ['Laura', 'Tim'] }
  
]

function* getMembers(members) {
  for (let i = 0; i < members.length; i++){
    yield members[i];
  }
}

function* getMembers(teams) {
  for (let i = 0; i < teams.length; i++){
    yield members[i];
  }
}