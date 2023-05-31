//Прототипне наслідування

// Object;

// const num = 10;
// const str = 'Hello';

const objA = {
  name: 'ObjA',
  age: 20,
  getName() {
    console.log(this.name);
  },
};

const objB = Object.create(objA);
objB.city = '345';
objB.country = '123';

// console.log(objB.__proto__);
// for (const key in objB) {
//   console.log(key);
// }
