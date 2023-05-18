# План занятия

- If, if-else, if-else-if
- Тернарный оператор
- Switch
- Область видимости
- Цикл for, while, do_while
- Задачи
- [Codewars](https://www.codewars.com/kata/latest/my-languages?beta=false)
- DOM

## Example 8 - Логические операторы

Каким будет результат выражений?

```js
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
```

```js
console.log(1 && 5);
console.log(5 && 1);
console.log(0 && 2);
console.log(2 && 0);
console.log('' && 'Mango');
console.log('Mango' && '');
console.log('Mango' && 'Poly');
console.log('Poly' && 'Mango');
```

```js
console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(3 || false);
console.log(false || 3);
console.log(3 || true);
console.log(true || 3);
```

```js
console.log(!true);
console.log(!false);
console.log(!3);
console.log(!'Mango');
console.log(!0);
console.log(!'');

const isOnline = true;
const isNotOnline = !isOnline;
```
