const submitBtn = document.querySelector(".submit");
const todoInput = document.querySelector(".todo-input");
const lists = document.querySelector(".lists");
let editBtn = document.querySelectorAll(".edit-btn");
let deleteBtn = document.querySelectorAll(".delete-btn");
let a = 1;

let stopflag = false;
let currentI;

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
// delete 누르면 inputList에서 해당 인덱스의 값 삭제 후 다시 그리기
function deleteListToDom(deleteBtn, inputList) {
  deleteBtn.forEach(function (item, i) {
    item.addEventListener("click", (e) => {
      inputList.splice(i, 1);
      arrayToDom(inputList);

      editBtn = document.querySelectorAll(".edit-btn");
      deleteBtn = document.querySelectorAll(".delete-btn");
      deleteListToDom(deleteBtn, inputList);
      editListToDom(editBtn, inputList);
    });
  });
}
// edit누르면 inputList의 해당 인덱스를 input 에서 수정하게 하고, DOM 다시 그리기
function editListToDom(editBtn, inputList) {
  editBtn.forEach(function (item, i) {
    item.addEventListener("click", function (e) {
      stopflag = true;
      todoInput.value = inputList[i];
      currentI = i;
      todoInput.focus();

      //edit 모드 입성
      submitBtn.textContent = "Edit";
      submitBtn.classList.add("edit");
      a = document.querySelector(".edit");
    });
  });
  return a;
}

//edit 모드 입성 후 edit btn 누를 때 텍스트수정
function clickEditSubmitBtn(editSubmitBtn, index) {
  editSubmitBtn.addEventListener("click", (e) => {
    todoInput.focus();
    inputList[index] = todoInput.value;
    console.log(inputList, e.currentTarget);
    arrayToDom(inputList);

    // 원상복귀
    i = "";
    editBtn = document.querySelectorAll(".edit-btn");
    deleteBtn = document.querySelectorAll(".delete-btn");
    editSubmitBtn.textContent = "Submit";
    editSubmitBtn.classList.remove("edit");
    stopflag = false;
    deleteListToDom(deleteBtn, inputList);
    editListToDom(editBtn, inputList);
  });
}

// 할일 입력
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (stopflag === true) return;
  if (!todoInput.value) {
    return;
  }
  inputList.push(todoInput.value);
  arrayToDom(inputList);
  todoInput.focus();
  todoInput.value = "";

  editBtn = document.querySelectorAll(".edit-btn");
  deleteBtn = document.querySelectorAll(".delete-btn");

  deleteListToDom(deleteBtn, inputList);
  let 받은a값 = editListToDom(editBtn, inputList);
  console.log(받은a값);
  // console.log(document.querySelector(".edit"));
  // clickEditSubmitBtn(document.querySelector(".edit"), currentI);
});
