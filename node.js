// ! Node.js
// ? Blocking - виконання коду js призупиняється, поки завершиться виконання операцій вводу та виводу.
// Node.js використовує модульну систему
// Щоб імпортувати модуль, використовується функція require('moduleName'). Його треба записати у змінну при імпорті: let Module = require('module');
// Щоб експортувати модуль, треба використати метод module.exports

// greetings.js
const hello = function () {
  console.log('Hello %s!', name || '');
}

const bye = function () {
  console.log('Bye $s!', name || '');
}

module.exports = {
  hello: hello,
  bye: bye,
}

// hola.js
module.exports = function (name) {
  console.log(('Hola %s!', name || ''));
}

const { error } = require('console');
// app.js
const greetings = require('./greetings'); 
const hola = require('./hola');

greetings.hello(); // Hello! - Використання функції через об'єкт
hola('John Doe'); // Hola John Doe! - безпосередне використання (без передачі у об'єкт)

// Якщо викликати треба лише раз:
require('./greetings').bye('Jane'); // Goodbye Jane! - без використання додаткових змінних

// ! Глобальні об'єкти
// 1. process - надає кілька подій, пов'язаних з процесами
// 2. console - виводить дані у консоль
// 3. require - імпортує файли, JSON, модулі
// 4. _filename -  повертає абсолютний шлях файлу, який виконується. Недоступний у Node.js REPL.
// 5. _dirname - повертає шлях папки, у якій виконується якийсь скрипт. Недоступний у Node.js REPL
// 6. module.exports - експортує щось
// 7. setTimeout(callback, ms) - колбек функція, к-ть мілісекунд, після яких відбудеться попередня функція. Не може тривати довше, ніж 24.8 днів.
// 8. clearTimeout(timer) - зупиняє функцію setTimeout()
// 9. setInterval(callback, ms) - повторює функцію через вказану к-ть мінісекунд
// 10. clearInterval(timer) - зупиняє функцію setInterval()

// ? fs.rename()
// Асинхронне перейменування
const fs = require('fs');

fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.error(err);
  }
})
  
// Синхронне перейменування
const fs = require('fs');

try {
  fs.renameSync('before.json', 'after.json')

} catch (err) {
  console.error(err);
}

// ! Creating of HTTP server
const http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // щоб відповісти html-контентом, треба вказати тип контенту text/html
  response.write('Node.js says hello!'); // написати відповідь клієнту
  response.end(); // завершити відповідь
}).listen(3000); // listen запускає сервер у вказаному порту
