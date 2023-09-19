import React, { Component } from 'react';

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          text: 'hidden text 1',
        },
        {
          id: 2,
          text: 'hidden text 2',
        },
        {
          id: 3,
          text: 'hidden text 3',
        },
      ],
      text: '',
    };
  }

  setIsShown = (text) => {
    this.setState({ text});
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((el) => {
            return (
              <li
                key={el.id}
                className='element'
                onMouseEnter={() => this.setIsShown(el.text)}
                onMouseLeave={() => this.setIsShown('')}
              >
                {`id - ${el.id}`}
              </li>
            );
          })}
          <li>{this.state.text}</li>
        </ul>
      </div>
    );
  }
}
