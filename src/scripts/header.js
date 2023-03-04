// const refs = {
//   form: document.querySelector('.form'),
//   input: document.querySelector('.form__input'),
// };

import NewsApi from './API/newsAPI';
import formatedDate from './API/fetchAPI';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form__input'),
  list: document.querySelector('.cards__list'),
};

// refs.form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
// }

(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

function onSubmit(e) {
  e.preventDefault();
  if (refs.input.value.trim() === '') {
    return;
  }
  const newsApi = new NewsApi();
  newsApi.searchQuery = refs.input.value;
  newsApi.fetchOnSearchQuery().then(({ docs, meta }) => {
    refs.list.innerHTML = '';
    if (docs.length === 0) {
      const img = new URL('../img/not-found-desktop.jpg', import.meta.url);
      const markupWithNotFoundImg = `<img src="${img}" alt="We not found news at your request">`;
      refs.list.innerHTML = markupWithNotFoundImg;
    } else {
      createMarkup(docs);
    }
  });
}

function createMarkup(array) {
  array.map(
    ({ abstract, pub_date, multimedia, section_name, headline, web_url }) => {
      let img = null;
      if (!multimedia[0]) {
        img = new URL('../img/not-found-desktop.jpg', import.meta.url);
      } else {
        img = new URL(
          `https://www.nytimes.com/${multimedia[0]?.url}`,
          import.meta.url
        );
      }
      const markup = `
      <div class="card_item">
        <div class="card_item-header">
          <img class="card_item-image" src="${img}" alt="${`.`}" loading="lazy" />
          <span class="card_item-section">${section_name}</span>
          <button class="button__add-favorite" type="submit">
            Add to favorite
            <svg class="button__icon-svg" width="24" height="24">
            <use href="src/img/symbol-defs.svg#icon-favorite"></use>
            </svg>
          </button>
        </div>
      <div class="cart_item-content">
      <div class="card_item-text">
        <h1 class="card_item-title">${headline.main}</h1>
        <p class="card_item-description">${abstract}</p>
      </div>
      <div class="card_item-info">
        <span class="card_item-date">${formatedDate(pub_date)}</span>
        <a class="card__link-btn" href="${web_url}" data-title="${
        headline.main
      }">
          <button class="button__read-more" type="submit">
            Read more
          </button>
        </a>
      </div>
    </div>
  </div>
  `;
      refs.list.insertAdjacentHTML('beforeend', markup);
    }
  );
}
