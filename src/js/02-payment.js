/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [100, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let sum = 0;

for (let el of cart) {
  if (el % 2 !== 0) continue;

  sum += el;
  console.log(`${sum - el} + ${el} = ${sum}`);
}

// console.log(el);
console.log(sum);

// const sale = 10;
