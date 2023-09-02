// ! ROM filter, map, reduce - створюють новий масив, а не модифікують новий

// filter - фільтрування даних масиву, НЕ модифікація даних
const phonePrice = [400, 700, 3000, 1200, 8000, 1500, 100, 3200, 4600];
const filteredPrice = phonePrice.filter(function (item) {
  return item >= 700 && item <= 3000;
})
console.log(filteredPrice); // [700, 3000, 1200, 1500]
____________________________________________________________________________________________________________________
// map - модифікація даних
const brands = ['HTC', 'IphOne', 'nokiA', 'SamSung', 'Xiaomi', 'Lg'];
const upperBrands = brands.map(brand => brand.toUpperCase());

console.log(upperBrands); // ['HTC', 'IPHONE', 'NOKIA', 'SAMSUNG', 'XIAOMI', 'LG']
____________________________________________________________________________________________________________________
// reduce - схлопує наш масив, напр. додавання елементів. Правило - об'єднати елементи, але як об'єднати це вже інше питання. Може бути додавання, може бути щось інше, тобто, якість розрахунки.
const orderedPrice = [140, 530, 560, 123, 900];
const res = orderedPrice.reduce((sum, current) => {
  console.log(`${sum} + ${current}`);
  return sum + current;
});
console.log(`Total price: ${res}`);
// 140 + 530 // спершу sum присвоюється значення нульового елемента, а current - значення елемента з індексом 1
// 670 + 560 // потім sum стає сумою перших двох чисел, а current наступне число у масиві
// 1230 + 123
// 1353 + 900
// Total price: 2253

_____________________________________________
// У reduce є ще одна особливість - йому можна задати дефолтне значення і тоді воно буде записане у перший агрумент, тобто, у цьому випадку у sum.
const orderedPrice1 = [140, 530, 560, 123, 900];
let defaultSum = 100;
const res1 = orderedPrice1.reduce((sum, current) => {
  console.log(`${sum} + ${current}`);
  return sum + current;
}, defaultSum); // дефолтне значення ми записуємо перед круглими дужками
console.log(`Total price: ${res1}`);
// 100 + 140
// 140 + 530
// 670 + 560
// 1230 + 123
// 1353 + 900
// Total price: 2353
____________________________________________________________________________________________________________________
// .reduce може працювати також із стрінгами
const orderBrands = ['Iphone', 'Nokia', 'HTC', 'SAMSUNG', 'LG'];
const newBrands = orderBrands.reduce((sum, current) => `${sum}; ${current}`);
console.log(newBrands);