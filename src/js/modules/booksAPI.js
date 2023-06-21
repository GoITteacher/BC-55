import axios from 'axios';
const baseURL = 'http://localhost:5000';

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

  async createBook(book) {
    const data = await axiosV2.post('', book);
    return data.data;
  }

  async replaceBook({ id, ...book }) {
    const data = await axiosV2.put(`/${id}`, book);
    return data.data;
  }

  async updateBook({ id, ...book }) {
    const data = await axiosV2.patch(`/${id}`, book);
    return data.data;
  }

  deleteBook(id) {}
}
