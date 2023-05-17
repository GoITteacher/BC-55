// true false

/*
 * Приведение к булю на примере Boolean(value)
 */

const x = 0;
const myBool = Boolean(x);
console.log(myBool);

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

false && true; // false
true && false; // false
true && true; //  true;

// false = 0;
// true = 1;

// 1 * 0 = 0;
// 0 * 1 = 0;
// 1 * 1 = 1;

console.log(27 && 30 && 23 && 25 && 45); // 1

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

false || false; // t
// 0 + 0 = 0;

20 || (30 && 0);

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

const myTemp = true;
console.log(!(10 !== 10));
