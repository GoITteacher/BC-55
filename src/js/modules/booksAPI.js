import axios from 'axios';
const baseURL = 'http://localhost:4040';

const axiosV2 = axios.create({
  baseURL: `${baseURL}/books`,
});

export class BooksAPI {
  constructor(page, limit) {
    this._page = page;
    this._limit = limit;
  }

  async getBooks() {
    const res = await fetch('http://localhost:5000/books');
    if (res.ok) return await res.json();
    else Promise.reject('Error');
  }

  getLimitBooks() {}

  createBook(book) {}

  replaceBook({ id, ...book }) {}

  updateBook({ id, ...book }) {}

  deleteBook(id) {}
}
