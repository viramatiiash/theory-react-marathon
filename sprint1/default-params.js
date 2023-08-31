// ! Default parameters of functions
// 1.
function pow(a, b) { 
  return a ** b;
}
console.log(pow(2, 3)); // 8

// 2.
function pow1(a, b) {
  console.log(a); // undefined
  return a ** b;
}
console.log(pow1()); // NaN - без аргументів консоль буде показувати помилку обчислень

// 3.
function pow2(a = 1, b = 1) { // дефолтні параметри функції
  return a ** b;
}
console.log(pow2()); // 1

// 4.
function pow2(a = 1, b = 1) {
  console.log(a);
  return a ** b;
}
console.log(pow2(2)); // 2
// якщо аргументів два, а вводиться тільки один, тоді перший аргумент отримує введене значення, а другий буде мати дефолтне.

// 5.
function pow3(a = 1, b = 1) {
  console.log(a);
  return a ** b;
}
console.log(pow3(undefined, 2)); // Якщо ми хочемо вказати тільки другий параметр, а перший, щоб залишився із дефолтним значенням, нам потрібно перший параметр вказати як undefined

// 6. 
function pow4(a = 1, b = a + 1) {
  console.log(a); // 1
  console.log(b); // 2

  return a ** b;
}
console.log(pow4(undefined, 2)); // дефолтне значення можуть бути також обчислення, якийсь простий вираз

// 7. arguments
function pow5(a = 1, b = 1) {
console.log(arguments); // [Arguments] {'0': undefined, '1': 2}

  return a ** b;
}
console.log(pow5(undefined, 2)); // 1
// arguments - це псевдомасив. Ми не можемо на ньому застосовувати методи масивів. Але він має властивість length, тому ми можемо перебрати у циклі всі аргументи функції

// 8. arguments 2
function pow6(a = 1, b = 1) {
  console.log(arguments); // [Arguments] {'0': 2, '1': 3}

  return arguments[0] ** b;
}
console.log(pow6(2, 3)); // 8

