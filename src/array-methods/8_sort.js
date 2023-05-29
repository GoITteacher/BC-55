/*

 - Сортує і змінює вхідний масив.
 - Повертає змінений масив, тобто посилання на відсортований вихідний.
 - За замовчуванням сортує за зростанням.
 - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
 
*/

let cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/* const arr = [1, 2, 11, 12, 21, 22, 3, 31, 232];

arr.sort((a, b) => {
  return a - b;
});

console.log(arr); */

// const arr = ['Anton', 'Max', 'Max', 'Borys', 'Marina'];

// arr.sort((a, b) => {
//   console.log(a, b);
//   console.log(a.localeCompare(b));
//   return a.localeCompare(b);
// });

// console.log('\n\n\n\n');
// console.log(arr);
// =================

const users = [
  {
    name: 'Max',
    age: 22,
    friends: ['Nazar', 'Alena', 'Mila', 'Nadiya'],
    langs: ['JS', 'C#'],
  },
  {
    name: 'Roman',
    age: 15,
    friends: ['Volodymyr', 'Alena', 'Max', 'Stas'],
    langs: ['SQL', 'JAVA'],
  },
  {
    name: 'Mila',
    age: 28,
    friends: ['Anton', 'Alina', 'Mariya', 'Vira'],
    langs: ['REACT', 'NODE JS'],
  },
  {
    name: 'Borys',
    age: 20,
    friends: ['Nikita', 'Anastasiya'],
    langs: ['VueJs'],
  },
  {
    name: 'Borys',
    age: 18,
    friends: ['Nikita', 'Anastasiya'],
    langs: ['VueJs'],
  },
];

users.sort((b, a) => {
  if (a.name === b.name) {
    return b.age - a.age;
  } else {
    return a.name.localeCompare(b.name);
  }
});
console.log(users);

// [Object object]
