// ! Keys
// З допомогою ключів реакт ідентифікує елементи
// В якості ключів можна використовувати id об'єктів
const someData = todos.map(item => (
  <li key={item.id}>{item.text}</li>
))

// якщо немає id, тоді можна скористатися індексом елемента, але це вкрай небажано, якщо елементи будуть мінятися місцями.
const someData1 = todos.map((item, idx) => (
  <li key={idx}>{ item.text}</li>
))

// ідентифікатор не повинен бути унікальним глобально, він повинен бути унікальним у межах одного списку
// const dataInList = (
//   <ul>
//     (someData.map(item => <li key={item.id}>{ item.text}</li>))
//   </ul>
// )

// const dataInDiv = (
//   <ul>
//     (someData.map(item => <li key={item.id}>{item.text}</li>))
//   </ul>
// );

// return (
//   <div>
//     {dataInList}
//     <hr />
//     {dataInDiv}
//   </div>
// )


// Приклад з id
export default function App() {
  let someList = [
    { id: 1, text: 'one' },
    { id: 2, text: 'two' },
    { id: 3, text: 'three' },
    { id: 4, text: 'four' },
  ];
}

return (
  <div>
    <ul>
      {someList.map(el => (
        <li key={el.id}>{ el.text}</li>
      ))}
    </ul>
  </div>
)