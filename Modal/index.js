const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close");
const openModal = document.querySelector(".openModal");

openModal.addEventListener("click", function () {
  modalOverlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  modalOverlay.classList.add("hidden");
});
