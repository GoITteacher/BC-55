import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

function myFoo(x, y) {
  console.log('Hello');
}

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
const id1 = setTimeout(myFoo, 0, 0, 1);
// const id2 = setTimeout(myFoo, 2000, 0, 2);
// const id3 = setTimeout(myFoo, 4000, 0, 3);
// const id4 = setTimeout(myFoo, 1000, 0, 4);

// console.log(id1, id2, id3, id4);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// clearTimeout(id3);
// clearTimeout(id2);
// clearTimeout(id1);
