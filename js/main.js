const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiper_recom = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1.8,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },
});