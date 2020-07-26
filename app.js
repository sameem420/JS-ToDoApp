var myTodoList = document.getElementById("todoList");

function AddTodoItem() {
    var todoItem = document.getElementById("todoItem");
    var todoItemValue = todoItem.value;
    var li = document.createElement("li");
    var todoItemText = document.createTextNode(todoItemValue);
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    todoItem.value = "";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    editButton.setAttribute("onclick","editTodoItem(this)");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    deleteButton.setAttribute("onclick","deleteTodoItem(this)");

    li.appendChild(todoItemText);
    myTodoList.appendChild(li);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

}

function deleteTodoItem(event) {
    event.parentNode.remove(this);
}

function deleteAllTodoItems() {
    myTodoList.innerHTML = "";
}

function editTodoItem(e)
{
    var l = e.parentElement.childNodes[0];
    //var list = document.getElementsByClassName("tasklist__item").;
    console.log(l.textContent);
    var editItem = document.createElement("INPUT");
    editItem.setAttribute("type", "text");
    editItem.value = l.textContent;

    e.parentElement.childNodes[0] = todoItem.value;
    
}

