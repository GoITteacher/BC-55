const BASE_URL = 'http://localhost:5000';
const END_POINT = '/books';
const URL = BASE_URL + END_POINT;
export class BooksAPI {
  static getBooks() {
    return fetch(URL).then(res => res.json());
  }

  static createBook(newBook) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newBook),
    };
    return fetch(URL, options).then(res => res.json());
  }

  static updateBook({ id, ...book }) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(book),
    };
    const url = `${URL}/${id}`;

    return fetch(url, options).then(res => res.json());
  }

  static resetBook({ id, ...book }) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(book),
    };
    const url = `${URL}/${id}`;

    return fetch(url, options).then(res => res.json());
  }

  static deleteBook(id) {
    const options = {
      method: 'delete',
    };
    const url = `${URL}/${id}`;

    return fetch(url, options).then(res => res.json());
  }
}
