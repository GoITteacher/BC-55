let myBtn = document.querySelector('#testButton');
let ulElem = document.querySelector('ul');
myBtn.addEventListener('click', onBtnClick);

/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/

/* function onBtnClick() {
  let result = '';
  for (let i = 0; i < 1000; i++) {
    let myClass = i % 2 === 0 ? 'blue' : 'tomato';
    result += `<li class=${myClass}>${i}</li>`;
  }
  console.log(result);

  ulElem.innerHTML = 'result';
} */

// function onBtnClick() {
//   const elem = '<li>Test</li>';
//   ulElem.insertAdjacentHTML('afterend', elem);
// }

// ==================

// TExt Content

function onBtnClick() {
  //   console.log(ulElem.textContent);
  ulElem.textContent = '<li>Hello</li>';
  ulElem.innerHTML = '';
}
