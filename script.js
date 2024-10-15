let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let todo = document.getElementById("todoList");
let filter = document.getElementById("search");
let checkBox = document.createElement("input");

let editTodo = null;

function addList() {
    if (input.value === "") {
        alert("Enter the Text!");
        return false;
    }
    if (addBtn.value === "edit") {
        editTodo.target.previousSibling.innerHTML = input.value;
        addBtn.value = "Add";
        input.value = "";

    } else {
        let newLi = document.createElement("li");

        checkBox.type = "checkbox";
        newLi.appendChild(checkBox)

        let p = document.createElement("p");
        p.innerHTML = input.value;
        newLi.appendChild(p);
        input.value = "";


        let editBtn = document.createElement("button");
        editBtn.classList.add("editBtn", "btn");
        editBtn.innerText = "edit";
        newLi.appendChild(editBtn);

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn", "btn");
        removeBtn.innerText = "remove";
        newLi.appendChild(removeBtn);

        todo.appendChild(newLi);
    }
}


function checkBoxFun(e){
    if (e.target.checked) {
        e.target.parentElement.classList.add("completed");  
    } else {
        e.target.parentElement.classList.remove("completed");  
    }
}
checkBox.addEventListener("change", checkBoxFun);

function updateTodo(e) {
    if (e.target.innerText === "remove") {
        e.target.parentElement.remove();
    } else if (e.target.innerText === "edit") {
        input.value = e.target.previousSibling.innerText;
        input.focus();
        addBtn.value = "edit";
        editTodo = e;
    }
}

addBtn.addEventListener("click", addList);
todo.addEventListener("click", updateTodo);

const searchFunction = () => {
    let filterUpdate = filter.value.toUpperCase();
    let li = todo.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let p = li[i].getElementsByTagName('p')[0];
        let textValue = p.textContent 

        if (textValue.toUpperCase().indexOf(filterUpdate) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

filter.addEventListener("keyup", searchFunction);

