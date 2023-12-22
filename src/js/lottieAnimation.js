import lottie from "lottie-web"
import animationJSON from "../lottie/loading.json"

export default function opening() {
  const animationEl = document.querySelector(".animation")
  const loadingEl = document.querySelector(".loading-animation")

  document.body.style.overflow = "hidden"

  animationEl.classList.remove("hidden")

  const loading = lottie.loadAnimation({
    container: loadingEl, // the dom element that will contain the animation
    renderer: "svg",
    autoplay: true,
    animationData: animationJSON, // the path to the animation json
  })

  loading.addEventListener("loopComplete", () => {
    document.body.style.overflow = ""
    loading.stop()
    animationEl.classList.add("hidden")
    sessionStorage.setItem("op", "completed")

    AOS.init()
  })
}
