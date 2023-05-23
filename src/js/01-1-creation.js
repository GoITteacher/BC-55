/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// number string boolean undefined null

// array function

// const arr = [10, 20, 30, 40];

// const user = {
//   name: 'Buratino',
//   phoneNumber: '+380......',
//   birthday: '20.08.1980',
//   age: 20,
// };

/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

// const user = {
//   name: 'Buratino',
//   age: 20,
// };

// user.name = 'New Name';

// user.job = 'Test';
// user.location = {};

// console.log(user);
// console.log(user1.location.position.x);
// console.log(user['location']['position']['log']);

// ========================

// const username = 'Roman';
// const age = 20;

// const user = {
//     username: username,
//     age: age,
// };

/* const key = 'test';

const user = {
  key,
  [key]: username,

    test: 'Hello',
    test: 'World',
    test: 'empty',
    name: ''
};

console.log(user); */
// ================================
/* 
const user = {
  name: 'Buratino',

  sum(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  },

  showName() {
    console.log(this.name);
    console.log(this.name);
    console.log(this.name);
  },
};

const user1 = {
  name: 'Papa Karlo',

  sum(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
  },

  showName() {
    this.testProps = '123';
    console.log(this.name);
    console.log(this.name);
  },
};

user1.newProps = '123';

user.showName();

console.log(user1); */
/*
 * Ссылочный тип {} === {}
 */

const a = { name: 'Roman' };
const b = { name: 'Roman' };

const x = a;

console.log(a === x);

/*
 * Массивы и функции это объекты
 */

const arr = [1, 2, 3];

arr[arr.length] = 123;
console.log(arr);

// function myFun() {
//   console.log(1123);
// }
