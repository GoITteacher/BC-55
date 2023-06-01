/* 
Створіть клас "Фігура" з приватними властивостями
"ширина" і "висота". У класі "Фігура" також повинні бути методи для
обчислення площі та периметра фігури. Створіть підкласи "Прямокутник" і
"Квадрат", які успадковують властивості і методи від класу "Фігура". У підкласах
перевизначте конструктор таким чином, щоб він приймав лише один параметр
(довжину сторони для квадрата і довжину і ширину для прямокутника). Перевірте
роботу класів, створивши об'єкти "Прямокутник" і "Квадрат" і використовуючи їх
методи для обчислення площі і периметра.
*/

class Figure {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  getArea() {
    return this.#height * this.#width;
  }
  getPerimeter() {
    return 2 * this.#height + 2 * this.#width;
  }

  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }

  showInfo() {
    console.log('--------------');
    console.log('Area:', this.getArea());
    console.log('Per:', this.getPerimeter());
    console.log('Width:', this.width);
    console.log('Height', this.height);
    console.log('--------------');
  }
}

class Square extends Figure {
  constructor(lenA) {
    super(lenA, lenA);
  }
}

class Rectangle extends Figure {
  constructor(phone1, phone2) {
    super(phone1, phone2);
  }
}

const square = new Square(10);
const rectangleA = new Rectangle(10, 20);

square.showInfo();
rectangleA.showInfo();
