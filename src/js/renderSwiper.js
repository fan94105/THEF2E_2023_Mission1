import Swiper from "swiper/bundle"

// import styles bundle
import "swiper/css/bundle"

// init Swiper:
const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  lazyLoading: true,
  loop: true,

  effect: "coverflow",
  coverflowEffect: {
    depth: 200,
    rotate: 30,
    stretch: -100,
    slideShadows: false,
  },

  // 左右箭頭
  navigation: {
    nextEl: ".swiper-custom-next",
    prevEl: ".swiper-custom-prev",
  },
  pagination: {
    el: ".swiper-custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`
    },
  },
  breakpoints: {
    300: {
      spaceBetween: -40,
    },
    1200: {
      spaceBetween: 30,
    },
  },
})
