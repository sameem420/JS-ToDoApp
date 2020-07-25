var myTodoList = document.getElementById("todoList");

function AddTodoItem() {
    var todoItem = document.getElementById("todoItem").value;
    var li = document.createElement("li");
    var todoItemText = document.createTextNode(todoItem);
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    todoItem.value = "";
    li.appendChild(todoItemText);
    myTodoList.appendChild(li);
    console.log(listItem);
    console.log(myTodoList);
}

