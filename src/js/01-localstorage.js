/* const obj = {
  name: 'Volodka',
  age: 23,
  phoneNumber: '12312324',
};

console.log(obj.toString());
console.log(JSON.stringify(obj)); */

// =======================

// const obj = {
//   x: 120,
//   y: 'Hello',
//   isActive: false,
// };
// const result = JSON.stringify(obj);
// const result1 = JSON.stringify('Hello');

// console.log(result);
// console.log(result1);
// console.log('Hello');

// ===========================

// const myObj = JSON.parse('Hello');
// console.log(myObj);

// =======

/* const user = {
  name: 'Test',
  showName() {},
  friends: [1, 2, null, 4, 5, 6],
};
const jsonUser = JSON.stringify(user);

console.log(jsonUser); */

// function foo() {}
// const result = JSON.stringify([]);
// console.log(result);

// ===========================

function foo1() {
  foo2();
}
function foo2() {
  foo3();
}
function foo3() {
  foo4();
}
function foo4() {
  foo5();
}
function foo5() {
  try {
    const i = prompt('Test');
    const result = JSON.parse(i);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

foo1();

// ===========================

// const name = localStorage.getItem('inputName');
// console.log(name);

// const user = {
//   name: 'Volodka',
//   phone: '34564575',
//   isStudent: false,
//   isTeacher: true,
// };

// const jsonUser = JSON.stringify(user);
// localStorage.setItem('test2', jsonUser);

// const data = localStorage.getItem('test2');
// const myObj = JSON.parse(data);
// console.log(localStorage);
/// =================

// JSON.stringify(`Hello`); // => "Hello"
