var myTodoList = document.getElementById("todoList");

function AddTodoItem() {
    var todoItem = document.getElementById("todoItem");
    var todoItemValue = todoItem.value;
    if(todoItemValue != "") {
        var li = document.createElement("li");
        var todoItemText = document.createTextNode(todoItemValue);
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");

        todoItem.value = "";
        editButton.innerText = "Edit";
        editButton.className = "editBtn";
        editButton.setAttribute("onclick","editTodoItem(this)");
        deleteButton.innerText = "Delete";
        deleteButton.className = "deleteBtn";
        deleteButton.setAttribute("onclick","deleteTodoItem(this)");

        li.appendChild(todoItemText);
        myTodoList.appendChild(li);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    }
    else {
        alert("Please enter some value to Add!");
    }
}

function deleteTodoItem(event) {
    event.parentNode.remove(this);
}

function deleteAllTodoItems() {
    myTodoList.innerHTML = "";
}

function editTodoItem(e)
{
    var editValue = prompt("Enter Value ", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue =  editValue;
    
}