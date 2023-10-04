// ! Webpack - інструмент, який допомагає зібрати проект з урахуванням усіх модулів залежностей.
// npx http-server

// Деколи стає важливим порядок завантаження файлів js, якщо їх багато, то це стає дуже незручно. Тут допоможе вебпак.

// configuration file не обов'язковий, він зрозуміє тоді, що точка входу - src/index.js і результат буде у dist/main.js - оптимізований і зменшений для продакшна.

const path = require(path);

module.exports = {
  entry: './entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'result.bundle.js'
  }
}