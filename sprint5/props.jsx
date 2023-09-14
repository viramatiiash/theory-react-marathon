// ! Props
// 1. In class
const element = <ChildComponent someData='Some value' />

class ChildComponent extends React.Component {
  render() {
    return <div>{ this.props.someData}</div>
  }
}

// 2. In function
function ChildComponent1(props) {
  return <div>{ props.someData}</div>
}
____________________________________________________________________________________________________________________
export default class App extends React.Component {
  state = {
    someList: [
      { id: 1, text: 'one' },
      { id: 2, text: 'two' },
      { id: 3, text: 'three' },
      { id: 4, text: 'four' },
    ],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.someList.map((el) => (
            <ListElement key={el.id} item={el} />
          ))}
        </ul>
      </div>
    );
  }
}

// function ListElement(props) {
//   return <li>{ props.item.text}</li>
// }

// Or like class:
class ListElement extends React.Component {
  render() {
    return <li>{ this.props.item.text}</li>
  }
}