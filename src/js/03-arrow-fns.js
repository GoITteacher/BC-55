/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 */

// const foo1 = function(){};
// const foo2 = () => {};

// const foo1 = function (x1, x2) {
//   console.log(x1 + x2);
// };
// const foo2 = (x1, x2) => {
//   console.log(x1 + x2);
// };

// ====================

// const sum = (x, y) => {
//   if (x > y) {
//     return x * y;
//   } else {
//     return x + y;
//   }
// };

// const sum1 = (x, y) => (x > y ? x * y : x + y);

// const result = sum1(10, 29);

// console.log(result);

// ===========

// const test = y => y.toUpperCase(); // 'HELLO'

// const result1 = test('Hello');

// console.log(result1);

// =====================================

function foo(x) {
  console.log(x);
}

const myNum = 10;
foo(myNum);
foo(10);
