// ! 1. Data types
// ? Primitive data types
// 1. BigInt - represents very large integers(greater than 2 ^ 53)
// 2. string
// 3. number
// 4. boolean
// 5. undefined - represents undefined value
// 6. null - represents null
// 7. symbol - represents unique identifier

// ? Non-primitive data types
// 1. object - represents instance through which we can access members

// ! 1. Arrays - special data structure for storing ordered collections. Two ways to create:
const arr = [];
const arr1 = new Array();
// Both of them create an empty array.
____________________________________________________________

// * It can be immediately initialized:
const cities = ['Rome', 'Lviv', 'Warsaw'];
console.log(cities[0]); // 'Rome'
console.log(cities[1]); // 'Lviv'
console.log(cities[2]); // 'Warsaw'
____________________________________________________________

// * The index can also change values for array elements:
const cities1 = ['Rome', 'Lviv', 'Warsaw'];
console.log(cities[0]); // 'Rome'
cities[0] = 'Berlin';
console.log(cities[0]); // 'Berlin'
____________________________________________________________

// * We can expend an array
const cities2 = ['Rome', 'Lviv', 'Warsaw'];
console.log(cities[5]); // undefined
cities[5] = 'Berlin';
console.log(cities[5]); // 'Berlin'
// Indexes 3 and 4 will be 'empty'
____________________________________________________________

// * Current size of the array
const cities3 = ['Rome', 'Lviv', 'Warsaw'];
console.log(cities.length); // 3
____________________________________________________________

// ? Loop over an Array
// 1. for of
const cities4 = ['Rome', 'Lviv', 'Warsaw'];
for (let i of cities4) { // runs 3 times
  console.log(i); // Rome, Lviv, Warsaw
}
// provides access only to its value, but not access to the current item number
____________________________________________________________

// 2. for
const cities5 = ['Rome', 'Lviv', 'Warsaw'];
for (i = 0; i < cities5.length; i++) { // runs 3 times
  console.log(cities5[i]); // Rome, Lviv, Warsaw
}
____________________________________________________________

// It's more flexible that for of construct. Here we can jump several elements forward:
const cities6 = ['Rome', 'Lviv', 'Warsaw'];
for (i = 0; i < cities6.length; i += 2) {
  cities6[i] = cities6[i] + '!';
}
console.log(cities6); //['Rome!', 'Lviv', 'Warsaw!']
____________________________________________________________

// * Array methods
// 1. push(items) - adds items to the end of the array
const cities7 = ['Rome', 'Lviv', 'Warsaw'];
cities7.push('Kyiv');
console.log(cities7); ['Rome', 'Lviv', 'Warsaw', 'Kyiv'];
____________________________________________________________

// 2. pop() - removes the element an the end of the array and returns it

____________________________________________________________

// 3. shift() - removes the element at the beginning of the array and returns it
const cities8 = ['Rome', 'Lviv', 'Warsaw'];
cities8.shift();
console.log(cities8); // ['Lviv', 'Warsaw']
____________________________________________________________

// 4. unshift(items) - adds items to the beginning of the array

// 5. slice(start, end) - creates a new array, copying elements from start to end (not including end) into it. It deletes by the index.
const cities9 = ['Rome', 'Lviv', 'Warsaw'];
const deletedElement = cities9.splice(0, 1); // 'Rome'
console.log(cities9); // ['Lviv', 'Warsaw']
____________________________________________________________

// 6. splice(pos, deleteCount, items) - starting at the pos index, removes deleteCount items and inserts items.
// 7. concat(items) - returns a new array: copies all members of the current array and adds items to it.
// 8. forEach(func) - calls func for each element
// 9. map() - creates a new array with the results of calling a function for every array element
const cities10 = ['Rome', 'Lviv', 'Warsaw'];
const newArr1 = cities10.map(function (city) {
  return city + 'Capital'
}); // ['RomeCapital', 'LvivCapital', 'WarsawCapital']
____________________________________________________________

// 10. filter() - this method creates a new array with all the elements tested by the specified function
const cities11 = ['Rome', 'Lviv', 'Warsaw'];
const newArr = cities11.filter(function (city) {
  return city.length < 5
});
console.log(newArr); // ['Rome', 'Lviv']
____________________________________________________________
// 11. reduce(total, num) - total(required) - initial value or the previously returned value of the function. num(required) - the value of the current element
const data2 = [2, 4, 6, 8];
function reducer(total, value) {
  return total + value;
}
const sum = data2.reduce(reducer);
// The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

// ! 2. JS is
// ? JS - a language with dynamic (weak) typing - variables can dynamically change type at runtime (під час виконання).
let x; // undefined
x = 45; // number
x = '45'; // string

// ! 3. 3 widely used type conversions (перетворення, перехід):
// 1. to String
// 2. to Number
// 3. to Boolean

// 1. String conversion
let a = 20;
let data = String(a); // '20'
_____________________________

let a1 = 20;
let data1 = a1 + ''; // '20'

// 2. Number conversion
let b = '20';
let num = Number(a2); // 20
_____________________________

let b1 = '20';
let num1 = +a; // 20
_____________________________

// ? parseInt() - converts to an integer
console.log(parseInt('7')); // 7
console.log(parseInt('7.5')); // 7
console.log(parseInt('7nm')); // 7
console.log(parseInt('nm')); // NaN
______________________________

// ? parseFloat() - converts to a fractional number (дробове число)
console.log(parseFloat('7')); // 7
console.log(parseFloat('7.125')); // 7
console.log(parseFloat('7nm')); // 7
console.log(parseFloat('nm')); // NaN

// ? isNaN() - checks if a value represents a number. It returns a boolean
console.log(isNaN(1)); // false
console.log(isNaN('1')); // false
console.log(isNaN('1m')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true

// 3. Boolean conversion
let c = '1';
let bln = Boolean(c); // true
_______________________________

let c1 = '1';
let bln1 = !!a; // true

// ! 4. Precedence - default priority order of operators
// 16 - unary plus (+)
// 16 - unary minus (-)
// 14 - multiplication (*)
// 14 - division (/)
// 13 - addition (+)
// 13 - subtraction (-)
// 3 - assignment (=)



