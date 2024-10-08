var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3, // Show 3 slides at a time
  spaceBetween: 30, // Space between slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
