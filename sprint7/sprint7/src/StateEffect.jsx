// ! useState - приймає один аргумент, початковий стан, який ми потім можемо змінювати. Як початкове значення не тільки приймає об'єкти, як класові компоненти, а може прийняти будь-яке примітивне значення.
// useState ретурнить масив із двох елементів: firstvalue, secondvalue

import { useEffect, useState } from 'react';

// ! useEffect - допомагає імплементити всі lifecycle методи у функціональних компонентах: componentDidMount, componentdidUpdate, componentWillUnmount
// Перший параметр - функція, яку ми будемо викликати у вигляді якогось lifecycle hook, другий параметр - масив. Він опційний. Якщо useEffect() використовувати у дочірніх компонентах, то він буде викликатись кожного разу, коли буде рендеритись батьківський компонент.



function StateEffect() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('useEffect called'); // викличеться як componentDidMount() при завантаженні сторінки. І буде викликатися при кожному рендері, як метод componentDidUpdate(). Якщо ми хочемо, щоб useEffect() викликався тільки раз, при mounting, тоді нам потрібний другий аргумент, порожній масив.
  // })

  // useEffect(() => {
  //   console.log('useEffect called');
  // }, []); // при рендері цей метод не переренджується, але якщо відбуваються якісь зміни у файлі, тоді він викликається

  useEffect(() => {
    console.log('useEffect called');
  }, [counter]); // якщо у масив вписати змінну, яка передає якийсь стейт, то useEffect() буде викликатись тільки тоді, коли стейт цієї змінної буде мінятися.

  return (
    <div className='App'>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add one</button>
    </div>
  );
}

export default StateEffect;



function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}


function Example({ someProp }) {
  function doSomething() {
    console.log(someProp);
  }

  useEffect(() => {
    doSomething();
  }, []);
}


useEffect(() => {
  props.source.subscribe();
})

