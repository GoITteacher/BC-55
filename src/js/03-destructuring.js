/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */
// const user = {
//   firstname: 'Hello',
//   lastname: 'sfsef',
//   age: 99,
//   phoneNumber: '24235432',
// };

// const { firstname = false, test = 'awd' } = user;
// console.log(firstname, test);

// const firstname = user.firstname;
// const lastname = user.lastname;
// const phoneNumber = user.phoneNumber;
// const age = user.age;
// const test = user.test;

// const { firstname = 'Empty', phoneNumber, lastname, age } = user;
// console.log(firstname);
//const awd = user.firstname;
// const { firstname: awd } = user;
// console.log(awd);

/* const user = {
  name: 'Ivan',
  age: 99,
  phoneNumber: '24235432',
  location: {
    x: 1000,
    y: 2233,
  },
}; */

// let newName = user.name || 'Default';
// let { name: newName = 'Default' } = user;
// console.log(newName);

/*
 * Глубокая деструктуризация
 */

// const {x,y} = user.location;
// const {x1,y2} = user.location;
// const {x2,y3} = user.location;

// const {
//   location: { y },
// } = user;

// console.log(y);

/*
 * Деструктуризация массивов
 */

// const arr = [1, 2, 3, 4];
// const [x1, x2, x3, x4 = 'Default'] = arr;
// console.log(x1, x2, x3, x4);

// let x = 10;
// let y = 20;
// let temp = x;
// x = y;
// y = temp;
// console.log(x, y);

// let x = 10;
// let y = 20;
// [y, x] = [x, y];
// console.log(x, y);

/*
 * Операция rest (сбор)
 */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 4, 1, 3, 5, 8];
// const [x1, x2, x3, ...elems] = arr;
// console.log(x1, x2, x3);
// console.log(elems);

// const user = {
//   a: 1, //
//   b: 'saef', //
//   c: 'sefsr',
//   d: 'dth',
//   e: 'sefse', //
// };

// const { a, e, b, ...props } = user;
// console.log(a, b, e);
// console.log(props);
/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

function showUser({
  name = 'Default',
  phoneNumber = '000',
  age = 18,
  isAdmin = false,
}) {
  console.log('Name - ', name);
  console.log('phoneNumber - ', phoneNumber);
  console.log('age - ', age);
  console.log('isAdmin - ', isAdmin);
}

const obj = {
  isAdmin: true,
  phoneNumber: '123123',
  age: 3234,
  name: 'Roman',
};

// showUser(obj);

// ===================

function foo({ x, y, q = 1 }) {
  console.log(x + y * q);
}

const obj1 = {
  y: 20,
  x: 10,
};

foo(obj1);
