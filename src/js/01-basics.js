/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// let arr = [10, '30', 39, true, 45, 'Hello'];

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// console.table(arr);
// arr[0] = 123;
// arr[1] = 'Hello';
// arr[0] = arr[arr.length - 1];
// console.table(arr);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

// let num1 = 10;
// let num2 = num1;

// let arr1 = [1, 2, 3];

// let arr2 = arr1;

// console.log(arr1 === arr2);
// arr1[0] = 'Hello';
// console.log(arr2[0]);

// arr2[10] = 'Test';
// console.log(arr1);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

// const arr = [20, 30, 14, 5];
// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   console.log(arr[i]);
// }
// console.log(arr);
// for (const elem of arr) {
//   console.log(elem);
//   elem *= 2;
// }

/*
 * - split
 * - join
 * - indexOf
 * - includes
 * - push
 * - pop
 * - shift
 * - unshift
 */

// const str = 'HELLo World Test 123';
// const result = str.split(' ');
// console.log(result);

// const result = friends.join(' ');
// console.log(result);

// const index = friends.indexOf('Ajax');
// const index1 = friends.lastIndexOf('Ajax', 2);
// console.log(index, index1);

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] = friends[i].toLowerCase();
// }
// const result = friends.includes('123');
// console.log(result);

// const friends = ['Test', 'Hello', 'Mango', 'Kiwi', 'Poly', 123, 345];
// console.table(friends);

// friends.push('HELLO');
// friends.push('World');
// const result = friends.push(123);
// friends.unshift('Hello');
// friends.unshift('Test');

// const res = friends.pop();
// console.table(friends);
// friends.shift();
// console.table(friends);

// let str = 'Hello';
// str = 'hello';
// console.log(str);
