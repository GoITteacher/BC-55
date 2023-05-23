/*
 * Функции
 * - Аргументы и параметры
 * - Возврат значения
 * - Функциональные выражения
 */

// function foo(money) {
//   const res1 = money * 2;
//   const res2 = money * 4;
//   return [res1, res2];
// }
// let num1 = foo(100);
// console.log(num1);

// function sum() {
//   const arr = Array.from(arguments);
//   arr.shift();
//   let sum = 0;
//   for (let value of arr) {
//     sum += value;
//   }
//   console.log(sum);
// }
// sum(1, 2, 3, 4, 5, 6);
// sum('Hello', 'World');

// ==========================

// function foo(x, y, q) {
//   let result;

//   if (x === 0) {
//     return 0;
//   }

//   result = x * y;
//   result = (result * q) / x;
//   return result;
// }

// const myResult = foo(0, 2, 3);
// console.log(myResult);

function buyProduct(money) {
  if (money === 0) {
    return 'Error!';
  }

  return;
}

// const result = buyProduct(0);
// console.log(result);
/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

// ===================

/* 
function foo(.........){
    .........
    return 
}

foo(.........)

*/

// let x = 15;
// let y = 20;

// function foo() {
//   let y = 30;

//   if (x > 10) {
//     let y = 40;
//     console.log(x + y);
//   } else {
//     console.log(x + y);
//   }
// }

// foo();
