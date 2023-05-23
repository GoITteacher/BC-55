/*
 * Перебор через for...in и Object.keys|values|entries
 */

let father = {
  bad: 3,
  good: 5,
  neutral: 10,
};

const child = Object.create(father);

child.newName = 'child Name';
child.phone = '123';
child.age = '234';

console.log(child);

for (let key in child) {
  if (child.hasOwnProperty(key)) console.log(key, child[key]);
}

const user = {
  name: [],
  age: 'awd2',
  phone: 'awd3',
  patronymic: 'awd4',
  location: 'awd5',
  isActive: 'awd6',
  status: 'awd7',
  emptyKey: undefined,
  showName() {
    console.log(234);
  },
};

// console.log(user);

const result1 = Object.keys(user);
const result2 = Object.values(user);
const result3 = Object.entries(user);

console.log(result1);
// for (let key of result1) {
//   console.log(key, user[key]);
// }

// for (let key of result2) {
//   console.log(key);
// }

// for (let arrPair of result3) {
//   console.log(arrPair);
//   const key = arrPair[0];
//   const value = arrPair[1];
// }

// for (let key in feedback) {
//   if (feedback.hasOwnProperty(key)) console.log(feedback[key]);
// }

// let totalFeedback = 0;

const user1 = {
  name: 'Yarik',
};
console.log(user1.hasOwnProperty('phoneNumber'));
