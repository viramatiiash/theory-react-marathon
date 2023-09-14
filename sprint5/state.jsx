// ! State
class MyClass extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {someData: 'some value'}
  }
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
  }

  render() {return (
  <div>
    <ul>
      {this.state.someList.map(el => (
        <li key={el.id}>{ el.text}</li>
      ))}
    </ul>
  </div>
)}
}