// ! Closures - замикання
function pack(item, boxes) {
  return boxes.pop() + item + ', boxes left ' + boxes.length; // віднімаємо один елемент від загального масива і ретурнимо те, що відняли із тим, що буде на вході

}

  let boxes = Array.from('xxxxxx');

  console.log(pack('y', boxes)); // xy, boxes left 5
  console.log(pack('i', boxes)); // xi, boxes left 4
console.log(pack('o', boxes)); // xo, boxes left 3
____________________________________________________________________________________________________________________
// Те саме робимо інакше:
function prepare(boxes) {
  const boxStorage = [...boxes]; // х-си віднімаємо від цієї змінної, яка скопіювала масив boxes із зовнішньої змінної
  return function (item) {
    return boxStorage.pop() + item + ', boxes left ' + boxStorage.length;
  };
}

let boxes1 = Array.from('xxxxxx');
const pack = prepare(boxes1);

console.log(pack('y')); // xy, boxes left 5
console.log(pack('i')); // xi, boxes left 4
console.log(pack('o')); // xo, boxes left 3

// Функції мають свою внутрішню пам'ять, але коли вони відпрацювали, то ця внутрішня пам'ять звільняється. Під замиканням ми розуміємо процес, коли функція бере інформацію із зовнішньої змінної, тоді інформація всередині функції не стирається, а перевикористовується.