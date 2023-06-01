/* 
Створіть клас "Книжка" з приватними властивостями "назва" і "автор".

У класі "Книжка" повинен бути статичний метод "кількістьКнижок",
який повертає загальну кількість створених об'єктів класу "Книжка".

Статична властивість library
*/

class Book {
  #name;
  #author;
  static library = [];

  constructor(name, author) {
    this.#author = author;
    this.#name = name;
    Book.library.push(this);
  }

  static getCountBooks() {
    return Book.library.length;
  }

  static getBooksByPage(pageIndex, limit) {
    const maxPage = Math.ceil(Book.library.length / limit);

    if (pageIndex > maxPage || pageIndex <= 0) {
      return `Error! Max pages: ${maxPage}`;
    }

    const startIndex = (pageIndex - 1) * limit;
    const endIndex = startIndex + limit;
    return Book.library.slice(startIndex, endIndex);
  }
}

new Book('1', '1q');
new Book('2', '2q');
new Book('3', '3q');
new Book('4', '4q');
new Book('5', '4q');
new Book('6', '4q');
new Book('7', '4q');
new Book('8', '4q');
new Book('9', '4q');
new Book('9', '4q');
new Book('9', '4q');
new Book('9', '4q');
new Book('9', '4q');
new Book('9', '4q');

console.log(Book.library);
console.log(Book.getBooksByPage(10, 4));
console.log(Book.getBooksByPage(4, 4));
