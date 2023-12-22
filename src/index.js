import opening from "./js/lottieAnimation.js"

import "./js/renderSwiper"
import "./styles/main.scss"

import "./js/modalHandler.js"

import "./js/eventModals.js"
import "./js/policyModals.js"

import "./js/donateHandler.js"
import "./js/serviceHandler.js"

if (sessionStorage.getItem("op")) {
  AOS.init()
}
if (!sessionStorage.getItem("op")) {
  opening()
}
