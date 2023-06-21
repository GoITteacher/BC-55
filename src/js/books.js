import '../css/common.css';
import '../css/book.css';
import { BooksAPI } from './modules/booksAPI';
import cardBooks from '../templates/card-books.hbs';
import cardBook from '../templates/card-book.hbs';

const booksApi = new BooksAPI(0, 5);

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

// refs.btnLoadMore.addEventListener('click', async () => {});
refs.createForm.addEventListener('submit', onCreateForm);
refs.resetForm.addEventListener('submit', onResetForm);
refs.updateForm.addEventListener('submit', onUpdateForm);
refs.deleteForm.addEventListener('submit', onDeleteForm);

async function onCreateForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};

  formData.forEach((value, key) => {
    key = key.toLowerCase().replace('book', '');
    data[key] = value;
  });

  try {
    const createdBook = await booksApi.createBook(data);
    const markup = cardBook(createdBook);
    refs.bookList.insertAdjacentHTML('beforeend', markup);
  } catch {
    console.log('err');
  }
}
async function onResetForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};

  formData.forEach((value, key) => {
    key = key.toLowerCase().replace('book', '');
    data[key] = value;
  });

  try {
    const resultBook = await booksApi.replaceBook(data);
    const markup = cardBook(resultBook);
    const bookElem = refs.bookList.querySelector(`[data-id="${data.id}"]`);
    bookElem.insertAdjacentHTML('afterend', markup);
    bookElem.remove();
  } catch (err) {
    console.log(err);
  }
}
async function onUpdateForm(e) {}
async function onDeleteForm(e) {}

async function loadBooks() {
  try {
    const books = await booksApi.getBooks();
    renderBooks(books);
  } catch (err) {
    // console.log(err);
  }
}
loadBooks();

function renderBooks(books) {
  const markup = cardBooks(books);
  // console.log(markup);
  refs.bookList.innerHTML = markup;
}
