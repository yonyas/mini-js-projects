const submitBtn = document.querySelector(".submit");
const todoInput = document.querySelector(".todo-input");
const lists = document.querySelector(".lists");

let inputList = [];

const arrayToDom = function (array) {
  let inputTag = array
    .map((item) => {
      return `<div class="list">
            <div class="list-text">${item}</div>
            <div class="list-btn">
              <button class="btn edit-btn"><i class="fas fa-edit"></i></button>
              <button class="btn delete-btn"><i class="fas fa-trash"></i></button>
            </div>
          </div>`;
    })
    .join("");
  lists.innerHTML = inputTag;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputList.push(todoInput.value);
  arrayToDom(inputList);

  let editBtn = document.querySelectorAll(".edit-btn");
  let deleteBtn = document.querySelectorAll(".delete-btn");
});
