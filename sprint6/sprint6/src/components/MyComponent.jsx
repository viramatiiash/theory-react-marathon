import { Component } from 'react';
import ChildComponent from './ChildComponent';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log('MyComponent getDerivedStateFromProps');
    return null; // ми не хочемо міняти об'єкт стану, тому буде null
  }

  componentDidMount() {
    console.log('MyComponent componentDidMount'); // цей метод викличеться останнім
  }

  shouldComponentUpdate() {
    console.log('MyComponent shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('MyComponent getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('MyComponent componentDidUpdate');
  }

  changeState = () => {
    this.setState({value: 'updated'})
  }

  render() {
    console.log('MyComponent render');
    return (
      <div>It's my component
        <ChildComponent />
        <button onClick={this.changeState}>Trigger an update</button>
      </div>
    )
  }
}


export default MyComponent;