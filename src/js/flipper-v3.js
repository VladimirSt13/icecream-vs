// const list = document.querySelector('.products__list');
const btn = document.querySelectorAll('.products-info-btn');
let cards = null;
let card = null;

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', event => {
    const clickFlip = event.target.closest('.card');
    console.log('clickFlip  ', clickFlip);
    if (!clickFlip) {
      flipEnd();
      classRemove();
      return;
    } else if (event.target.closest('.js-flip')) {
      flipEnd();
      clickFlip.classList.remove('js-flip');
      classRemove();
      return;
    }

    const activeElement = document.querySelector('.js-flip');

    if (activeElement) {
      flipEnd();
      classRemove();
    }

    cards = clickFlip;
    card = clickFlip.children;

    clickFlip.classList.add('js-flip');
    card[0].style.transform = 'rotateY(180deg)';
    // console.log(cardHeight);

    card[1].style.transform = 'rotateY(360deg)';
  });
}

function classRemove() {
  cards.classList.remove('js-flip');
}

function flipEnd() {
  card[0].style.transform = null;
  card[1].style.transform = null;
  card[0].classList.remove('js-flip');
}
