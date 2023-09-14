import React from 'react'


export class Car extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964
    };
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    )
  }

}
//!________________________________________________________________________________________________________________
// Changing the state object
// щоб змінити стан state object, треба використати метод this.setState(). Коли стан міняється, то компонент ререндериться.

export default class Car1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({ color: 'blue' }); // якщо змінюємо стан об'єкта state, то варто користуватися методом setState(), тому що так компонент розпізнає, що він був оновлений і викличе render()
  }

  render() {
    return (
    <div>
      <h1>My {this.state.brand}</h1>
        <p>It ist a {this.state.color} {this.state.model}
          from {this.state.year}</p>
        <button type='button' onClick={this.changeColor}>Change color</button>
    </div>
    )
  }}