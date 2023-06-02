let myBtn = document.querySelector('#testButton');
let imgElem = document.querySelectorAll('img');
const firstImageElem = imgElem[0];

myBtn.addEventListener('click', onBtnClick);

function onBtnClick() {}

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

console.log(firstImageElem);
console.log(firstImageElem.hasAttribute('disabled'));

console.log(firstImageElem.getAttribute('test'));

firstImageElem.setAttribute('test', 'Hello World');
firstImageElem.setAttribute(
  'src',
  'https://source.unsplash.com/100x100/?random=2&eat,bread,dish,meet,egg',
);
firstImageElem.removeAttribute('test1');

console.dir(firstImageElem.attributes);
