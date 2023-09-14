// ! true & false
console.log(1 == 1); // true
console.log(1 === 1); // true

console.log(1 == '1'); // true
console.log(1 === '1'); // false


// Можна використовувати метод Boolean(value), щоб визначити, яке булеве значення має введене значення (true чи false)
// ? Truthy values
console.log(Boolean(1)); // true
console.log(Boolean('fdssfd')); // true

// Оператор !! це те саме, що написати Boolean(value)
console.log(!!true); // true
console.log(!!{}); // true - тобто, порожній об'єкт повертає true
console.log(!![]); // true
console.log(!!new Date()); // true
console.log(!!'0'); // true - це не number, а string і не порожній, тому true
console.log(!!42); // true
console.log(!!-42); // true
console.log(!!3.14); // true
console.log(!!-3.14); // true

// ? Falsy values
console.log(!!0); // false
console.log(!!-0); // false
console.log(Boolean('')); // false
console.log(!true); // false
console.log(!!false); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false





