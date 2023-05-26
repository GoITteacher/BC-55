// const arr = [10, 20, 30, 40, 50, 60, 70, 80];

// arr.forEach((el, idx) => {
//   console.log(el, idx);
// });

const arr = [
  {
    name: 'Roman1',
    age: 18,
  },
  {
    name: 'Roman2',
    age: 20,
  },
  {
    name: 'Roman3',
    age: 30,
  },
  {
    name: 'Roman4',
    age: 14,
  },
  {
    name: 'Roman5',
    age: 15,
  },
  {
    name: 'Roman6',
    age: 12,
  },
];

// arr.forEach(({ name, age }, index, arr) => {
//   console.log(`${name} ${age}`);
// });

//console.log(toUpperCase);

arr.forEach(({ name }) => {
  console.log(name.toUpperCase());
});
