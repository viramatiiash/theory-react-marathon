const express = require('express'); // спершу ми підключаємо модуль express

const args = process.argv.slice(2); //

let customInterval = 100;
let customTimeout = 700;

// Цей фрагмент коду призначений для обробки аргументів командного рядка, які можуть бути задані під час запуску програми.
for (let i = 0; i < args.length; i++) { // спершу проходимося циклом по масиву args. Масив args - це масив аргументів командного рядка, які були передані програмі при її запуску.
  const arg = args[i]; // отримуємо поточний аргумент командного рядка і записуємо його у змінну arg

  if (arg === '-i') { // перевіряємо, чи той аргумент відповідає одному із двох можливих -i
    const nextArg = args[i + 1];
    if (nextArg && !isNaN(nextArg)) {
      customInterval = parseInt(nextArg, 10);
      i++;
    }
  } else if (arg === '-t') {
    const nextArg = args[i + 1];
    if (nextArg && !isNaN(nextArg)) {
      customTimeout = parseInt(nextArg, 10); // 10 десяткова система обчислення, тобто від 0 до 9
      i++;
    }
  }
}

console.log(`interval: ${customInterval} timeout: ${customTimeout}`);

const app = express(); // створюємо об'єкт express із назвою app

app.get('/', (req, res) => { // дістаємо кореневий шлях
  const myInterval = setInterval(() => {
    const now = new Date();
    console.log(now);
  }, customInterval);

  setTimeout(() => {
    clearInterval(myInterval);

    res.send(`Зараз ${new Date().toUTCString()}.`);
  }, customTimeout);
});
const server = app.listen(3000); // створюється http-server на 3000 порті

module.exports = { app, server };

// Нам потрібно створити Node.js сервер з використанням фреймворку експрес.
// Сервер виводить поточний час на консолі і відповідає на запити користувача, надсилаючи поточний UTC-час
