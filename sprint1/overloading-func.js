// ! overloading functions - перевантаження функцій
function doSomething(a, b) {
  return [a, b];
}

console.log(doSomething(3, 4)); // [3, 4]
console.log(doSomething({ a: 3, b: 4 })); // [{}, undefined]
____________________________________________________________________________________________________________________;
function doSomething({ a, b }) {
  // функція із такою ж назвою, але з аргументом у вигляді об'єкта, перепише першу функцію
  return [a, b];
}
console.log(doSomething(3, 4)); // [undefined, undefined]
console.log(doSomething({ a: 3, b: 4 })); // [3, 4]
____________________________________________________________________________________________________________________
function doSomething1(a, b) {
  if (typeof a === 'object') {
    return [a.a, a.b];
  } else {
    return [a, b];
  }
}

console.log(doSomething1({ a: 3, b: 4 }));
