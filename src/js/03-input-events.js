/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

/* refs.input.addEventListener('focus', e => {
  e.target.classList.remove('okay');
  e.target.classList.remove('wrong');
});

refs.input.addEventListener('blur', e => {
  const value = e.target.value;
  if (value.length < 5) {
    e.target.classList.add('wrong');
  } else {
    e.target.classList.add('okay');
  }
}); */

refs.input.addEventListener('input', e => {
  const value = e.target.value;
  refs.nameLabel.textContent = value || 'Anonym';
});

refs.licenseCheckbox.addEventListener('change', e => {
  refs.btn.disabled = !e.target.checked;
});

//true || true
