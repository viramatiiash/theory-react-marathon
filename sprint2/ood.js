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
// Клас можна писати інакше, без ключового слова class
function Employee(name, experience) {
  this.name = name;
  this.experience = experience;

  this.baseSalary = 500; // щоб забрати можливість у користувачів цього класу змінювати це поле, потрібно оголосити baseSalary як змінну const.
  this.getSalary = function () { // якщо ми хочемо, щоб і метод getSalary був недоступний для зміни, тоді ми маємо його оголосити також як змінну: const getSalary = function() {} ...
    return this.baseSalary * (1 + experience / 5); // Якщо змінюємо зверху baseSalary на const, тоді тут записуємо без this : return baseSalary * ... 
  }
  this.getDetails = function () {
    console.log(`Name: ${this.name}, experience: ${this.experience}, salary: ${this.getSalary()}`); // Якщо і метод оголошуємо через const, тоді і логувати його потрібно інакше: ... salary: ${getSalary()}
  }
}

let employee1 = new Employee('Tom', 5);
employee1.baseSalary = 200; // якщо baseSalary буде назначено через const, то ця операція не спрацює
employee1.getDetails();
employee1.getSalary(); // 400 // Якщо метод оголошений через змінну, тоді виб'є помилку: TypeError: employee1.getSalary is not  a function

// ! Тепер те саме у вигляді класу:
// Клас можна писати інакше, без ключового слова class
class Employee1{
  constructor(name, experience) {
    this.name = name;
    this.experience = experience;
  }
  
  #baseSalary = 500; // якщо ми хочемо зробити неможливим зміну чи навіть вичитування даної змінної, то перед нею просто треба написати решітку #
  getSalary = function () {
    return this.#baseSalary * (1 + this.experience / 5);
  }
  getDetails = function () {
    console.log(`Name: ${this.name}, experience: ${this.experience}, salary: ${this.getSalary()}`); 
  }
}



let employee2 = new Employee1('Tom', 5);
// employee2.#baseSalary = 200; // якщо забрати решітку, то код відпрацює без помилок, але так ніби мине цей рядок: Name: Tom, experience: 5, salary: 1000 // 1000
employee2.getDetails(); // Name: Tom, experience: 5, salary: 400
employee2.getSalary(); // 400 // має вибити помилку
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
// Це означає, що дочірні класи наслідують батьківський клас із певним методом, але той метод по-своєму видозмінюють.

class Vehicle1 {
  constructor(kind, speed) {
    this.kind = kind;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.kind} is driving`);
  }
}

class Car1 extends Vehicle1 {
  constructor(kind, speed, passengers) {
    super(kind, speed);
    this.passengers = passengers;
  }

  drive() {
    super.drive(); // тягнемо батьківський метод drive
    console.log(`Maximum ${this.kind} speed: ${this.speed} km/h`); // перевизначаємо його (overriding), добавляємо щось нове
  }
  carryPassengers() {
    console.log(`${this.kind} carries ${this.passengers}`);
  }
}

const miniven2 = new Car1('Scenic', 200, 7);
miniven2.drive(); // Scenic is driving
// Maximum Scenic speed: 200 km/h

// ! Класи у ES6 можна вважати синтаксичним цукром для існуючого успадковування прототипу в джаваскрипті. У js всі об'єкти мають приховану властивість [[Prototype]], яка є або іншим об'єктом, або має значення null.

class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }

  getFullName() {
    return this._fullName;
  }

  nameIncludes(data) {
    return this.getfullName().includes(data) ? true : false;
  }

  get() {
    return this._direction;
  }

  set(direction) {
    this._direction = direction;
  }

  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc');
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');


// What is the type of relationship between the objects in these classes?
// class Salary {
//   constructor(pay, bonus) {
//     this.pay = pay;
//     this.bonus = bonus;
//   }

//   annual_salary() {
//     return (this.pay * 12) + this.bonus;
//   }
// }

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   total_salary() {
//     if (this.salary) {
//       return this.salary.annual_salary();
//     }
//   }
// }



