// ! Promises js
// Promise - це об'єкт, який описує якусь асинхронну операцію, результат якої ми отримаємо колись згодом. Дозволяє додавати декілька обробників. Дозволяє комбінувати, запускати паралельно складні операції. Легше опрацювання помилок.

// У всіх промісах, чи промісоподібних є метод .then(), який дозволяє отримати результат промісової операції.
// thenables - об'єкти, які мають метод .then . Вони переважно не асинхронні.
function doSomething(value) {
  return {
    then: function (callback) {
      callback(value);
    }
  }
}

const promise = doSomething(42);
// handle the result
promise.then((result) => console.log(value)); // 42

// Щоб створити promise нам потрібно використати конструктор: new Promise()
// Функція, яка використовується у new Promise(func), називається executor
const promise1 = new Promise((resolve, reject) => { // у функції є 2 параметри - функція resolve i reject
  if (true) {
    resolve(result); // якщо умова тру, тоді видає результат
  } else {
    reject(error); // якщо умова фолс, тоді видає помилку
  }
}) // ці функції працюють незалежно від .then

____________________________________________________________________________________________________________________
// ? У промісів є 3 стани:
// 1. pending - початковий стан, не виконаний і не відмова
// 2. fulfilled - означає, що операція пройшла успішно
// 3. rejected - означає, що операція була неуспішна, провалилася

// ? Якщо проміс уже перейшов до стану fulfilled чи rejected, він уже не може перейти до стану pending.
____________________________________________________________________________________________________________________
// ! Working with Promises
// .then:
// він завжди повертає проміс. Це проміс виконується, коли попередній проміс був успішний, чи неуспішний
// він може не мати обробника (у дужках після .then). Результат буде передано до наступного проміса.
// дані легко передаються від одного проміса до другого

function doSomething(value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  })
}

doSomething(0)
  .then() // optional handler - результат функції doSomething перейде до наступного .then у якості аргумента
  .then((res) => [res]) // результат початкового промісу ми обробляємо і перетворюємо його у масив ([0])
  .then((res) => res.concat(1)) // до попереднього результату додаємо 1 у масив ([0, 1])
  .then((res) => res.concat(2)) // до попереднього результату у кінець масиву додаємо 2 ([0, 1, 2])
  .then((res) => res.concat(3)) // до попереднього результату у кінець масиву додаємо 3 ([0, 1, 2, 3])
  .then((res) => console.log(res)) // логуємо попередній результат у консоль: [0, 1, 2, 3]
  .then((res) => console.log(res)); // якщо ми викличемо той самий код із colsole.log, то видасть у консолі: undefined. Це робиться тому, що console.log у передостанньому .then() не повертає ніякого значення, тому останній .then() нічого не отримає.

// .then() може повертати не лише значення, але і ще один проміс.
function doSomething1(value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  })
}

doSomething1(1)
  .then(value => {
    console.log(value); // 1
    return doSomething1(2) // return a promise
  })
  .then(value => {
    console.log(value); // 2
    return doSomething1(3); // return a promise
  })
  .then(value => {
    console.log(value) // 3
      return doSomething1(4); // return a promise 
  })
  // ... і так далі ...

  // ! Error Handling
  // у проміса є два аргументи, другий з них - це reject. Він може повернути якусь причину, по якій проміс зафейлився. Це можна зробити двома способами:
const promise2 = new Promise((resolve, reject) => {
  reject('error!');
})

  // 1. через другий опційний аргумент .then(result, reason)
promise2.then(null, reason => { // він повертає причину помилки
    console.error(reason); // 'error!'
})
  
// 2. через метод .catch(), який є ідентичним до методу .then(), тільки не має успішної опції.
promise2.catch(reason => {
  // error handler
  console.error(reason); // 'error!'
})

____________________________________________________________________________________________________________________
// У error handler можна передати якесь значення, тоді проміс повернеться до успішного виконання у наступному .then()
function doSomething2(value) {
  return new Promise((resolve, reject) => {
    reject(value); // значення автоматично реджектиться у першому .then()
  })
}

doSomething2(42)
  .then(
    (value) => {
      console.log(`Result: ${value}`); // will never execute
    },
    (reason) => {
      console.error(`Error: ${reason}`); // 42
      return 'recovered!'; // recover the promise
    }
  )
  .then(
    (value) => {
      console.log(`Result: ${value}`); // 'recovered!'
    },
    (reason) => {
      console.error(`Error: ${reason}`); // there is no error
    }
); 
  // ? Помилки будуть 'тихі'. Програма від помилок не впаде, якщо у промісі немає обробника помилок (error handler). Якщо ми помилку не обробляємо, то це не означає, що її там немає.
____________________________________________________________________________________________________________________
  // ! Promise.resolve(), Promise.reject() - можуть передавати примітивні значення чи об'єкти і огортати їх у проміс.
const resolved = Promise.resolve(42);
resolved.thed(value => console.log(value)); // 42

const rejected = Promise.rejected('Boom!');
resolved.catch(reason => console.error(reason)); // 'Boom!'

// Їх так само можна використати для того, щоб перетворити thenable на справжній проміс:
const thenable = {
  then: (resolve, reject) => {
    resolve(42);
  }
}

// convert to promise:
const promise3 = Promise.resolve(thenable);
promise3.then(value => console.log(value)); // 42
____________________________________________________________________________________________________________________
// ! Запуск асинхронних операцій паралельно
// ? Promise.all() чекає, поки не виконаються усі проміси. Він повертає новий проміс, коли всі проміси виконаються.

const p1 = Promise.resolve('i');
const p2 = Promise.resolve('like');
const p3 = Promise.resolve('promises!');

const p4 = Promise.all([p1, p2, p3]);

p4.then(values => {
  // передасться масив із значеннями всіх трьох промісів
  console.log(Array.isArray(values)); // true // перевіряємо, чи values це масив
  console.log((values[0])); // 'i'
  console.log((values[1])); // 'like'
  console.log((values[2])); // 'promises!'
})

// Але якщо зареджектиться один проміс, тоді це станеться з усіма
____________________________________________________________________________________________________________________
// ! Якщо у нас є два проміси, які виконують схожі операції і ми хочемо отримати результат тільки того проміса, що виконається швидше. Для цього є спеціальний метод Promise.race(масив промісів) - він створює перегони між промісами.

const pr1 = Promise.resolve('i'); // цей проміс вже виконаний, тому він найшвидший
const pr2 = new Promise((resolve, reject) => resolve('like')); // у цих двох прикладах ми використовуємо конструктор, тому це буде довше
const pr3 = new Promise((resolve, reject) => resolve('promises!'));

const pr4 = Promise.race([pr1, pr2, pr3]); // він виведе лиш значення проміса, який виконався найшвидше.

pr4.then(value => {
  console.log(value); // 'i'
})




