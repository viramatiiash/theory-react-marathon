// 1.

// 2.
class Student {
  #fullName; // оголошуємо приватні змінні
  #direction;
  constructor(fullName, direction) {
    this.#fullName = fullName;
    this.#direction = direction;
  }

  getFullName() {
    return this.#fullName;
  }

  nameIncludes(data) {
    return this.getFullName().includes(data); // визначаємо, чи метод getFullName() включає у себе вхідний параметр data
  }

  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc'); // створюємо ще один екземпляр класу Student
  }

  get direction() {
    return this.#direction; // повертаємо вхідний напрямок
  }

  set direction(direction) {
    this.#direction = direction; // кажемо, що вхідний напрямок це напрямок, заданий у сеттері
  }

  toString() {
    return 'Student {}';
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');

// 3.
class Distributor {
  constructor() {
    this.products = {};
  }

  addProduct(id, name) {
    this.products[id] = name;
  }

  removeProduct(id) {
    if (this.products.hasOwnProperty(id)) {
      delete this.products[id];
    }
  }
}

const localDistributor = new Distributor();

class MyProduct {
  constructor(name) {
    this.id = Symbol(name);
    this.name = name;
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}

// 4.
// ? Math.min() - це вбудована функція JavaScript, яка приймає довільну кількість аргументів і повертає найменше з них.
function getMin(arr) {
  return Math.min(...arr); // ми беремо метод Math.min() - тобто, вирахувати мінімальне значення чогось, що ми напишемо у дужки. Далі використовуємо спред оператор, таким чином цей метод знаходить мінімальне значення з усіх вхідних аргументів і повертає його.
}

function getMin(arr) {
  return Math.min.apply(null, arr); // у даному випадку null показує, що у нас немає контексту
}

// 5.
const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product
  );
};

const contextObj = { product: 10 };

const getProduct = product.bind(contextObj, 2, 3);

// 6.

class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }

  calcFlightRange() {
    let range = (this.fuelSupply / this.fuelConsumption) * 100;
    return range;
  }

  static showSortedByFlightRange(planesArray) {
    const sortedPlanes = planesArray.sort(
      (a, b) => a.calcFlightRange() - b.calcFlightRange()
    );
    sortedPlanes.map((plane) => {
      console.log(`${plane.model}: ${plane.calcFlightRange()}`);
    });
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }

  calcFlightRange() {
    let increasedFuelSupply = this.fuelSupply + this.addTank;
    let range = (increasedFuelSupply / this.fuelConsumption) * 100;
    return range;
  }
}

class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }
  calcFlightRange() {
    let increasedFuelSupply = this.fuelSupply + this.refueling;
    let range = (increasedFuelSupply / this.fuelConsumption) * 100;
    return range;
  }
}

class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    let range =
      (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef;
    return range;
  }
}

// 7.
const pizzaMenu = {
  SIZE_S: { param: 'SIZE_S', price: 60, calorie: 300 },
  SIZE_M: { param: 'SIZE_M', price: 90, calorie: 450 },
  SIZE_L: { param: 'SIZE_L', price: 110, calorie: 600 },
  KIND_MEAT: { param: 'KIND_MEAT', price: 55, calorie: 230 },
  KIND_FISH: { param: 'KIND_FISH', price: 70, calorie: 150 },
  KIND_CHEESE: { param: 'KIND_CHEESE', price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: 'KIND_VEGETARIAN', price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: 'INGREDIENT_PEPPER', price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: 'INGREDIENT_BACON', price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: 'INGREDIENT_OLIVES', price: 20, calorie: 0 },
};

class PizzaMaker {
  constructor(size, kind) {
    this.size = size;
    this.kind = kind;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    if (!this.ingredients.includes(ingredient.param)) {
      this.ingredients.push(ingredient.param);
      console.log(`${ingredient.param} has been added.`);
    } else {
      console.log(`Such an ingredient already exists!`);
    }
  }

  deleteIngredient(ingredient) {
    if (this.ingredients.includes(ingredient.param)) {
      this.ingredients.pop(ingredient.param);
      console.log(`${ingredient.param} has been deleted.`);
    }
  }

  getIngredients() {
    const ingredientList = this.ingredients.map(
      (ingredientParam) => pizzaMenu[ingredientParam]
    );
    return ingredientList;
  }

  getSize() {
    return this.size.param;
  }

  getKind() {
    return this.kind.param;
  }

  calculatePrice() {
    let price =
      pizzaMenu[this.size.param].price + pizzaMenu[this.kind.param].price;
    for (const ingredientParam of this.ingredients) {
      price += pizzaMenu[ingredientParam].price;
    }
    return price;
  }

  calculateCalories() {
    let totalCalories =
      pizzaMenu[this.size.param].calorie + pizzaMenu[this.kind.param].calorie;
    for (const ingredientParam of this.ingredients) {
      totalCalories += pizzaMenu[ingredientParam].calorie;
    }
    return totalCalories;
  }
}
