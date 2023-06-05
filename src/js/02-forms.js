/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formElem = document.querySelector('.js-register-form');

formElem.addEventListener('submit', onFormSubmit);

/* function onFormSubmit(e) {
  e.preventDefault();
  const email1 = formElem.elements.email1.value;
  const email2 = formElem.elements.email2.value;
  const email3 = formElem.elements.email3.value;

  console.log(formElem.elements);
  const data = {
    email1,
    email2,
    email3,
  };

  console.log(data);
} */

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formElem);
  const data = {};

  //   formData.delete('email1');
  //   formData.forEach((value, key) => {
  //     data[key] = value;
  //   });

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  console.log(data);
}
// ===========

// const divElem = document.querySelectorAll('[data]');
// console.log(divElem.dataset);
