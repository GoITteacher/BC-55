/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

// targetBtn.addEventListener('click', onTargetBtnClick1);
// targetBtn.addEventListener('click', onTargetBtnClick2);
// targetBtn.addEventListener('click', onTargetBtnClick3);

// targetBtn.removeEventListener('click', onTargetBtnClick1);

// function handleTargetBtnClick(){}
// function targetBtnClickHandler(){}
// function onTargetBtnClick1() {
//   console.log('Hello1');
// }
// function onTargetBtnClick2() {
//   console.log('Hello2');
// }
// function onTargetBtnClick3() {
//   console.log('Hello3');
// }

// ==========================

addListenerBtn.addEventListener('click', onAddBtnClick);
removeListenerBtn.addEventListener('click', onRemoveBtnClick);

function onAddBtnClick() {
  console.log('Add Listener');
  targetBtn.addEventListener('click', onTargetBtnClick);
}

function onRemoveBtnClick() {
  console.log('Remove Listener');
  targetBtn.removeEventListener('click', onTargetBtnClick);
}

function onTargetBtnClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log('On Target Click');
}

//
