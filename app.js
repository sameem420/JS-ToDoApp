var myListItems = document.getElementById("list");

function AddTodoItem() {
    var listItem = document.getElementById("listItem").value;
    var li = document.createElement("li");
    var itemText = document.createTextNode(listItem);
    listItem.value = "";
    li.appendChild(itemText);
    myListItems.appendChild(li);
    console.log(listItem);
    console.log(myListItems);
}

