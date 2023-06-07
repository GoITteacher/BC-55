let list = [
  { label: 'Html' },
  { label: 'Css' },
  { label: 'JavaScript' },
  { label: 'Redux' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'C++' },
  { label: 'C#' },
  { label: 'NodeJs' },
  { label: 'Vanil' },
];

let filterElem = document.querySelector('.js-filter');
let listElem = document.querySelector('.js-list');

function renderList(arr) {
  const markup = arr
    .map(el => {
      return `<li>${el.label}</li>`;
    })
    .join('');

  listElem.innerHTML = markup;
}

filterElem.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(e) {
  const value = e.target.value;
  const filteredArr = list.filter(el => el.label.includes(value));
  if (filteredArr.length > 0) renderList(filteredArr);
  else alert('Error');
}
renderList(list);
