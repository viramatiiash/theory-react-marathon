// ! Ternary operator
const number = 1;
const result = 'The number is: ' + (number === 1 ? 'One' : 'No match');
console.log(result); // The number is: One


// Nested ternary operator
const anotherNumber = 99;
const anotherResult =
  anotherNumber === 1
    ? 'One'
    : anotherNumber === 99
      ? 'Ninety-nine'
      : anotherNumber === 1000
        ? 'One thousand'
        : 'No Match';

console.log(anotherResult); // Ninety-nine