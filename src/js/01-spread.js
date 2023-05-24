/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const arr = [1, 2, 3, 4, 5, 6];
// const arr1 = [...arr];

// console.log(arr);
// console.log(...arr);
// console.log(arr1);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

// const temps = [21, 17, 29, 24];
// const max = Math.max(...temps);
// const min = Math.min(...temps);
// console.log(max);

// const test = [1, 5, 1, 3, 5, 78, 2, 7, 8, 9, 2];
// const test2 = [9, 9, 9, 9];
// test2.unshift(...test);
// console.log(test2);

// const arr = [1, 2, 3, 4, 5, 6];
// const newObj = { ...arr };
// const newArr = [...arr];
// const newObj2 = { ...newObj };
// newObj[4] = 'Hello';
// console.log(newObj, newArr, newObj2);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// const result = [].concat(arr1, [10,99],arr2, arr3);
const result = [1, 0, ...arr1, 10, 99, ...arr2, ...arr3];

// console.log(result);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

const obj1 = {
  a: 'Test',
  b: '23423523',
  c: 20,
};

const obj2 = {
  c: 123,
  d: 456,
  e: 345,
};

const obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3);
