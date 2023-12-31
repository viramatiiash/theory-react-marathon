// ! WebSockets
// Це протокол, який дає можливість браузеру і серверу обмінюватися даними через постійне з'єднання. Дані передаються в обох напрямках, без розриву з'єднання і додаткових http-запитів. Вебсокет використовується у сервісах, у яких потрібен постійний обмін даними: багатогравцеві онлайн-ігри, чати, програми з відображенням даних в реальному часі. Вебсокети підтримують усі сучасні браузери.

// Навідміну від HTTP, у протоколі вебсокет браузер не повинен постійно надсилати запит на сервер, чи є якісь повідомлення. Достатньо під'єднатися раз до сервера і очікувати, що сервер надішле повідомлення самостійно.

// ! Методи взяємодії із сервером
// 1. .send(data) - надсилаємо дані на сервер
// 2. .close() - закриваємо, розриваємо з'єднання
// 3. 'message' - цей івент використовується для того, щоб отримати дані
// 4. 'error' - цей івент використовується для того, щоб обробляти помилки
// 5. 'open' - цей івент генерується, коли connection встановлюється
// 6. 'close' - цей івент генерується, коли connection розривається.