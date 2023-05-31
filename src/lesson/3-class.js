/* //Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

// class User {
//   constructor(userName, userAge) {
//     this.name = 'Empty';
//     this.age = 0;

//     if (userName && userName.length > 1) {
//       this.name = userName;
//     }

//     if (userAge > 0) {
//       this.age = userAge;
//     }
//   }
// }

// const myUser1 = new User(null, 20);
// const myUser2 = new User('Veronika', 18);
// const myUser3 = new User('Yarik', -18);
// const myUser4 = new User('Nazar', 30);

// console.log(myUser1);
// console.log(myUser2);
// console.log(myUser3);
// console.log(myUser4);

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. 
Проте, часто потрібно створити багато однотипних об'єктів з 
однаковим набором властивостей, але різними значеннями і 
методами для взаємодії з ними. Все це потрібно робити динамічно, 
під час виконання програми. З цією метою використовують класи - 
спеціальний синтаксис оголошення функції для створення об'єктів.
*/

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і
виклику конструктора в контексті цього об'єкта. 
Тобто this всередині конструктора буде посилатися на 
новостворений об'єкт. Це дозволяє додавати кожному 
об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// =======================================
/*
class Car {
  #maxSpeed;

  constructor({ color = 'Black', maxSpeed = 100 }) {
    this.color = color;
    this.#maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log('-------------');
    console.log('Color: ', this.color);
    console.log('Max-Speed: ', this.#maxSpeed);
    console.log('-------------');
  }

  getColor() {
    return this.color;
  }
}

const car1 = new Car({ maxSpeed: 200 });

const car2 = new Car({ color: 'black' });
const car3 = new Car({ color: 'white', maxSpeed: 500 });

// car1.#maxSpeed = 500;
// console.log(car1.);
car1.getInfo();
 */

// =================

/* class User {
  static #counter = 0;
  #age = 0;
  constructor(name) {
    this.name = name;
    User.#counter += 1;
  }

  showInfo() {
    console.log(User.#counter);
    console.log(this.name, this.#age);
  }

  set age(newAge) {
    if (newAge > 0) this.#age = newAge;
    else alert('Error age');
  }

  get age() {
    return this.#age;
  }

  static showCounter() {
    console.log(this.#counter);
  }
}

const user1 = new User('Vasya');
const user2 = new User('Vasya');
const user3 = new User('Vasya');

User.showCounter(); */

// =====================================

class Animal {
  constructor(name, age, count) {
    this.name = name;
    this.age = age;
    this.count = count;
  }
}

class Bird extends Animal {
  wingspan = 10;
  constructor(age, BirdName, count, len) {
    super();
    this.wingspan = len;
  }
}

class Fox extends Animal {
  skill = 10;
  constructor(age, BirdName, count, len) {
    super();
  }
}
class Wolf extends Animal {
  constructor(name, count, len) {
    super(name, undefined, count);
    this.woof = len;
    delete this.age;
  }

  woof() {}
}
// const myBird1 = new Bird(20, '123', 15, 5);
// const myBird2 = new Bird(20, '123', 15, 5);
// const myBird3 = new Bird(20, '123', 15, 5);

// const myFox = new Fox(20, '123', 15, 5);
const myWolf = new Wolf(20, '123', 15, 5);

// console.log(myBird1);
// console.log(myFox);
console.log(myWolf);
