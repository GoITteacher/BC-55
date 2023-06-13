import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,
  initTime: null,
  isActive: false,

  start(callback) {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();

    this.intervalId = setInterval(() => {
      const diff = Date.now() - this.initTime;
      const dateObj = this.getTimeComponents(diff);
      callback(dateObj);
    }, 1000);
  },

  stop() {
    if (!this.isActive) return;
    this.isActive = false;
    clearInterval(this.intervalId);
  },

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  },
  pad(value) {
    return String(value).padStart(2, '0');
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start(renderTime);
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
});

function renderTime({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

/* let intervalId;
refs.startBtn.addEventListener('click', () => {
  console.log('start');
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  const initTime = Date.now();
  intervalId = setInterval(updateTime, 1000, initTime);
});

refs.stopBtn.addEventListener('click', () => {
  console.log('stop');
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(intervalId);
  intervalId = null;
});

function updateTime(initTime) {
  const diff = Date.now() - initTime;
  const dateObj = getTimeComponents(diff);
  renderTime(dateObj);
}



function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}
function pad(value) {
  return String(value).padStart(2, '0');
}
 */
