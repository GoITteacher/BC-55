import '../css/common.css';
import '../css/book.css';
import { BooksAPI } from './modules/booksAPI';
import cardBooks from '../templates/card-books.hbs';

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

async function onCreateForm(e) {}
async function onResetForm(e) {}
async function onUpdateForm(e) {}
async function onDeleteForm(e) {}

async function loadBooks() {
  try {
    const books = await booksApi.getBooks();
    renderBooks(books);
  } catch (err) {
    console.log(err);
  }
}
loadBooks();

function renderBooks(books) {
  const markup = cardBooks(books);
  console.log(markup);
  refs.bookList.innerHTML = markup;
}
