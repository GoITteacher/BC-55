const hrElem = document.querySelector('hr');

function renderImages() {
  const len = 500;
  let markup = '';

  for (let i = 0; i < len; i++) {
    markup += `
    <img
    loading="lazy"
      src="https://source.unsplash.com/500x500/?random=${i}&eat,bread,dish,meet,egg"
      alt="eat"
    /><br />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptatibus
      accusantium optio ex facilis quae aut quam dolorem, distinctio sequi. Qui
      fugit, illum enim quo vero ab ipsum provident possimus?
    </p>
        `;
  }

  hrElem.insertAdjacentHTML('afterend', markup);
}

renderImages();

/* 
    
*/
