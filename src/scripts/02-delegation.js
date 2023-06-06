let refs = {
  firstBoxElem: document.querySelector('.js-box'),
  secondBoxElem: document.querySelector('.js-box-1[data-group="group-1"]'),
};

refs.secondBoxElem.addEventListener('click', e => {
  // if (e.target === e.currentTarget) return;
  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'SPAN' && e.target.nodeName !== 'BUTTON') return;
});
