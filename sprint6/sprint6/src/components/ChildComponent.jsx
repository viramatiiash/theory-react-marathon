import { Component } from 'react';

export class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('ChildComponent getDerivedStateFromProps');
    return null; // ми не хочемо міняти об'єкт стану, тому буде null
  }

  componentDidMount() {
    console.log('ChildComponent componentDidMount'); // цей метод викличеться останнім
  }

  shouldComponentUpdate() {
    console.log('ChildComponent shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('ChildComponent getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('ChildComponent componentDidUpdate');
  }

  render() {
    console.log('ChildComponent render');
    return <div>It's my component</div>;
  }
}

export default ChildComponent;
