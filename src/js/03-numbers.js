/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */
// let userNum = prompt('Enter your number'); // '1'
// userNum = Number.parseInt(userNum);
// console.log(userNum);

// let userNum = prompt('Enter your number'); // '123.43'
// userNum = Number.parseFloat(userNum);
// console.log(userNum);

/*
 * - Метод число.toFixed(digits)
 */

// let num = 10.34546;
// let str = num.toFixed(3);
// console.log(str);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

// let str = '4';
// str = Number(str);
// console.log(str);

// let str = '123';
// str = +str;
// console.log(str);

// let num = 'hello'; // = NaN
// num = Number(num); // NaN - 10;
// console.log(Number.isNaN(num));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// Math.pow(x,y)
// console.log(x ** y);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
//  2. попросить ввести степень и сохранить в переменную
//  3. Возвести введенные данные в степень и вывести

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */

// const myRand = Math.random();
// console.log(myRand);

// 0 * 100 = 0
// ... * 100 = 0..100
// 1 * 100 = 100;

// let rand = Math.random() * 100;
// rand = Math.ceil(10.789);
// rand = Math.floor(10.999);
// rand = Math.round(rand);
// console.log(rand);

const x = 2;
const y = 6;

const result = x ** y;
console.log(result);
