import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId;

const refs = {
  notification: document.querySelector('.js-alert'),
};

setTimeout(showNotification, NOTIFICATION_DELAY);

refs.notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});

/*
 * Функции
 */

function showNotification() {
  refs.notification.classList.add('is-visible');
  timeoutId = setTimeout(hideNotification, 5000);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
