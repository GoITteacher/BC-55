let f = function () {
  this.x = 5;
};

const obj = {
  name: 123,
  age: 23,
  foo: f,
};

const name = 123;
let age = 23;
