var myTodoList = document.getElementById("todoList");

function AddTodoItem() {
    var todoItem = document.getElementById("todoItem").value;
    var li = document.createElement("li");
    var todoItemText = document.createTextNode(todoItem);
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    todoItem.value = "";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    li.appendChild(todoItemText);
    myTodoList.appendChild(li);
    myTodoList.appendChild(editButton);
    myTodoList.appendChild(deleteButton);

}

