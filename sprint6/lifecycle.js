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

// ! Updating - при повторному рендері
// 1. static getDerivedStateFromProps(props, state)
// 2. shouldComponentUpdate(nexProps, nextState) - його завдання: дати знати реакту, чи поточна зміна стану і пропсів не впливає на виведення компонента. Він викликається перед рендерингом, при отриманні нових пропсів і стану. Він не викликається при першому рендері, чи коли використовується force update
// 3. render()
// 4. getSnapshotBeforeUpdate() - викликається тоді, коли останній відрендерений вивід буде зафіксовано
// 5. componentDidUpdate() - він викликається одразу після оновлення. Він не викликається під час першого рендеру. В якості його 3-го аргументу іде результат попереднього методу getSnapshotBeforeUpdate(). У цьому методі можна викликати метод setState(), але він мусить бути огорнутий в умову, інакше можна спричинити безкінечний цикл, крім того це спричинить додатковий рендер, який не буде видимий користувачу, але буде впливати на продуктивність компонента.

// ! Unmounting 
// 1. componentWillUnmount() - викликається безпосередньо перед тим, як компонент буде демонтовано і знищено. setState() тут не викликається, оскільки метод не буде повторно рендеритись.
