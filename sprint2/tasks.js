// 1.
class Movie {
  constructor(name, category, startShow) {
    this.name = name;
    this.category = category;
    this.startShow = startShow;
  }
  watchMovie() {
    return `I watch the movie ${this.name}!`;
  }
}

const movie1 = new Movie('Titanic', 'drama', 1997);
const movie2 = new Movie('Troya', 'historical', 2004);

// 2.
class Student {
  #fullName; // оголошуємо приватні змінні перед конструктором
  #direction;
  constructor(fullName, direction) {
    this.#fullName = fullName; // таким чином пояснюємо, що приватна змінна буде дорівнювати значенню, яке прилетить, коли ми будемо робити екземпляр цього класу
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
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');

// 3.
// TODO toSorted()
// TODO toSpliced()
class Distributor {
  constructor() {
    this.products = {}; // тут будуть зберігатися продукти, які будуть додаватися через addProduct()
  }

  addProduct(id, name) {
    this.products[id] = name; // кажемо таким чином, що id продуктів (тобто, ключі в об'єкті), буде таке саме, як їхня назва.
  }

  removeProduct(id) {
    if (this.products.hasOwnProperty(id)) { // якщо у продукта є id, то ми можемо його видалити
      delete this.products[id]; // delete operator видаляє властивість з об'єкта: delete obj.property/delete obj[prop]
    }
  }
}

const localDistributor = new Distributor(); // створюємо екземпляр класу Distributor - створиться порожній масив

class MyProduct {
  constructor(name) {
    this.id = Symbol(name); // створюємо унікальне ім'я для id. 
    this.name = name;
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name); // вказуємо параметри для методу масиву Distributor addProduct
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
  return [].reduce.call( // створюємо порожній масив, у який будуть записуватися значення. Call створює контекст - вхідні значення(аргументи). Ми це робимо, тому що arguments - це псевдомасив, нам треба до нього якось приєднатися. Reduce бере вхідні аргументи і проходиться по них: 10 * 2 = 20, 20 * 3 = 60...
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product // початкове значення, яке буде дорівнювати 10
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
    const copiedArray = planesArray.slice(); // копіюємо вхідний масив
    const sortedPlanes = copiedArray.sort( // сортуємо копію масиву за далечиною польоту. Для цього нам потрібно посортувати методи, точніше те, що з них вийде, результат їхньої дії
      (a, b) => a.calcFlightRange() - b.calcFlightRange()
    );
    sortedPlanes.map((plane) => {
      console.log(`${plane.model}: ${plane.calcFlightRange()}`); // логуємо модель літака і те, що вийшло після відпрацювання calcFlightRange()
    });
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption); // підтягуємо властивості з батьківського класу
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
    this.ingredients = []; // це порожній масив, який буде містити інгредієнти, що були додані до піци
  }

  addIngredient(ingredient) {
    if (!this.ingredients.includes(ingredient.param)) { // перевіряється, чи у списку інгредієнтів немає вхідного параметру (чи немає вже такого інгредієнту)
      this.ingredients.push(ingredient.param); // якщо немає, тоді додаємо цей інгредієнт у масив ingredients
      console.log(`${ingredient.param} has been added`);
    } else {
      console.log(`Such an ingredient already exists!`);
    }
  }

  deleteIngredient(ingredient) {
    const index = this.ingredients.indexOf(ingredient.param); // шукаємо, чи у ingredients вже існує інгредієнт із таким індексом. Якщо так, то видаляємо його.
  
      this.ingredients.splice(index, 1); // починаємо з індекса наявного елемента і видаляємо один елемент.
      console.log(`${ingredient.param} has been deleted`);

  }

  getIngredients() {
    const ingredientList = this.ingredients.map( // проходимося по масиву інгредієнтів
      (ingredientParam) => pizzaMenu[ingredientParam] // повертаємо масив із об'єктом інгредієнта: параметр, прайс і к-ть калорій. ingredientParam - це назва інгредієнта, що був доданий до піци.
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
      pizzaMenu[this.size.param].price + pizzaMenu[this.kind.param].price; // this.size.param - цей розмір піци, .price - його ціна + ціну цього виду піци
    for (const ingredientParam of this.ingredients) { // for ... of проходиться по значеннях об'єкта (НЕ по властивостях!)
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
