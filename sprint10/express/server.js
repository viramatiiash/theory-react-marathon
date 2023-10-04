const express = require('express');
const commander = require('commander');
const app = express();

commander.option( // бібліотека commander використовується для того, щоб здійснювати обробку аргументів командного рядка. Метод .option() дозволяє задати, які аргументи командного рядка приймає програма
  '-i, <interval>', // -і - це перший аргумент, <interval> вказуємо інтервал у командному рядку
  parseInt // оскільки аргументи командного рядка приходять як стрінги, то таким чином ми вказуємо, що вони мають бути перетворені в число
);
commander.option(
  '-t, <timeout>',
  parseInt
);
commander.parse(process.argv); // опрацьовуємо передані аргументи. process.argv - масив, який містить аргументи командного рядка, які були передані під час запуску додатка

// Default values if not provided via command line arguments
const interval = commander.interval || 100; // або вказаний інтервал у терміналі, або дефолтне значення
const timeout = commander.timeout || 700;

console.log(`interval: ${interval} timeout: ${timeout}`);

const server = app.use((req, res, next) => {
  const myTimeout = setTimeout(() => {
    const myInterval = setInterval(() => {
      const now = new Date();
      const isoString = now.toISOString();

      console.log(isoString);
    }, interval);
  }, timeout);

  next();
});
app.listen(3000);

module.exports = { app, server };
