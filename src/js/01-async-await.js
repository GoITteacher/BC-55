import '../css/common.css';

function geBooks() {
  const url = 'http://localhost:5000/books';

  console.log('start');

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.filter(el => el.id > 10);
    });

  console.log('Hello');
}

async function geBooks() {
  const url = 'http://localhost:5000/books';

  console.log('start');

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  data.filter(el => el.id > 10);

  console.log('Hello');
}

async function getBooks() {
  const url = 'http://localhost:5000/books';

  await fetch(url);
  const result = await res.json();
  const filteredBooks = result.filter(el => el.id > 10);

  return filteredBooks;
}

// =================
/* 
class User {
    async getUsers()
}
async ()=>{}
const myFoo = async ()=>{};
document.addEventListener('click', myFoo) */
// =============
/* 
function createPromise(delay, result) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, delay);
  });
}

const p1 = createPromise(3000, [1, 2, 3, 4, 5]);

async function test() {
  const data = await p1;
  console.log('delete first book', data);
  const filterArray = await fetch('http://localhost:5000/books');
  console.log(filterArray);
  const sortedArray = await fetch('http://localhost:5000/books');
  console.log(sortedArray);
}

test().then(data => {
  console.log(data);
});
 */

async function getBooks() {
  //   fetch('http://localhost:5000/sefsef')
  //     .then(res => {
  //       console.log(res);
  //       if (!res.ok) {
  //         return Response.reject('error');
  //       } else {
  //         return res;
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });

  const res = await fetch('http://localhost:5000/books');
  if (res.ok) return res;
  else return Promise.reject('error');
}

// getBooks();

async function render() {
  //   getBooks()
  //     .then()
  //      .then()
  //      .then()
  //      .then()
  //      .then()
  //     .catch(err => {
  //       console.log(err);
  //     });
  try {
    const data = await getBooks();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

render();
