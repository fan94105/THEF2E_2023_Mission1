const donateModalEl = document.querySelector(".modal__donate")
const donateBtn = document.querySelector("#donate-btn")
const donateFormEl = document.querySelector(".donate__form")
const thanksEl = document.querySelector(".donate-thanks")
const closeBtn = document.querySelector(".thanks__close-btn--donate")
const overlayEl = document.querySelector(".overlay")
const optionsEl = document.querySelector(".options")
const allOptions = document.querySelectorAll("#donate-option")

donateBtn.addEventListener("click", (e) => {
  donateFormEl.classList.toggle("hidden")
  thanksEl.classList.toggle("hidden")
})

closeBtn.addEventListener("click", (e) => {
  donateFormEl.classList.toggle("hidden")
  thanksEl.classList.toggle("hidden")
  donateModalEl.classList.toggle("hidden")
  overlayEl.classList.toggle("hidden")

  allOptions.forEach((el) => {
    el.classList.remove("option--selected")
    allOptions[0].classList.add("option--selected")
  })

  document.body.style.overflow = ""
})

optionsEl.addEventListener("click", (e) => {
  const option = e.target.closest("#donate-option")
  if (!option) return

  if (option.classList.contains("customize-option")) {
    const inputEl = option.querySelector(".donate-input")
    inputEl.focus()
  }

  allOptions.forEach((el) => el.classList.remove("option--selected"))
  option.classList.add("option--selected")
})
