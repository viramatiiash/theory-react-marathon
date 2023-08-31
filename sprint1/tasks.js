// ! Tasks #1
// 1.
function getModifiedArray(array) {
  const copiedArray = array.slice(); // slice робить копію масиву
  copiedArray[0] = 'Start'; // замінює елемент з індексом 0 на 'start'
  copiedArray[copiedArray.length - 1] = 'End'; // замінює елемент з останнім індексом  на 'end'
  return copiedArray;
}

// 2.
const filterNums = (array, number = 0, param = 'greater') => {
  let filteredArr;

  if (param === 'greater') {
    filteredArr = array.filter((el) => el > number);
  } else if (param === 'less') {
    filteredArr = array.filter((el) => el < number);
  }
  return filteredArr;
};

// Math.abs(number) - повертає абсолютне значення числа. Для додатнього числа - це саме це число. Для від'ємного - протилежне йому додатнє. Для нуля - нуль.

// 4.
const sumOfLen = (...strings) => {
  // беремо в аргументи всі стрінги, які йдуть в якості аргументів
  const str = strings.join(''); // об'єднуємо їх без пробілів
  return str.length; // визначаємо їхню довжину
};

// 5.
function combineArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  let filtered = newArr.filter((el) => {
    if (typeof el === 'number') {
      return el;
    }
  });
  return filtered;
}

// 6.
function longestLogin(loginList) {
  if (loginList.length === 0) {
    return null;
  }
  return loginList.reduce((str1, str2) => {
    if (
      str2.length > str1.length ||
      (str2.length === str1.length &&
        loginList.indexOf(str2) > loginList.indexOf(str1))
    ) {
      return str2;
    }
    return str1;
  });
}

// 7.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function processArray(arr, factorial) {
  const result = arr.map((el) => factorial(el));
  return result;
}

// 8. 
function overloadedFunc(a = [1, 2, 3], b = 2, c = (x, y) => x * y) {
  if (!Array.isArray(a)) {
    return c(a, b);
  }
  if (Array.isArray(a)) {
    return a.map((el) => c(el, b));
  }
}

// ! Tasks #2
// 1.
function combineFunctions(...functions) { // аргументами цієї функції будуть всі вхідні функції
  return function (...args) { // створюємо функцію, у якій будуть всі функції із combineFunctions, ...args - initial value
    return functions.reduce((result, func) => func(result), ...args); // перша функція відпрацює з initial value, друга викличеться із аргументом, що одночасно є результатом першої функції і т.д.
  };
}
