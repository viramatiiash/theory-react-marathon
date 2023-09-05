// ! Prototype inheritance - прототипне наслідування
// Класи у js це синтаксичний цукор для існуючого прототипного наслідування у js. Ці об'єкти мають приховану властивість prototype, яка є або іншим об'єктом, або містить значення null. Об'єкт, на який посилається властивість prototype, називається прототипом.

function Vehicle(model, speed) {
  this.model = model;
  this.speed = speed;
}

Vehicle.prototype.drive = function () { // це метод drive класу Vehicle
  console.log(`${this.model} is driving`);
}

const veh = new Vehicle('Space1', 2200); // створюємо екземпляр класу Vehicle
console.log(veh); // виводимо у консоль інформацію про нього
// {model: 'Space1', speed: 2200}

function Car(model, speed, passengers) {
  Vehicle.call(this, model, speed);
  this.passengers = passengers;
}

Car.prototype = Object.create(Vehicle.prototype); // задаємо значення прототипу для нашого класу. Таким чином у дочірнього класу з'являється можливість використовувати методи батьківського класу
Car.prototype.carryPassengers = function () {
  console.log((`${this.model} carries passangers`));
}

const myCar = new Car('renault Scenic', 200, 7);
console.log(myCar); // Car {model: 'renault Scenic', speed: 200, passengers: 7}