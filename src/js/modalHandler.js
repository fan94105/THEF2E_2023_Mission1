const donateModalBtn = document.querySelector(".donate-modal-btn")
const serviceModalBtn = document.querySelector(".service-modal-btn")
const modalCloseBtns = document.querySelectorAll(".modal__close-btn")
const modalEls = document.querySelectorAll(".modal")
const donateModalEl = document.querySelector(".modal__donate")
const serviceModalEl = document.querySelector(".modal__service")
const overlayEl = document.querySelector(".overlay")
const donateEls = document.querySelectorAll("#donate")
const serviceEls = document.querySelectorAll("#service")

const serviceFormEl = document.querySelector(".service__form")
const donateFormEl = document.querySelector(".donate__form")
const serviceThanksEl = document.querySelector(".service-thanks")
const donateThanksEl = document.querySelector(".donate-thanks")

const allDonateOptions = document.querySelectorAll("#donate-option")

// CLOSE MODAL
modalCloseBtns.forEach((button) => {
  button.addEventListener("click", () => {
    modalEls.forEach((modal) => modal.classList.add("hidden"))
    overlayEl.classList.add("hidden")

    serviceFormEl.classList.remove("hidden")
    donateFormEl.classList.remove("hidden")
    serviceThanksEl.classList.add("hidden")
    donateThanksEl.classList.add("hidden")

    allDonateOptions.forEach((el) => {
      el.classList.remove("option--selected")
      allDonateOptions[0].classList.add("option--selected")
    })

    document.body.style.overflow = ""
  })
})

// DONATE MODAL
donateModalBtn.addEventListener("click", (e) => {
  e.preventDefault()

  donateModalEl.classList.toggle("hidden")
  overlayEl.classList.toggle("hidden")

  document.body.style.overflow = "hidden"
})

// SERVICE MODAL
serviceModalBtn.addEventListener("click", (e) => {
  e.preventDefault()

  serviceModalEl.classList.toggle("hidden")
  overlayEl.classList.toggle("hidden")

  document.body.style.overflow = "hidden"
})

donateEls.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault()

    donateModalEl.classList.toggle("hidden")
    overlayEl.classList.toggle("hidden")

    document.body.style.overflow = "hidden"
  })
})

serviceEls.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault()

    serviceModalEl.classList.toggle("hidden")
    overlayEl.classList.toggle("hidden")

    document.body.style.overflow = "hidden"
  })
})

overlayEl.addEventListener("click", (e) => {
  donateModalEl.classList.add("hidden")
  serviceModalEl.classList.add("hidden")
  overlayEl.classList.add("hidden")

  serviceFormEl.classList.remove("hidden")
  donateFormEl.classList.remove("hidden")
  serviceThanksEl.classList.add("hidden")
  donateThanksEl.classList.add("hidden")

  allDonateOptions.forEach((el) => {
    el.classList.remove("option--selected")
    allDonateOptions[0].classList.add("option--selected")
  })

  document.body.style.overflow = ""
})
