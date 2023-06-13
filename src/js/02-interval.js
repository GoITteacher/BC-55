import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

function myFoo() {
  console.log('Drinking - ', count++);
}

// setTimeout(() => {
//   setInterval(myFoo, 1000, 1);
// }, 5000);

let count = 0;
const id = setInterval(myFoo, 1000);
console.log(id);

/*
 * Очистка интервала с clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(id);
}, 7000);
