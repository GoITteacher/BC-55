let myBtn = document.querySelector('#testButton');
let listItem = document.querySelector('.js-list');

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

const firstElement = listItem.querySelector('li');
console.log(firstElement);
console.log(firstElement.classList.contains('blue'));
console.log(firstElement.classList.contains('red'));

// firstElement.classList.add('class1', 'class2', 'class3');
// firstElement.classList.remove('blue', 'bold');

myBtn.addEventListener('click', onBtnClick);

// function onBtnClick() {
//   firstElement.classList.toggle('blue');
//   firstElement.classList.toggle('tomato');
//   if (firstElement.classList.contains('blue')) {
//     firstElement.classList.replace('blue', 'tomato');
//   } else {
//     firstElement.classList.replace('tomato', 'blue');
//   }
//   firstElement.classList.replace('blue', 'tomato');
// }

/* 
Властивість style
*/

function onBtnClick() {
  firstElement.style.scale = '2';
}
