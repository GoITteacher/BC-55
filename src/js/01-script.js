import '../css/common.css';
import { refs } from './modules/refs.js';
import { getQuotes } from './modules/quotesAPI';
import quotesTemplate from '../templates/quotes-card';
import heroesTemplate from '../templates/hero-card';
import { getHero } from './modules/heroesAPI';

import { getUsersPosts } from './modules/usersAPI.js';

// =======================================================
refs.form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();

  let dataPromise = getQuotes();
  dataPromise.then(value => {
    refs.cardContainer.innerHTML = quotesTemplate(value);
  });
}
// =======================================================

refs.form1.addEventListener('submit', onSearchHero);

function onSearchHero(e) {
  e.preventDefault();

  const heroName = refs.form1.elements.query.value;
  getHero(heroName)
    .then(resolve => resolve.json())
    .then(hero => {
      console.log(heroesTemplate(hero));
      refs.cardContainer1.innerHTML = heroesTemplate(hero);
    });
}
// =======================================================

refs.form2.addEventListener('submit', e => {
  e.preventDefault();

  const value = e.target.elements.query.value;
  getUsersPosts(value)
    .then(result => {
      renderPosts(result);
    })
    .catch(err => {
      console.log(err);
    });
  e.target.reset();
});

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

  refs.cardContainer2.innerHTML = markup;
}

// =======================================================

refs.form3.addEventListener('submit', e => {
  e.preventDefault();

  fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(res => res.json())
    .then(arr => {
      console.log(arr);
      const markup = arr
        .map(el => {
          return `<img src="${el.url}" alt="#">`;
        })
        .join('');
      refs.cardContainer3.innerHTML = markup;
    });
});
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
