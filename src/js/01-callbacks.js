/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// function myDay(x1) {
//   console.log(x1);
// }

// function x() {}

// myDay(x);

// function test(){
//     const x = function (){};
//     return x;
// }

/*
 * функция doMath(a, b, callback)
 */

function doMath(a, b, call) {
  call(a, b);
}

const sum = function (f1, f2) {
  console.log(f1 + f2);
};
const multiply = function (f1, f2) {
  console.log(f1 * f2);
};
const devide = function (f1, f2) {
  console.log(f1 / f2);
};

doMath(5, 5, multiply);

/*
 * Отложенный вызов: регистрация событий
 */

const btn = document.querySelector('.js-button');

btn.addEventListener('click', myFun);

function myFun() {
  console.log('Hello1');
  console.log('Hello2');
}

btn.addEventListener('click', e => {});
/*
 * Отложенный вызов: интервалы
 */

function call() {
  console.log('------');
  console.log('Interval');
  console.log('------');
}

setInterval(call, 1000);

setInterval(() => {}, 2000);

setInterval(q => {}, 10);
setInterval(function () {}, 20);

// ================================================
