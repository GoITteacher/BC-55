// if (age === 18) {
//   console.log('ok 18');
//   console.log('ok 18');
//   console.log('ok 18');
// } else if (age === 17) {
//   console.log('ok 17');
// } else if (age === 16) {
//   console.log('ok 16');
// } else {
//   console.log('error');
// }

const type = 'Sport';
// debugger;
switch (type) {
  case 'Standart':
  case 'Sport':
  case 'aef':
    console.log('Wellcome');
    break;

  default:
    console.log('error');
    console.log('error');
}

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

let stars = 0;
let price;

switch (stars) {
  case 5:
    if (true) {
    }
    break;
  case 4:
    price = '70$';
    break;
  case 3:
    price = '50$';
    break;
  case 2:
    price = '30$';
    break;
  case 1:
    price = '20$';
    break;
}

// price ? console.log(price) : 0;

/* let bucket;
if (sum === 1000) {
  bucket = 'honda';
} else if (sum < 1000) {
  switch (model) {
    case 'supra':
      break;
    case 'mazda':
      break;
    case 'bmw':
      break;
  }
} */

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */
