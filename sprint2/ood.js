// ! 4 Pillars (компоненти) of object oriented programming
// ? 1. Encapsulation - не існують просто змінні і окремі функції із купою параметрів, а існує об'єкт, який включає у себе властивості і методи. We group related variables and functions together - in this way we reduce complexity, increase reusability
// Це:
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

// змінилося на це:
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () { // У функції немає параметрів
    return this.baseSalary + (this.overtime * this.rate);
  }
};
console.log(employee.getWage()); // 30200;
____________________________________________________________________________________________________________________
// ? 2. Abstraction - ми можемо приховати певні властивості зовні. Таким чимось інтерфейс такого об'єкта робиться легшим, зменшує вплив змін. We hide the details and the complexity and show only the essentials - this reduces complexity, isolates impact of changes



// ? 3. Inheritance
// Inheritance means that an object(class) can inherit the methods and properties of the parent object(class). This avoids duplication of code. This way we eliminate (зайвий) code. We can  (реорганізувати) ugly switch/case statements.
// Клас може наслідувати методи і властивості батьківського класу. Таким чином ми уникаємо дублювання коду.
// ? За замовчуванням у js не підтримується множинне наслідування (тобто, один клас не може наслідувати властивості і методи більше одного батьківського класу)
class Vehicle {
  constructor(kind) { // сюди пишемо властивості. Цей клас приймає властивість - тип транспортного засобу
    this.kind = kind;
  }
  drive() {
    console.log(`${this.kind} is driving`); // Такий-то тип транспортного засобу рухається
  }
}
// ? The Vehicle class is called the base class, the parent class, the superclass.

class Car extends Vehicle { // extends успадковує/наслідує батьківський клас

  constructor(kind, passengers) { // Якщо ми хочемо до дочірнього класу додати властивості, яких немає у батьківському класі, тоді нам потрібний метод constructor() і в ньому ми спершу мусимо повторити властивості батьківського класу, а потім додати нові властивості.
    super(kind); // через супер ми доступаємося, або викликаємо конструктор батьківського класу. Супер треба викликати перед this. Через супер можна також викликати метод батьківського класу: super.drive();
    this.passengers = passengers; // this.kind вже писати не потрібно, бо це прописано у батьківському класі
  }
  carryPassengers() {
    console.log(`${this.kind} carries ${this.passengers} passengers`);
  }
}

const miniven = new Car('Renault Scenic'); // таким чином передаємо значення 'Renault Scenic' у клас Car. Цей клас успадкував у класу Vehicle метод drive()
miniven.drive(); // Renault Scenic is driving. Викликаємо метод drive
miniven.carryPassengers(); // Renault Scenic carries passengers. Викликаємо метод carryPassengers

const car = new Car('Audi', 5); // робимо екземпляр класу Car
car.carryPassengers(); // Audi carries 5 passengers
car.drive(); // Audi is driving // Цей метод наслідується із батьківського класу
____________________________________________________________________________________________________________________
class Vehicle {
  constructor(kind, speed) {
    this.kind = kind;
    this.speed = speed;
  }
  drive() {
    console.log(`${this.kind} is driving`);
  }
}

class Car extends Vehicle {
  constructor(kind, speed, passengers) {
    super(kind, speed); // щоб перевизначити конструктор, батьківський конструктор super() має бути викликаний перед доступом до this
    this.passengers = passengers;
  }
  carryPassengers() {
    console.log(`${this.kind} carries ${this.passengers} passengers`);
  }
}
const miniven1 = new Car('Renault Scenic', 220, 7);
console.log(miniven.speed); // 220
console.log(miniven.passengers); // 7
____________________________________________________________________________________________________________________
// ? 4. Polymorphism - багато форм. Дозволяє позбутися довгих if/if else statements, switch statements 


// ! Класи у ES6 можна вважати синтаксичним цукром для існуючого успадковування прототипу в джаваскрипті. У js всі об'єкти мають приховану властивість [[Prototype]], яка є або іншим об'єктом, або має значення null. 