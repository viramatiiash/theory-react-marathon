// ! switch
const number = 99;
let result;

switch (number) {
  case 1:
    result = 'One';
    break;
  case 99:
    result = 'Ninety nine';
    break;
  case 1000:
    result = 'Thousand';
    break;
}

console.log(result); // Ninety nine
// Якщо у number не буде жодного з кейсів, тоді виб'є у консолі undefined, тому що побачить result, у який не було назначено якогось значення. Тому треба default провсяк.

const number1 = 99;
let result1;

switch (number1) {
  case 1:
    result1 = 'One';
    break;
  case 99:
    result1 = 'Ninety nine';
    break;
  case 1000:
    result1 = 'Thousand';
    break;
  default:
    result1 = 'No Match';
}

// умови у switch відбуваються як із строгим оператором ===, а не з ==.

// Ми можемо додати block scope у switch:
const number2 = 99;
let result2;

switch (number2) {
  case 1: {
    const text = 'One';
    result2 = text;
    break;
  }

  case 99: {
    const text = 'Ninety nine'; // якщо ми заберемо фігурні дужки, то буде вибивати помилку, що змінна text уже була оголошена
    result2 = text;
    break;
  }

  case 1000: {
    const text = 'Thousand';
    result2 = text;
    break;
  }

  default:
    result2 = 'No Match';
}
