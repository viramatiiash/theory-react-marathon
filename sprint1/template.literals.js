// ! Багаторядкові шаблонні літерали
console.log(
  'string text line 1\n' + // \n - line break. Слід використовувати у рядку, а не поза його межами
    'string text line 2'
);

console.log(`string text line 1 // те саме можна зробити через зворотні дужки і просто зробити абзац
string text line 2`);
____________________________________________________________________________________________________________________
// Інтерполяція ${}
let a = 5;
let b = 10;

console.log('Fifteen is ' + (a + b) + ' and/nnot ' + (2 * a + b) + '.'); // Fifteen is 15 and
// not 20.
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`); // Fifteen is 15 and
// not 20.
____________________________________________________________________________________________________________________
function isLargeScreen() {
  return false;
}

const isCollapsed = false;

let classes = 'header';
classes += (isLargeScreen() ? '' : isCollapsed ? ' icon-expander' : ' icon-collapser');
console.log(classes); // header icon-collapser
___________________________________________________

function isLargeScreen1() {
  return false;
}

const isCollapsed1 = false;

let classes1 = `header${(isLargeScreen1() ? '' : isCollapsed1 ? ' icon-expander' : ' icon-collapser')}`;
console.log(classes1); // header icon-collapser
____________________________________________________
function isLargeScreen2() {
  return false;
}

const isCollapsed2 = false;

let classes2 = `header${(isLargeScreen2() ? '' : ` icon-${isCollapsed2 ? 'expander' : 'collapser'}`)}`;
console.log(classes1); // header icon-collapser
____________________________________________________________________________________________________________________
// Теговані шаблони
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // 'That '
  let str1 = strings[1]; // ' is a '
  let str2 = strings[2]; // '.'

  let ageStr;
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // Ми можемо повернути рядок, побудований з використанням шаблонного літералу.
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}



let output = myTag`That ${person} is a ${age}.`;
// strings - масив рядків у літералі: ['That ', ' is a ', '.']
// personExp - person
// ageExp - age


