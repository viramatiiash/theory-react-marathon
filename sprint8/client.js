const client = new WebSocket('ws://localhost:9090'); // передаємо url i сервер, на якому раниться SocketServer. Ws - це не є безпечне з'єднання, яке підходить для навчальних аплікацій, але не для продакшин-версії.

// Підписка на подію відкриття зв'язку
client.onopen = () => {
  console.log(`Під'єднання виконано!`);

  client.send(`Привіт, як справи?`); // щоб надіслати дані на сервер використовується метод .send(data), параметром якого є дані, які відправляються.
}


client.onmessage = ({data}) => {
  console.log(data);
}


