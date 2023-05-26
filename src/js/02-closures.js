/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
/ 
*/

function foo(myNum) {
  const test = 10;
  const x = function (y) {
    console.log(y + test);
  };
  return x;
}

const result = foo(100);
const result2 = foo(30);

// debugger;
result(10);
result(20);
result(30);

debugger;
result2(10);
result2(20);
result2(30);

const x = 10;

function test() {
  console.log(x);
}
//======
