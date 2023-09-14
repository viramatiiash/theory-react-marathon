// ! React events

export default class App extends React.Component {
  state = {
    someList: [
      { id: 1, text: 'one' },
      { id: 2, text: 'two' },
      { id: 3, text: 'three' },
      { id: 4, text: 'four' },
    ],
  };

  onAddClick = () => {
    this.setState({
      someList: []
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onAddClick}>Add</button>
        <ul>
          {this.state.someList.map((el) => (
            <ListElement key={el.id} item={el} />
          ))}
        </ul>
      </div>
    );
  }
}
