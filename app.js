var myTodoList = document.getElementById("todoList");
var li = document.createElement("li");

function AddTodoItem() {
    var todoItem = document.getElementById("todoItem");
    var todoItemValue = todoItem.value;
    
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
    var l = e.parentNode.firstChild.nodeValue;
    console.log(l);

    var editItem = document.createElement("input");
    editItem.setAttribute("type", "text");
    editItem.id = "editInput";
    li.appendChild(editItem);

    var saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.className = "save";
    saveButton.setAttribute("onclick", "saveItem(e)");
    li.appendChild(saveButton);
}


function saveItem(e) {
    var edValue = document.getElementById("editInput");
    var ed = edValue.value;
    console.log(e);
    // var l = ev.parentElement.childNodes[0];
    edValue.parentNode.firstChild.nodeValue = ed;
    console.log(edValue);
    edValue.value = "";
}