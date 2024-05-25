const Ar = JSON.parse(localStorage.getItem("TodoList")) || [];

//let todoHtml = '';

function disTodo() {
  let todoHtml = "";
  // for (i = 0; i < Ar.length; i++) {
  //   const todoObj = Ar[i];
  //   const { todo, date } = todoObj;

  //   let html = `
  //           <div>${todo} </div>
  //           <div>${date} </div>
  //           <button class="del-btn" onclick="
  //           Ar.splice(${i}, 1);
  //           disTodo();
  //           saveToStorage();
  //           ">Delete</button>
  //           `;
  //   todoHtml += html;
  // }

  Ar.forEach(function (todoObj, i) {
    const { todo, date } = todoObj;
    let html = `
            <div>${todo} </div>
            <div>${date} </div>
            <button class="del-btn js-del"  >Delete</button>
            `;
    todoHtml += html;
  });
  document.querySelector(".dis-todo").innerHTML = todoHtml;

  document.querySelectorAll(".js-del").forEach((del, index) => {
    del.addEventListener("click", () => {
      Ar.splice(index, 1);
      disTodo();
      saveToStorage();
    });
  });
}

disTodo();

document.querySelector(".js-add").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  let inputname = document.querySelector(".todo-list");
  let todovalue = inputname.value;
  let inputdate = document.querySelector(".todo-date");
  let datevalue = inputdate.value;
  Ar.push({
    todo: todovalue,
    date: datevalue,
  });
  disTodo();
  inputname.value = "";

  saveToStorage();
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

function saveToStorage() {
  localStorage.setItem("TodoList", JSON.stringify(Ar));
}
