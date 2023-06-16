const btnElem = document.querySelector('.js-btn');
const listElem = document.querySelector('.js-list');
btnElem.addEventListener('click', () => {
  getPosts().then(result => {
    renderPosts(result);
  });
});

function getPosts() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = '?userId=3';
  const URL = BASE_URL + END_POINT + PARAMS;

  return fetch(URL).then(response => {
    return response.json();
  });
}

function renderPosts(posts) {
  const markup = posts
    .map(el => {
      return `<li class="card">
    <h3>${el.title}</h3>
    <p>${el.body}</p>
    <p>${el.userId}</p>
  </li>`;
    })
    .join('');

  listElem.insertAdjacentHTML('beforeend', markup);
}
