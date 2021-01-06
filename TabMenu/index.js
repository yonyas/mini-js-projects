// btn 누르면, 모든거 active 지우고, 해당버튼 active 넣기
const tabBtn = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".contents");

tabBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    for (i = 0; i < tabBtn.length; i++) {
      tabBtn[i].classList.remove("active");
      contents[i].classList.remove("show");
    }

    let id = e.currentTarget.dataset.id;
    let element = document.querySelector(`#${id}`);
    element.classList.add("show");

    e.currentTarget.classList.add("active");
  });
});
