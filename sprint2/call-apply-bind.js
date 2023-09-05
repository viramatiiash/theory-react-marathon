 // ! this - має динамічне значення і представляє той об'єкт, у контексті якого він був викликаний
function testThis() {
  return this;
}
console.log(testThis()); // Window

const user = {
  firstname: 'John',
  lastname: 'Brzenk',
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`;
  }
}
// console.log(user.getFullName()); // John Brzenk

function getUserInfo(position, exp) {
  console.log(` ${this.getFullName()} details: ${position}, ${exp} years.`); // Uncaught TypeError: this.getFullName is not a function. Потрібно викликати контекст об'єкта user, щоб this спрацював коректним чином. // John Brzenk details: web dev, 3 years.
}
// ? funcName.call(context, arg1, arg2, ...) // arg1,2 це аргументи функції, які ми одразу можемо викликати
// getUserInfo.call(user, 'web dev', 3);
// getUserInfo();

// ? funcName.apply(context, [args]) // додаємо контекст до чогось, працює так само, як call, тільки викликає другим параметром масив аргументів функції
// getUserInfo.apply(user, ['QC', 2]); // John Brzenk details: QC, 2 years.
//  getUserInfo();

// ? func.bind(context, arg1, arg2 ...) // також прив'язує контекст до вказаної функції, але повертає іншу функцію, яку потрібно викликати
const userData = getUserInfo.bind(user, 'web dev', 6);
userData(); // John Brzenk details: web dev, 6 years.



