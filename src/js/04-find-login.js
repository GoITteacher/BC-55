/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

debugger;
function findLogin(allLogins, login) {
  for (let item of allLogins) {
    if (item === login) {
      return `User ${login} існує`;
    }
  }

  return `User ${login} not found`;
}

const myResult = findLogin(logins, 'poly1scute');
console.log(myResult);
