const array = [6, 3, 2, 1, 4];

// array.forEach(myCallback);
// function myCallback(el, index, array) {
//   if (el % 2 !== 0) return;
//   console.log(`${el}*${index} = ${el * index}`);
// }

array.forEach((el, index) => console.log(el * index));

/* 

myCallback(array[0], 0, array)
myCallback(array[1], 1, array)
myCallback(array[2], 2, array)
myCallback(array[3], 3, array)
myCallback(array[4], 4, array)
*/
