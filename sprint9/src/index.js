import message from './message';

// const mess = message();
// alert(mess);

// ? Ускладнюємо код для теми Babel:

class Message {

  showMessage() {
    alert(message());
  }
}

const mess = new Message();
mess.showMessage();
