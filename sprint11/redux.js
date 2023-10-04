// ! Redux js
// Якщо редакс хоче змінити стейт нашої аплікації, то будь-як він це зробити не зможе, тому що є певні обмеження, які дозволяють дізнатися як і коли будуть відбуватися ці зміни.

// ? Обмеження/заборони (restrictions)
// 1. State цілої аплікації знаходиться у вигляді дерева об'єктів/масивів у одному сховищі (store). Скільки даних буде зберігатися там, залежить від нас. Не обов'язково всі дані кидати туди.
// 2. State є read-only - стейт міняється через dispatching - action, яка є об'єктом, який описує, що треба зробити. Ніщо інше не може змінити стейт дерева напряму.
// 3. Цей action можна змінити тільки чистою функцією, яка називається reducer, що приймає два аргументи - попередній state і action і повертають новий стейт.
// ? (state, action) => newState

// _________________________________________________________________________________________________________________
// App state - простий об'єкт із багатьма ключами чи 'slices'
const state = {
  todos: [ // масив тудушок
    { text: 'Eat food', completed: true },
    { text: 'Exercise', completed: false },
  ],
  visibilityFilter: 'SHOW_COMPLETED' // Відфільтрувати за тим, чи туду виконана
};

// Actions: прості об'єкти із полем 'field'
const action1 = { type: 'ADD_TODO', text: 'Go to swimming pool' }
const action2 = { type: 'TOGGLE_TODO', index: 1 }
const action3 = { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' };

// Є ще так звані action creators: функції, що повертають action
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

//__________________________________________________________________________________________________________________
// Оскільки тут для зміни стейту використовуються pure function, то ніщо зовні не може впливати на цю функцію, тобто, вона працює лише на тих двох аргументах, які їй передаються.
// Так само не можна у самому об'єкті стейту змінювати якісь параметри

function visibilityReducer(state = 'SHOW_ALL', action) {
  // state - як відображати наші тудушки і action, який може цей стан змінити
  return action.type === 'SET_VISIBILITY_FILTER' ? action.filter : state; // якщо action type 'SET_VISIBILITY_FILTER', тоді ми повертаємо цей фільтр, якщо ж ні, тоді просто показуємо попередній стейт
}

function todosReducer(state = [], action) { // state - масив наших тудушок
  switch (action.type) { // в залежності від того, який action type
    case 'ADD_TODO':

      // не слід використовувати .push(), бо він видозмінює існюючий масив
      // тому краще використовувати state.concat(), тому що він буде додавати новий масив до старого, але при цьому повертати новий масив
      
      return state.concat([{ text: action.text, completed: false }]); // ми додаємо до стейт елемент з відповідним текстом, який буде у action і якимось статусом
    case 'TOGGLE_TODO':

      // .map() повертає новий масив
      // {...obj} повертає новий об'єкт

      return state.map((todo, index) => { // проходимося по стейту з двома аргументами, сама тудушка і її індекс
        if (index !== action.index) return todo; // якщо індекс тудушки не відповідає індексу у action, тоді ми повертаємо ту саму тудушку
        return {...todo, completed: !todo.completed} // якщо таки знайшовся індекс, який був видозмінений, то ми переключаємо (toggle) його і робимо копію цього об'єкта.
      })
    case 'REMOVE_TODO':
      return state.filter((todo, index) => { 
        return index !== action.index // шукаємо індекс тудушки, який не збігається із індексом у action і повертаємо тудушку із цим індексом
      })
    default: return state; // коли ми не знаємо, що робити, треба повернути поточний стейт.
  }
}

//__________________________________________________________________________________________________________________
// Об'єкти зазвичай копіюються за допомогою spread operator (...)
const initialState = {
  firstName: 'Luke', lastName: 'Skywalker', age: 24,
  job: 'Moisture farmer', weapons: {blaster: 'Model 57'}
}

function personReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_FIRST_NAME': {
      const { firstName } = action;
      return { ...state, firstName }; // ми копіюємо дані із старого стейту (...state) і додаємо нові дані (firstName). Це якщо у нас поле одне.
    }
    case 'SET_SOME_FIELD': {
      const { fieldName, fieldValue } = action;
      return { ...state, [fieldName]: fieldValue }; // цей варіант використовуємо, коли треба додати якесь поле значень. Копіюємо старі дані з попереднього стейту (...state), записуємо нові дані [fieldName]: fieldValue;
    }
    case 'UPDATE_PERSON': {
      return { ...state, ...action.payload }; // спредаємо старий стейт, спредаємо новий об'єкт і видозмінюємо ті дані, які у нас були
    }
    case 'FINISH_TRAINING': {
      return {
        ...state,
        job: 'Jedi Knight',
        weapons: { ...state.weapons, lightsaber: 'blue' } // якщо є вкладений об'єкт, то треба також спреднути його старі дані і перезаписати якусь властивість
      };
    }
    default: return state; // якщо action немає, або ми не знаємо, як його обробити, повернеться старий стейт.
  }
}

//__________________________________________________________________________________________________________________
// Функції reducer можуть викликати менші функції ред'юсера
// Ця функція існує, щоб все працювало і комбінує результати
function todoApp(state = {}, actions) {
  return {
    todos: todosReducer(state.todos, action),
    visibilityFilter: visibilityReducer(state.visibilityFilter, action)
  };
}

function createCounterReducer(counterName) { // reducer creator - такі функції дозволяють створювати редюсери динамічно
  return function counterReducer(state = 0, action) { // повертаємо функцію, яка приймає 2 аргументи
    switch (action.type) {
      case `{$counterName}_INCREMENT`: return state + 1;
      default: return state;
    }
  }
}

const counter1Reducer = createCounterReducer('firstCounter');
const counter2Reducer = createCounterReducer('secondCounter');

function countersReducer(state = {}, action) {
  return {
    counter1: counter1Reducer(state.counter1, action), // додаємо вище створені редюсери до різних каунтерів
    counter2: counter2Reducer(state.counter2, action),
  };
}
//__________________________________________________________________________________________________________________
function todoApp(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    visibilityFilter: visibilityReducer(state.visibilityFilter, action)
  };
}

// Redux provides a 'combineReducers() function to do this:
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityReducer
}) // Цей код - це те саме, що код зверху, але через спеціально функцію
// ? Ця функція ніколи не може повертати undefined, якийсь initialState мусить повертатись

//__________________________________________________________________________________________________________________
// reducers.js
export default theDefaultReducer = (state = 0, action) => state;
export const firstNamedReducer = (state = 1, action) => state;
export const secondNamedReducer = (state = 2, action) => state;

// rootReducer.js
import { combineReducers } from 'redux'; // імпортуємо функцію, яка буде комбінувати редюсери
import theDefaultReducer, { firstNamedReducer, secondNamedReducer } from './reducer'; // імпортуємо маленькі редюсери вище у рутовий файл

const rootReducer = combineReducers({ // об'єднуємо з допомогою функції combineReducers менші редюсери у rootReducer
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer
}) // у такому випадку стейти будуть іти у порядку, у якому ми записали ці редюсери. Це не дуже добре, тому треба давати їм ключі, тобто якісь назви

const state1 = rootReducer(undefined, { type: "DUMMY" });
console.log(state1); // {theDefaultReducer: 0, firstNamedReducer: 1, secondNamedReducer: 2}

// Даємо назви слайсам:
const rootReducer1 = combineReducers({ // так добре. Цей об'єкт уже є наш стейт, тому першого складника не треба todos.todos
  default: theDefaultReducer,
  first: firstNamedReducer,
  second: secondNamedReducer
}) // треба вважати, щоб не зробити double-nesting names, таких як state.todos.todos

//__________________________________________________________________________________________________________________
// Редюсери зберігаються у store
import { createStore } from 'redux';

import rootReducerFunction from 'reducers/todoApp';
import preloadedState from './initialState';

const store = createStore(rootReducerFunction, preloadedState); // createStore - це функція, де будуть зберігатися редюсери. Вона приймає 2 аргументи - 1) основний, рутовий редюсер, 2) initialState - не є обов'язковим

// ? у createStore є 3 основні методи:
// 1. .getState() - можна дістати поточний стейт
console.log(store.getState()); // {todos: [...], visibilityFilter: 'SHOW_COMPLETED}

// 2. .dispatch() - дозволяти передати action для зміни нашого стейту. dispatch - відправити, послати. Аргументами ми можемо передавати наші об'єкти action-ів, де обов'язково має бути якийсь type, якого ми чекаємо у наших редюсерах.
store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }) // У цьому типу міняємо фільтр 
console.log(store.getState()); // {todos: [...], visibilityFilter: 'SHOW_ALL'}

// 3. .subscribe() - ми можемо підписатися на зміни нашого стейту. Кожного разу, коли буде відправлятися якийсь екшн, у цей метод буде приходити колбек-функція і там ми, наприклад, можемо виконати ререндер нашої аплікації, тому що ми будемо знати, що прийшов новий екшн і у нас є новий стейт.

const stateBefore = store.getState();
console.log('Number of initial todos: ', stateBefore.todos.length); // дістаємо кількість тудушок - Number of initial todos: 2

store.subscribe(() => {
  console.log('An action was dispatched');
  const stateAfter = store.getState();
  console.log('Number of todos after dispatch: ', stateAfter.todos.length); 
})

store.dispatch({type: 'ADD_TODO', text: 'Go to swimming pool'}) // An action was dispatched
// Number of todos after dispatch: 3

//__________________________________________________________________________________________________________________
// Redux використовує uni-directional data flow.
// 1. Користувач, наприклад натискає якусь кнопочку
// 2. event переходить у action
// 3. action біжить до daspatcher-а
// 4. Dispatcher візьме цей action i поточний стейт, викличе будь-яку кількість редюсерів
// 5. На виході ми отримаємо новий стейт, а subscribe викличе колбек і змінений стейт зможе побачити користувач на своєму екрані.