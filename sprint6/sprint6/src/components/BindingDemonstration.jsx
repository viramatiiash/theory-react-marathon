import React from 'react';


export default class BindingDemonstration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    // this.clickHandler = this.clickHandler.bind(this); // прив'язуємо втрачений контекст. Binding відбувається лише раз у конструкторі, а не на кожному рендері.
  }

  clickHandler = () => {
    this.setState(prevState => ({counter: prevState.counter + 1})); // коли посилаємося на хендлер як колбек, то this втрачає свій контекст і встановлюється як undefined. Ми маємо його якось повернути. Це можна зробити через .bind(), стрілкову функцію, через метод .bind() але в конструкторі, і зробивши clickHandler також стрілковою функцією (як воно вже є трохи вище)
  };

  render() {
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}
// Недолік методу із bind() є те, що під час кожного рендеру цей метод буде виконуватись наново.
// Недолік методу із стрілковою функцією той самий, але синтаксис простий, тому у невеликих аплікаціях можна використовувати.