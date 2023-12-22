import policy1 from "../assets/policy_1.png"
import policy2 from "../assets/policy_2.png"
import policy3 from "../assets/policy_3.png"
import fbIcon from "../assets/facebook.svg"
import igIcon from "../assets/instagram.svg"
import lineIcon from "../assets/line.svg"
import xIcon from "../assets/x.svg"

const overlayEl = document.querySelector(".overlay")
const policiesEl = document.querySelector(".policies")
const policiesModalEl = document.querySelector("#policies-modal")

const policyModalsList = [
  {
    id: "1",
    title: "為毛孩謀福利！推動寵物醫療保險方案",
    content: [
      {
        title: "設立寵物醫療基金",
        content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用",
      },
      {
        title: "提供醫療補助",
        content:
          "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主經濟壓力",
      },
      {
        title: "合作動物醫院",
        content: "目前已和超過 200 家動物醫院進行初步合作討論",
      },
    ],
    imgUrl: policy1,
  },
  {
    id: "2",
    title: "打造休閒天堂！推動寵物休閒與娛樂場所",
    content: [
      {
        title: "建立寵物公園",
        content:
          "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園",
      },
      {
        title: "推廣寵物友善商家",
        content:
          "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫",
      },
      {
        title: "舉辦寵物活動和工作坊",
        content:
          "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等",
      },
    ],
    imgUrl: policy2,
  },
  {
    id: "3",
    title: "推廣寵物飼養教育，讓愛更加專業",
    content: [
      {
        title: "建立寵物飼養教育中心",
        content:
          "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
      },
      {
        title: "推廣寵物飼養課程",
        content:
          "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
      },
      {
        title: "製作教育資料",
        content:
          "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識",
      },
    ],
    imgUrl: policy3,
  },
]

function renderPoliciesModal(id) {
  policiesModalEl.innerHTML = ""

  const [policy] = policyModalsList.filter((item) => item.id === id)

  console.log(policy)

  const markup = `
    <div class="modal">
      <div class="modal__header">
        <h2 class="header__title">政策議題</h2>
        <button class="modal__close-btn">&times;</button>
      </div>
      <div class="modal__content modal__content--events">
        <div class="modal__left modal__left--events">
          <div class="img">
            <img src="${policy.imgUrl}" alt="${policy.title}" />
          </div>
          <p class="caption">${policy.title}</p>
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
          <h2 class="modal__title">${policy.title}</h2>
          <div class="content">
            ${policy.content
              .map((i) => {
                return `
                <h5>${i.title}</h5>
                <p>${i.content}</p>
              `
              })
              .join("")}
          </div>
          <div class="more-events">
            <div class="title--small">更多政策議題</div>
            <div class="events">
              <div class="event" data-id="${
                policyModalsList[(id + 1) % policyModalsList.length].id
              }">
                <div class="event__img">
                  <img
                    src="${
                      policyModalsList[(id + 1) % policyModalsList.length]
                        .imgUrl
                    }"
                    alt="${
                      policyModalsList[(id + 1) % policyModalsList.length].title
                    }"
                  />
                </div>
                <div class="describe">${
                  policyModalsList[(id + 1) % policyModalsList.length].title
                }</div>
              </div>
              <div class="event" data-id="${
                policyModalsList[id % policyModalsList.length].id
              }">
                <div class="event__img">
                  <img
                    src="${
                      policyModalsList[id % policyModalsList.length].imgUrl
                    }"
                    alt="${
                      policyModalsList[id % policyModalsList.length].title
                    }"
                  />
                </div>
                <div class="describe">${
                  policyModalsList[id % policyModalsList.length].title
                }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  policiesModalEl.insertAdjacentHTML("afterbegin", markup)
}

// OPEN MODAL
policiesEl.addEventListener("click", (e) => {
  e.preventDefault()
  const policyBtn = e.target.closest(".policy__btn")
  if (!policyBtn) return

  const policy = policyBtn.closest(".policy")
  const id = policy.dataset.id

  renderPoliciesModal(id)
  overlayEl.classList.toggle("hidden")

  document.body.style.overflow = "hidden"
})

policiesModalEl.addEventListener("click", (e) => {
  const event = e.target.closest(".event")
  if (!event) return

  const id = event.dataset.id
  renderPoliciesModal(id)
})

// CLOSE MODAL
policiesModalEl.addEventListener("click", (e) => {
  const modalEl = e.target.closest(".modal")
  const modalCloseBtn = e.target.closest(".modal__close-btn")
  if (!modalCloseBtn) return

  modalEl.classList.toggle("hidden")
  overlayEl.classList.toggle("hidden")

  document.body.style.overflow = ""
})

overlayEl.addEventListener("click", () => {
  policiesModalEl.innerHTML = ""
  document.body.style.overflow = ""
})
