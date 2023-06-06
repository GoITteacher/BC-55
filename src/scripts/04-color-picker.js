let colorPalette = [];
const LENGTH = 5;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();
////////////////////////////////////////////////////////////////////////////

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

////////////////////////////////////////////////////////////////////////////

function cardTemplate({ hex, rgb }) {
  return `
<li class="color-item" data-color="${hex}">
  <button class="color-body" style="background-color: ${hex}"></button>
  <div class="color-footer">
    <div>HEX: ${hex}</div>
    <div>RGB: ${rgb}</div>
    <div></div>
  </div>
</li>
  `;
}

function cardsTemplate(array) {
  return array.map(cardTemplate).join('');
}

function renderPalette() {
  const markup = cardsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
}

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  renderPalette();
});

refs.itemList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  const color = liElem.dataset.color;

  document.body.classList.add('show-modal');
  refs.modalElement.style.backgroundColor = color;
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  document.body.classList.remove('show-modal');
});

/* 
nodeName
<li class="color-item">
  <button class="color-body" style="background-color: ..."></button>
  <div class="color-footer">
    <div>HEX: ....</div>
    <div>RGB: ....</div>
    <div></div>
  </div>
</li>

*/
