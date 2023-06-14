/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// function foo() {
//   const arr = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 3];

//   return arr;
// }

// function foo() {
//   const promise = new Promise();
//   return promise;
// }
// foo().then();

// function createPromise(value, delay, isFulfilled) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isFulfilled) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });

//   return promise;
// }

// const p1 = createPromise('Hello1', 3000, true);
// const p2 = createPromise('Hello2', 2000, false);
// const p3 = createPromise('Hello3', 5000, true);
// const p4 = createPromise('Hello4', 1000, false);

/* console.log(p1, p2, p3, p4);

p1.then(onFulfilled, onRejected);
p2.then(onFulfilled, onRejected);
p3.then(onFulfilled, onRejected);
p4.then(onFulfilled, onRejected); */

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

function myFoo(arr) {
  const filteredArr = arr.filter(el => el < 50);
  return Promise.resolve(filteredArr);
}

// const result = myFoo([2, 56, 8, 2, 3, 57, 8, 3, 21, 3, 3454, 324345, 442]);

// result.then(value => {
//   console.log(value);
// });

// Promise.resolve(value)
// Promise.reject(value)

// new Promise((resolve, reject) => {
//   reject(value);
// });

/*
 * Покемоны с https://pokeapi.co/
 */

// function getData(id, renderArray) {

// }

// let posts;

// getData(3).then(data => {
//   console.log(data);
//   console.log(data);
//   console.log(data);
//   renderArra();
// });

// getData(2).then(data => {
//   posts = data;
// });

// console.log(Promise.resolve(10));

// function getData(err) {
//   return Promise.reject(err);
// }

// getData()
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const newPromise = new Promise((res, rej) => {
//   return res(10);
//   console.log('end');
// });

// ============================================================

function createPromise(value, delay, isErr = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isErr) reject(value);
      else resolve(value);
    }, delay);
  });
}

const p1 = createPromise('test1', 5000);
const p2 = createPromise('test2', 2000, true);
const p3 = createPromise('test3', 3000);
const p4 = createPromise('test4', 10000, true);

const arr = [p1, p2, p3, p4];

// const result = Promise.all(arr);
// result.then(value => {
//   console.log(value);
// });

// ===================

// const result = Promise.allSettled(arr);
// result.then(value => {
//   console.log(value);
// });

// ================

// const result = Promise.race(arr);
// result.then(value => {
//   console.log(value);

// });

// Promise.race(arr).then()
