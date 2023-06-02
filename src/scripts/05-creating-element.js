let myBtn = document.querySelector('#testButton');
let list = document.querySelector('.usernames');

/* 
Створення
document.createElement(tagName);
*/

const myElem = document.createElement('li');
myElem.classList.add('blue');

const myElem1 = document.createElement('li');
myElem1.classList.add('blue');

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

// list.append(myElem, myElem1);
// list.prepend(myElem, myElem1);
// list.after(myElem, myElem1);
// list.before(myElem, myElem1);

/* 
Видалення
elem.remove();
*/

// myBtn.addEventListener('click', () => {
//   list.remove();
// });
