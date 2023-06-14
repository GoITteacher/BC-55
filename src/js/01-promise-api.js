/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise1 = new Promise((resolve, reject) => {
  const random = Math.random(); // 0 .. 1; 0.5
  if (random >= 0.5) {
    resolve(random);
  } else {
    reject(random);
  }
});

// promise1.then(
//   value => {
//     console.log('Ok', value);
//   },
//   value => {
//     console.log('Error', value);
//   },
// );

// promise1.catch(onRejected);

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise1
  .then(value => {
    console.log('promise 1 - ', value);
    return value;
  })
  .then(
    result => {
      console.log(result);
    },
    () => {},
  )
  .catch(result => {
    console.log(result);
  });
