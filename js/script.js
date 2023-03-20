createSwiper();

function createSwiper() {
  return new Swiper(".swiper", {
    breakpoints: {
    581: {
      slidesPerView: 2
    },
    721: {
      slidesPerView: 3
      },
    1056: {
      slidesPerView: 4
      },
    1285: {
      slidesPerView: 5
      },
    1515: {
      slidesPerView: 6
    }
  },
  spaceBetween: 50,
  loop: true,
  loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

