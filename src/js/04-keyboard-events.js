/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
  input: document.querySelector('input'),
};

refs.input.addEventListener('keydown', e => {
  e.preventDefault();
});

/* document.addEventListener('keypress', e => {
  // console.log(e);
  const code = e.code;
  const key = e.key;
  const keyCode = e.keyCode;
  const shiftKey = e.shiftKey;
  const ctrlKey = e.ctrlKey;

  console.log(code);
  console.log(key); // 'ж' 'q' 'Q'
  console.log(keyCode); // '1110' '234' '123'
  console.log(shiftKey);
  console.log(ctrlKey);

  if (shiftKey && key === 'c') {
    console.log('Hello');
  }
}); */

document.addEventListener('keydown', e => {
  console.log(e.code);
  console.log(e.keyCode);
  console.log(e.key);
});

// document.addEventListener('keyup', e => {
//   console.log(e);
//   console.log(e.code);
//   console.log(e.keyCode);
//   console.log(e.key);
// });
