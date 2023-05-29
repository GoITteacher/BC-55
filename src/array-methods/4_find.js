/*
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
 - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
*/

let users = [
  {
    name: 'Roman',
    age: 12,
    phone: '+28099448',
    isAdmin: false,
  },
  {
    name: 'Max',
    age: 20,
    phone: '+28098854185',
    isAdmin: true,
  },
  {
    name: 'Vova',
    age: 31,
    phone: '+280996161',
    isAdmin: false,
  },
];

// const findUser = users.find((user, index, array) => {
//   return user.isAdmin;
// });
// const findUser = users.find(user => user.isAdmin);

// const findUser = users.find(user => user.phone.includes('+28098'));

// const findUser = users.find(user => {
//   console.log(user.name);
//   return user.isAdmin;
// });

// console.log(findUser);
