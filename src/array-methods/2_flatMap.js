/*
 - Метод flatMap(callback) - аналогічний методу map(),
 - але застосовується у випадках, коли результат - це багатовимірний масив,
 - який необхідно «розгладити».
*/

// let objs = [
//   {
//     name: "123",
//     friend: ["Jonh1", "Marta1"],
//   },

//   {
//     name: "123",
//     friend: ["Jonh2", "Marta3"],
//   },

//   {
//     name: "123",
//     friend: ["Jonh4", "Marta5"],
//   },

//   {
//     name: "123",
//     friend: ["Jonh6", "Marta7"],
//   },
//   {
//     friend: 1312,
//   },
// ];

// let array = [[2, 6], [1, [[5]], 8], [2, [1]], [23], 61, 56];
// let array = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
let array = [2, 6, 1, [[5], 8], 2, [1], 23, 61, 56];

const newArr = array.flatMap(el => {
  return el;
}, 5);

console.log(newArr);
//
// ===================

const users = [
  {
    name: 'Roman0',
    age: 20,
    friends: ['Nazar', 'Alena', 'Mila', 'Nadiya'],
    langs: ['JS', 'C#'],
  },
  {
    name: 'Roman1',
    age: 20,
    friends: ['Volodymyr', 'Alena', 'Max', 'Stas'],
    langs: ['SQL', 'JAVA'],
  },
  {
    name: 'Roman2',
    age: 20,
    friends: ['Anton', 'Alina', 'Mariya', 'Vira'],
    langs: ['REACT', 'NODE JS'],
  },
];

const friends = users.flatMap(user => user.friends);
const langs = users.flatMap(user => user.langs);

console.log(langs);
