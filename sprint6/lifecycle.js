// ! Lifecycle
// ? 1. Mounting - монтування, тобто, створення компонента, занесення його в DOM
// ? 2. Unmounting - видалення елемента з DOM
// ? 3. Updating - оновлення. Може бути спричинено зміною пропсів, чи стану

// ! Mounting Methods
// 1. constructor - конструктор - це єдине місце, де можна присвоювати значення стейту напряму. Сюди присвоюються початкові значення, серед них і початкове значення state. call super(props) мусить іти після коструктора і перед будь-яким іншим виразом. Так можна наслідувати методи батьківського компоненту React.Component.
// 2. static getDerivedStateFromProps(props, state) - коли потрібно, щоб стан змінювався при зміні пропсів
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: 'red'}
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  render() {
    return (
      <h1>My Favorite Color ist {this.state.favoritecolor}</h1>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol='yellow' />);

// 3. render() - єдиний обов'язковий метод у класових компонентах. Він перевіряє props & state і повертає jsx
// 4. componentDidMount() - викликається після завершення монтування, вставки в DOM-дерево. Тобто, після рендерингу.

class Header1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: 'yellow'})
    }, 1000)
  }

  render() {
    return (
      <h1>My favorite color is {this.state.favoritecolor}</h1>
    )
  }
}

// ! Updating - при повторному рендері (тобто, коли є зміна у стані, чи у пропсах)
// 1. static getDerivedStateFromProps(props, state) - це перший метод, який викликається, коли апдейтиться компонент.

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' }); // при натисканні кнопки 'change color' колір би мав змінитися на 'blue', але, оскільки викликається метод getDerivedStateFromProps(), то колір лишиться жовтим, тобто візьметься з пропсів через цей метод.
  }
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoritecolor}</h1>
        <button type='button' onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}

// 2. shouldComponentUpdate(nexProps, nextState) - його завдання: дати знати реакту, чи поточна зміна стану і пропсів не впливає на виведення компонента. Він викликається перед рендерингом, при отриманні нових пропсів і стану. Він не викликається при першому рендері, чи коли використовується force update. Повертає булеве значення, що каже, чи реакт має продовжети рендеринг, чи ні. Дефолтне значення - true.
// ? Приклад, якщо shouldComponentUpdate() повертає false:

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  shouldComponentUpdate() { // цей метод у цьому випадку каже реакту, що рендер треба припинити, тому стан не зміниться, оскільки він змінюється на кожному рендері. Тому улюблений колір залишиться 'red'.
    return false;
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' });
  }

  render() {
    return (
      <div>
        <h1>My favorite Color is {this.state.favoritecolor}</h1>
        <button type='button' onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}

// ? Приклад, де метод shouldComponentUpdate() повертає true:

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  shouldComponentUpdate() { // цей метод повертає true, тобто вказує реакту, що рендер має відбутися. Оскільки стейт міняється на рендері, то колір зміниться на 'blue'.
    return true;
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' });
  }

  render() {
    return (
      <div>
        <h1>My favorite color </h1>
      </div>
    )
  }
}


// 3. render()
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  changeColor = () => {
    this.setState({ favoritecolor: 'blue' });
  }

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoritecolor}</h1>
        <button type='button' onClick={this.changeColor}>Change color</button>
      </div>
    )
  }
}
// 4. getSnapshotBeforeUpdate() - викликається тоді, коли останній відрендерений вивід буде зафіксовано. Це означає, що ми маємо доступ до props i state до оновлення, тобто, навіть після оновлення ми можемо глянути, які значення були до нього. Якщо є цей метод, то мусить бути також метод componentDidUpdate(), інакше буде показувати error.
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: 'yellow'})
    }, 1000) // через секунду стейт зміниться на yellow
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML = 'Before the update, the favorite was ' + prevState.favoritecolor;
  } // одразу після рендеру покаже, який був попередній стейт, тобто, запише значення у div1.

  componentDidUpdate() {
    document.getElementById('div2').innerHTML = 'The updated favorite color is ' + this.state.favoritecolor;
  } // покаже поточний стейт

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoritecolor}</h1>
        <div id='div1'></div>
        <div id='div2'></div>
      </div>
    );
  }
}

// 5. componentDidUpdate() - він викликається одразу після оновлення. Він не викликається під час першого рендеру. В якості його 3-го аргументу іде результат попереднього методу getSnapshotBeforeUpdate(). У цьому методі можна викликати метод setState(), але він мусить бути огорнутий в умову, інакше можна спричинити безкінечний цикл, крім того це спричинить додатковий рендер, який не буде видимий користувачу, але буде впливати на продуктивність компонента.

// ! Unmounting
// 1. componentWillUnmount() - викликається безпосередньо перед тим, як компонент буде демонтовано і знищено. setState() тут не викликається, оскільки метод не буде повторно рендеритись.

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  }

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child/>
    }
    return (
      <div>
        {myheader}
        <button type='button' onClick={this.delHeader}>Delete Header</button>
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted.')
  }

  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}
