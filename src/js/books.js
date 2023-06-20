import { BooksAPI } from './modules/roomsAPI';

const refs = {
  loadBtnElem: document.querySelector('.js-btn-load'),
  bookListElem: document.querySelector('.js-article-list'),
  createFormElem: document.querySelector('.js-create-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
};

refs.loadBtnElem.addEventListener('click', loadBooks);
refs.createFormElem.addEventListener('submit', onCreateBook);
refs.resetFormElem.addEventListener('submit', onResetBook);
refs.updateFormElem.addEventListener('submit', onUpdateBook);
refs.deleteFormElem.addEventListener('submit', onDeleteBook);

function onCreateBook(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};
  data.title = formData.get('bookTitle');
  data.author = formData.get('bookAuthor');
  data.desc = formData.get('bookDesc');

  BooksAPI.createBook(data).then(newBook => {
    const markup = bookTemplate(newBook);
    refs.bookListElem.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
}
function onResetBook(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};
  data.title = formData.get('bookTitle');
  data.author = formData.get('bookAuthor');
  data.desc = formData.get('bookDesc');
  data.id = formData.get('bookId');

  BooksAPI.resetBook(data).then(newBook => {
    const id = newBook.id;
    const markup = bookTemplate(newBook);
    const oldBookElem = refs.bookListElem.querySelector(`[data-id="${id}"]`);
    oldBookElem.insertAdjacentHTML('afterend', markup);
    oldBookElem.remove();
  });

  e.target.reset();
}
function onUpdateBook(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => {
    // key = key.toLowerCase().slice(4);
    key = key.toLowerCase().replace('book', '');
    if (value) data[key] = value;
  });

  data.id = formData.get('bookId');

  BooksAPI.updateBook(data).then(newBook => {
    const id = newBook.id;
    const markup = bookTemplate(newBook);
    const oldBookElem = refs.bookListElem.querySelector(`[data-id="${id}"]`);
    oldBookElem.insertAdjacentHTML('afterend', markup);
    oldBookElem.remove();
  });

  e.target.reset();
}
function onDeleteBook(e) {
  e.preventDefault();

  const id = e.target.elements.bookId.value;

  BooksAPI.deleteBook(id)
    .then(() => {
      const oldBookElem = refs.bookListElem.querySelector(`[data-id="${id}"]`);
      oldBookElem.remove();
    })
    .catch();

  e.target.reset();
}
function loadBooks() {
  BooksAPI.getBooks().then(data => {
    renderBooks(data);
  });
}

function bookTemplate(book) {
  return `<li class="card articles" data-id="${book.id}">
    <h4>ID - ${book.id}</h4>
  - ${book.title}<br />
  - ${book.author}<br />
</li>`;
}
function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
function renderBooks(books) {
  const markup = booksTemplate(books);
  refs.bookListElem.innerHTML = markup;
}

function fqwd() {
  return Promise.reject();
}
