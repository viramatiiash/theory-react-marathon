import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // тип даних отримується тут на основі початкового значення - number
  // const [count, setCount] = useState <number| null>(null); // якщо початкове значення null, а потім нам потрібно буде, щоб значення було на виході number, тоді це треба вказати після useState
  const [incrementBy, setIncrementBy] = useState(1);

  // const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (
  //   event
  // ) => {
  //   setCount(count + 1);
  //   event.currentTarget.innerText = 'Incremented'; // Міняємо текст у кнопці
  // };

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + incrementBy); // міняємо поточне значення на те, що є в інпуті
    event.currentTarget.innerText = 'Incremented'; // Міняємо текст у кнопці
  };

  const oninputHandler: React.FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    setIncrementBy(parseInt(event.currentTarget.value)); // записуємо значення, що знаходиться у інпуті до setIncrementBy, але перед тим перетворюємо це значення на число, щоб не сварився тайпскрипт.
  };

  return (
    <div>
      <div>Count: {count}</div>
      <input value={incrementBy} onInput={oninputHandler} type='number' />
      <button onClick={onClickHandler}>Increment</button>
    </div>
  );
}

export default Counter;
