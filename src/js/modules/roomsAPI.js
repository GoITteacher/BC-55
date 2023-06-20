import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5000',
  url: '/users',
  headers: { 'api-key': 'sefsfs', 'api-host': 'sefsef' },
  params: { apiKey: 10 },
});

const END_POINT = '123';
const BASE_URL = '123';
const URL = BASE_URL + END_POINT;
export class BooksAPI {
  static getBooks() {
    return instance
      .get('/books', {
        params: {
          test: 1231,
        },
      })
      .then(res => {
        return res.data;
      });
  }

  static createBook(newBook) {
    return instance.post(URL, newBook).then(res => res.data);
  }

  static updateBook({ id, ...book }) {
    const url = `${URL}/${id}`;
    return instance.patch(url, book).then(res => res.data);
  }

  static resetBook({ id, ...book }) {
    const url = `${URL}/${id}`;
    return instance.put(url, book).then(res => res.data);
  }

  static deleteBook(id) {
    const url = `${URL}/${id}`;
    return instance.delete(url).then(res => res.data);
  }
}

instance.request({
  baseURL: '234',
  url: '1231',
  params: {},
  method: 'post',
  body: { name },
});
