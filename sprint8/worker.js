self.onmessage = ({data}) => { // self посилається на global scope. Якщо вікно - то на віндовс, у випадку контексту, де немає window, то він буде посилатися на global scope контексту. Для воркера це global scope worker
  // console.log('Main script sent', data);
  // postMessage('I am worker. Nice to meet you!')

  if (data.type === 'command') {
    let count = 0;
    const now = performance.now();
    for (let i = 0; i < 2000000000; i++) {
      count++;
    }

    console.log('Time of execution is', performance.now() - now);


  }
}