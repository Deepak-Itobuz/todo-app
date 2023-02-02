const inputTodo = document.getElementById("inputTodo");
const addTodoBtn = document.getElementById("addTodoBtn");
let addElement = document.getElementById("add-element");
let added = document.createElement("div");
let displayTodo = document.getElementById("display-to-do");
let trash = document.querySelector(".trash");
addTodoBtn.addEventListener("click", run);

function run() {
  if (inputTodo.value == "") {
    alert("Field cannot be empty!");
  } else {
    added = addElement.cloneNode(true);
    displayTodo.append(added);
    added.firstElementChild.textContent = inputTodo.value;
    added.classList.remove("todos");
    inputTodo.value = "";
    added.classList.add("added");
    let check1 = document.querySelectorAll(".tick");
    for (let i = 0; i < check1.length; i++) {
      check1[i].addEventListener("click", function () {
        this.parentNode.firstElementChild.style.textDecoration = "line-through";
        this.parentNode.classList.add("completed");
      });
    }

    let trash1 = document.querySelectorAll(".trash");
    for (let i = 0; i < trash1.length; i++) {
      trash1[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }

    let compltedBtn = document.getElementById("complete");
    compltedBtn.addEventListener("click", function () {
      let todoelement = document.querySelectorAll(".added");
      for (let ele = 0; ele < todoelement.length; ele++) {
        if (todoelement[ele].classList.contains("completed") != true) {
          todoelement[ele].style.display = "none";
        } else {
          todoelement[ele].style.display = "";
        }
      }
    });

    let activeBtn = document.getElementById("active");
    activeBtn.addEventListener("click", function () {
      let todoelement = document.querySelectorAll(".added");
      for (let ele = 0; ele < todoelement.length; ele++) {
        if (todoelement[ele].classList.contains("completed") == true)
          todoelement[ele].style.display = "none";
        else todoelement[ele].style.display = "";
      }
    });

    let clearBtn = document.getElementById("clean");
    clearBtn.addEventListener("click", function () {
      let todoelement = document.querySelectorAll(".added");
      for (let ele = 0; ele < todoelement.length; ele++) {
        if (todoelement[ele].classList.contains("completed") == true) {
          todoelement[ele].remove();
        }
      }
    });

    let allBtn = document.getElementById("all");
    allBtn.addEventListener("click", function () {
      let todoelement = document.querySelectorAll(".added");
      for (let ele = 0; ele < todoelement.length; ele++) {
        todoelement[ele].style.display = "";
      }
    });
  }
}

inputTodo.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    run();
  }
});