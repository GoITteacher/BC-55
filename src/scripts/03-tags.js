let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
  btnElem: document.querySelector('.fixed-btn'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  liElem.classList.toggle('active');
});

refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const prevActiveElem = refs.secondTagsList.querySelector('.active');
  prevActiveElem.classList.remove('active');

  const liElem = e.target.closest('li');
  liElem.classList.toggle('active');
});

function sendData() {
  const myElems = refs.firstTagsList.querySelectorAll('.active');
  const array = Array.from(myElems).map(el => {
    return el.textContent.trim();
  });
  console.log(array);

  const activeElem = refs.secondTagsList.querySelector('.active');
  console.log(activeElem);
}
