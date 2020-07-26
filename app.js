var myTodoList = document.getElementById("todoList");

function AddTodoItem() {
    var todoItem = document.getElementById("todoItem");
    var todoItemValue = todoItem.value;
    if(todoItemValue != "") {
        var li = document.createElement("li");
        var todoItemText = document.createTextNode(todoItemValue);
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        var completeButton = document.createElement("button");

        todoItem.value = "";
        editButton.innerText = "Edit";
        editButton.className = "editBtn";
        editButton.setAttribute("onclick","editTodoItem(this)");
        deleteButton.innerText = "Delete";
        deleteButton.className = "deleteBtn";
        deleteButton.setAttribute("onclick","deleteTodoItem(this)");
        completeButton.innerText = "Completed";
        completeButton.className = "completeBtn";
        completeButton.setAttribute("onclick","completeTodoItem(this)");

        li.appendChild(todoItemText);
        myTodoList.appendChild(li);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(completeButton);
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

function completeTodoItem(e) {
    e.parentNode.style.textDecoration = 'line-through';
}