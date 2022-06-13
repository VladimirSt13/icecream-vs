// const list = document.querySelector('.products__list');
const btn = document.querySelectorAll('.products-info-btn');
let cards = null;
let card = null;

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', event => {
    const clickFlip = event.target.closest('.products-item-box');
    if (!clickFlip) {
      flipEnd();
      classRemove();
      return;
    } else if (event.target.closest('.js-overlay')) {
      flipEnd();
      clickFlip.classList.remove('js-overlay');
      classRemove();
      return;
    }

    const activeElement = document.querySelector('.js-overlay');

    if (activeElement) {
      flipEnd();
      classRemove();
    }

    cards = clickFlip;
    card = clickFlip.children;

    clickFlip.classList.add('js-overlay');
    card[3].classList.add('transform');

    function classRemove() {
      cards.classList.remove('js-overlay');
    }
  });
}

function flipEnd() {
  card[3].classList.remove('transform');
  // card[0].classList.remove('js-overlay');
}
