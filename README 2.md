# THIS

1. Визначити тип функції
1. Якщо стрілчата то дивимось момент створення і шукаємо контекст батьківської
   функції
1. Якщо звичайна дивимось момент виклику

---

```js
let elem = {
  value: '123',
};

function func(a, b) {
  const arrow = (a, b) => {
    console.log(this);
  };

  arrow();
}

func.call(elem);

func();
```

---

```js
let user1 = {
  name: 'Petya',
  setName: function (name) {
    this.name = name;
  },
};

let user2 = {
  name: 'Vasya',
  age: 'TEST',
};

let newName = user1.setName.bind(user2);

newName('name1');

newName('1231');

console.log(user1);
console.log(user2);
```

---

```js
let elem = {
  value: 'Привіт',
};

function func(surname, name) {
  let obj1 = {
    foo: () => {
      console.log(this);
    },
  };

  return obj1.foo;
}

const myFunc = func.apply(elem, ['Vasya', 'Vasya1']);
myFunc();
```

---

```js
let f = function () {
  this.x = 5;
};

const obj = {
  foo: f,
};

obj.foo();
console.log(obj);
```
