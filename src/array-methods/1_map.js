/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.
*/

/* const arr = ['Hello', 'World', 'Java Script', 'React'];

const newArr = arr.map((el, i, array) => {
  return el.toUpperCase();
});

console.log(arr);
console.log(newArr); */

/* const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map((el, index) => {
  if (index % 2 !== 0) {
    return el * 2;
  } else {
    return el * 4;
  }
});
console.log(arr);
console.log(newArr); */

/* const arr = [-5, 1, 4, -2, -7, 1, 6, -3, 5];
const newArr = arr.map((el, index) => {
  if (el < 0) {
    el = el * -1;
  }

  return el;
});
console.log(arr);
console.log(newArr); */

const arr = [-5, 1, 4, -2, -7, 1, 0, 6, -3, 5];
const newArr = arr.map((el, index, array) => {
  el /= array[index + 1] ?? 1;
  return el;
});
console.log(arr);
console.log(newArr);
