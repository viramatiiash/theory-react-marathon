// ! Class Components
// Класові компоненти мають мати в собі extends React.Component, тому що це твердження створює наслідування React.Component і дає можливість достукатися до його функцій.
// Класові компоненти потребують метод render()

import React from 'react'; // Якщо ми використовуємо класові компоненти, то потрібно робити імпорт React

export default class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// Там, де ініціалізуються властивості компонента мусить бути конструктор.
// У реакті властивості компонента мусять зберігатися у об'єкті state.
// Ми використовуємо там твердження super(), воно дає доступ до функції батьківського компонента (React.Component)

export class Car1 extends React.Component {
  constructor() {
    super();
    this.state = { color: 'red' }; // тут ми зберігаємо значення компонента. Якщо стан змінити, то компонент ререндериться
  }

  render() {
    return <h2>I am a {this.state.color} Car!</h2>
  }
}

// ! Props - це як аргументи функції.
// якщо компонент має функцію конструктор, то props мусить бути у конструкторі і так само мусять бути передані до React.Component через super().

export class Car2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>I am a {this.props.model}!</h2>
  }
}

// Ми можемо використовувати компоненти у компонентах
export class Car3 extends React.Component {
  render() {
    return <h2>I'm third Car and I live there!</h2>
  }
};

export class Garage extends React.Component {
  render() {
    return (
      <>
        <h2>Who lives in my garage?</h2>
        <Car3/>
      </>
    );
  }
}