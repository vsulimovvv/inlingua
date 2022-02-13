window.addEventListener('DOMContentLoaded', () => {
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  (function sliderGrid() {
    const sliderEl = document.querySelector('.history__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 26,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 26,
        },
      },
    });
  })();

  (function sliderTeam() {
    const sliderEl = document.querySelector('.team__slider');

    new Swiper(sliderEl, {
      slidesPerView: 2,
      spaceBetween: 35,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          gap: 20,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  })();

  (function sliderSaving() {
    const sliderEl = document.querySelector('.saving__slider');

    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 35,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);

    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);

        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };

  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');
});
