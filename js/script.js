const swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 40,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});