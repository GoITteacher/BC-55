/*
 * Цикл while
 */

// let value = prompt('Enter your number');
// value = Number(value);
// console.log(value);

// while (Number.isNaN(value)) {
//   value = prompt('Enter your number');
//   value = Number(value);
//   console.log(value);
// }

/*
 * Цикл do while
 */

// let value;
// do {
//   value = prompt('Enter your number');
//   value = Number(value);
//   console.log(value);
// } while (Number.isNaN(value));

/*
 * Цикл for
 */

// debugger;
for (let i = 0; i <= 10; i++) {
  if (i % 3 === 0) break;

  let x = 10;
  console.log(i);
}

// 0 % 3 = 0
// 1 % 3 = 1 - (3*0) = 1
// 2 % 3 = 2 - (3*0) = 2
// 3 % 3 = 3 - (3*1) = 0
// 4 % 3 = 4 - (3*1) = 1
// 5 % 3 = 4 - (3*1) = 2
// 6 % 3 = 4 - (3*1) = 0
// 7 % 3 = 4 - (3*1) = 1
// 8 % 3 = 4 - (3*1) = 2

console.log('End');

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

let min = 0;
let max = 10;
