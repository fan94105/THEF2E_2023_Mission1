const serviceModalEl = document.querySelector(".modal__service")
const serviceBtn = document.querySelector("#service-btn")
const serviceFormEl = document.querySelector(".service__form")
const thanksEl = document.querySelector(".service-thanks")
const closeBtn = document.querySelector(".thanks__close-btn--service")
const overlayEl = document.querySelector(".overlay")

serviceBtn.addEventListener("click", (e) => {
  serviceFormEl.classList.toggle("hidden")
  thanksEl.classList.toggle("hidden")
})

closeBtn.addEventListener("click", (e) => {
  serviceFormEl.classList.toggle("hidden")
  thanksEl.classList.toggle("hidden")
  serviceModalEl.classList.toggle("hidden")
  overlayEl.classList.toggle("hidden")
  document.body.style.overflow = ""
})
