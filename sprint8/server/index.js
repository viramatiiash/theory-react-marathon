import { WebSocketServer } from 'ws'; // імпортуємо модуль вебсокета

const socketServer = new WebSocketServer({ port: 9090 }); // створюємо сервер

// Підписуємося на подію, коли до сервера під'єднується клієнт:
socketServer.on('connection', connection => {
  console.log('Новий клієнт під\'єднався!');

  // Додаємо підписку на отримання повідомлень
  connection.on('message', message => {
    console.log(`Клієнт надіслав ${message}`);
    connection.send(`Я отримав повідомлення ${message}, дякую!`);
  })

  connection.on('close', () => {
    console.log('Клієнт від\'єднався');
  })

})