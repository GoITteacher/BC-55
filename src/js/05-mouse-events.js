/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');
const boxRef1 = document.querySelector('.js-box > .inner-box');

// boxRef.addEventListener('mouseenter', e => {
//   boxRef.classList.add('wrong');
// });

// boxRef.addEventListener('mouseleave', e => {
//   boxRef.classList.remove('wrong');
// });

// boxRef.addEventListener('mouseover', e => {
//   console.log('over');
// });

// boxRef.addEventListener('mouseout', e => {
//   console.log('out');
// });

boxRef1.style.position = 'absolute';
boxRef.addEventListener('mousemove', e => {
  boxRef1.style.left = `${e.clientX}px`;
  boxRef1.style.top = `${e.clientY}px`;
});
