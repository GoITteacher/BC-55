const countMouseEventElement = document.querySelector('.js-count-mouse');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

document.addEventListener(
  'mousemove',
  _.throttle(() => {
    countMouseEventElement.textContent = countMouseEvent++;
  }, 500),
);

inputElement.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(e) {
  outputElem.textContent = inputElement.value;
}

let countMouseEvent = 0;
let countInputEvent = 0;

/* let counter = 0;
function myRobot() {
  console.log(counter++);
}
const myRobot2 = _.throttle(myRobot, 3000, {
  leading: true,
  trailing: false,
});
inputElement.addEventListener('input', myRobot2); */
