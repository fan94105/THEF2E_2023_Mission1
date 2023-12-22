import event1 from "../assets/event_1.png"
import event2 from "../assets/event_2.png"
import event3 from "../assets/event_3.png"
import fbIcon from "../assets/facebook.svg"
import igIcon from "../assets/instagram.svg"
import lineIcon from "../assets/line.svg"
import xIcon from "../assets/x.svg"

const eventModalsList = [
  {
    id: "1",
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    date: "2023/12/26",
    content:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    imgUrl: event1,
  },
  {
    id: "2",
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    date: "2023/12/24",
    content:
      "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！",
    imgUrl: event2,
  },
  {
    id: "3",
    title: "收容所模特兒大比拼！",
    date: "2023/12/20",
    content:
      "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    imgUrl: event3,
  },
]

const overlayEl = document.querySelector(".overlay")
const eventsModalEl = document.querySelector("#events-modal")
const eventsEl = document.querySelector(".events-container")

function renderEventsModal(id) {
  eventsModalEl.innerHTML = ""

  const [event] = eventModalsList.filter((item) => item.id === id)

  const markup = `
    <div class="modal">
    <div class="modal__header">
      <h2 class="header__title">${event.title}</h2>
      <button class="modal__close-btn">&times;</button>
    </div>

    <div class="modal__content modal__content--events">
      <div class="modal__left modal__left--events">
        <div class="img">
          <img src="${event.imgUrl}" alt="${event.title}" />
        </div>
        <p class="caption">${event.title}</p>
        <div class="social-links">
          <span>分享</span>
          <a href="#"
            ><img src="${fbIcon}" alt="icon"
          /></a>
          <a href="#"
            ><img src="${igIcon}" alt="icon"
          /></a>
          <a href="#"
            ><img src="${lineIcon}" alt="icon"
          /></a>
          <a href="#"
            ><img src="${xIcon}" alt="icon"
          /></a>
        </div>
      </div>
      <div class="modal__right modal__right--events">
        <h2 class="modal__title">${event.title}</h2>
        <p class="date">${event.date}</p>
        <div class="content">
          ${event.content}
        </div>

        <div class="more-events">
          <div class="title--small">更多活動</div>
          <div class="events">
            <div class="event" data-id="${
              eventModalsList[(id + 1) % eventModalsList.length].id
            }">
              <div class="event__img">
                <img
                  src="${
                    eventModalsList[(id + 1) % eventModalsList.length].imgUrl
                  }"
                  alt="${
                    eventModalsList[(id + 1) % eventModalsList.length].title
                  }"
                />
              </div>
              <div class="describe">
              ${eventModalsList[(id + 1) % eventModalsList.length].title}
              </div>
            </div>
            <div class="event" data-id="${
              eventModalsList[id % eventModalsList.length].id
            }">
              <div class="event__img">
                <img
                  src="${eventModalsList[id % eventModalsList.length].imgUrl}"
                  alt="${eventModalsList[id % eventModalsList.length].title}"
                />
              </div>
              <div class="describe">${
                eventModalsList[id % eventModalsList.length].title
              }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `

  eventsModalEl.insertAdjacentHTML("afterbegin", markup)
}

// OPEN MODAL
eventsEl.addEventListener("click", (e) => {
  const event = e.target.closest(".event")
  if (!event) return

  const id = event.dataset.id
  renderEventsModal(id)
  overlayEl.classList.toggle("hidden")

  document.body.style.overflow = "hidden"
})

eventsModalEl.addEventListener("click", (e) => {
  const event = e.target.closest(".event")
  if (!event) return

  const id = event.dataset.id
  renderEventsModal(id)
})

// CLOSE MODAL
eventsModalEl.addEventListener("click", (e) => {
  const modalEl = e.target.closest(".modal")
  const modalCloseBtn = e.target.closest(".modal__close-btn")
  if (!modalCloseBtn) return

  modalEl.classList.toggle("hidden")
  overlayEl.classList.toggle("hidden")

  document.body.style.overflow = ""
})

overlayEl.addEventListener("click", () => {
  eventsModalEl.innerHTML = ""
  document.body.style.overflow = ""
})
