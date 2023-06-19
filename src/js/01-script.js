import { NewsAPI } from './modules/newsApi.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  listElem: document.querySelector('.js-article-list'),
  btnLoadElem: document.querySelector('.js-btn-load'),
};
const newsApi = new NewsAPI();

let observer = new IntersectionObserver(intersectionCallback);
observer.observe(refs.btnLoadElem);

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  refs.listElem.innerHTML = '';
  newsApi.page = 1;
  newsApi.query = query;
  newsApi
    .getArticles()
    .then(data => {
      refs.btnLoadElem.disabled = data.page >= data.total_pages;
      const markup = articlesMarkup(data.articles);
      renderArticles(markup);
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
});

refs.btnLoadElem.addEventListener('click', onLoadMore);

function articlesMarkup(array) {
  return array
    .map(({ media, title, summary, author, published_date, topic }) => {
      return `
<li class="news-card card">
    <img src="${media}" alt="${topic}" />
    <h3 class="card-title">${title}</h3>
    <p class="card-desc">${summary}</p>
    <div class="card-footer">
        <p>${author}</p> <span>${published_date}</span>
    </div>
</li>`;
    })
    .join('\n');
}

function onLoadMore() {
  console.log('LOAD');
  newsApi
    .getArticles()
    .then(data => {
      refs.btnLoadElem.disabled = data.page >= data.total_pages;
      const markup = articlesMarkup(data.articles);
      renderArticles(markup);
    })
    .catch(err => {
      console.log(err);
    });
}
function renderArticles(markup) {
  refs.listElem.insertAdjacentHTML('beforeend', markup);
}

function intersectionCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.75) {
        onLoadMore();
      }
    }
  });
}
/* 
<li class="news-card card">
    <img src="#" alt="#" />
    <h3 class="card-title">Title</h3>
    <p class="card-desc">Desc</p>
    <div class="card-footer">
        <p>Author</p>
    </div>
</li>
*/
