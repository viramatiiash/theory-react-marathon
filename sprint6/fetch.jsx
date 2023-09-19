// ! Fetch
// Цей метод існує для того, щоб робити http запити і отримувати відповіді. Fetch API використовує проміси (Promises).
const result = fetch(url, [options]); // url - адреса, до якої ми будемо робити запит. options - додаткові параметри для нашого запиту. Наприклад, http-method: GET, POST, HEAD. Якщо не передається аргумент options, то буде здійснюватися GET-запит за вказаною адресою.

// ! Властивості відповідей і методів
// Response parameters:
// 1. response.status - отримуємо http-статусний код
// 2. response.ok - буде повертати true, якщо наш запит був успішним.

// ! Методи, щоб отримати тіло відповіді:
// 1. response.text() - повертає відповідь у звичайному текстовому форматі.
// 2. response.json() - конвертує відповідь у JSON-об'єкт.

fetch('http:// ...')
  .then(response => response.json()) // декодуємо відповідь від сервера у форматі json
  .then(data => {
  console.log(data); // при другому .then() ми виводимо результат у консоль
  })

// ? У вкладці Network у developer tools ми можемо побачити, чи запит був успішним, чи ні
  
const data1 = {
  title: 'name',
  body: 'info',
  userId: 1
}

fetch('http:// ...', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF - 8'
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json))


// ! JSON
// JSON використовується, щоб обмінюватися інформацією з веб-сервером. Коли ми надсилаємо дані на сервер, вони мають бути у форматі string. Щоб конвертувати JavaScript-об'єкт у string, треба використати метод JSON.stringify(). Цим методом можна змінювати як об'єкти, так і масиви.
