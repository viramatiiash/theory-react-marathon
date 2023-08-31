// ! Деструктуризація

// * Об'єкти
const user = {
  id: 25,
  isVerified: true
};

// const id = user.id;
// const isVerified = user.isVerified;
___________________________________;

// const { id, isVerified } = user; // деструктуризація - назначаємо змінні для елементів об'єкту
// Або
const { id: number, isVerified: isApproved } = user; // переназначаємо змінні для масиву з іншими назвами

// console.log(id); // 25
// console.log(isVerified); // true
console.log(number); // 25
console.log(isApproved); // true

____________________________________________________________________________________________________________________

// * Масиви
const numbers = ['one', 'two', 'three', 'four', 'five'];
const [a, b, c, d, e, f, g = 'default'] = numbers;
console.log(a); // one
console.log(b); // two
console.log(c); // three
console.log(d); // four
console.log(e); // five
console.log(f); // undefined
console.log(g); // default

// З допомогою деструктуризації ми назначили кожен елемент масиву до якоїсь змінної. Змінних може бути більше, ніж елементів масиву. Тоді їхнє значення у консолі просто буде undefined. Якщо змінних буде менше, ніж елементів у масиві, тоді значення у консолі також буде undefined. Ми можемо також дати дефолтне значення змінним.

// Можна також пропустити пару елементів масиву:
const numbers1 = ['one', 'two', 'three', 'four', 'five'];
const [a1, , , d1] = numbers1;
console.log(a1); // one
console.log(d1); // four
// Якщо забрати коми, тоді, відповідно, значення будуть one i two.

// Можна використати оператор rest (...)
const numbers2 = ['one', 'two', 'three', 'four', 'five'];
const [a2, ...d2] = numbers1;
console.log(a2); // one
console.log(d2); // ['two', 'three', 'four', 'five']
// a2 буде мати значення 'one', а рест робить так, що змінна d2 буде містити у собі масив із решти елементів.

____________________________________________________________________________________________________________________

// * Обмін змінних значеннями
let number1 = 1;
let number2 = 3;

[number1, number2] = [number2, number1];
console.log(number1); // 3
console.log(number2); // 1

// * Аргументи функцій
const student = {
  direction: 'Programming',
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
}

function studentDirection({ direction }) {
  return direction;
}

console.log(studentDirection(student)); // Programming
____________________________________________________________________________________________________________________

function whoIs({ displayName, fullName: {firstName} }) { 
  return `${displayName} is ${firstName}`;
}

console.log(whoIs(student)); // jdoe is John

// function whoIs({ displayName, fullName: {firstName: name} }) { 
//   return `${displayName} is ${name}`; // name - тут змінна
// }

// console.log(whoIs(student)); // jdoe is John


