var listItems = document.getElementById("list");

var item = document.createElement("li");

function AddTodoItem() {
    var listItem = document.getElementById("listItem").value;
    var itemNode = document.createTextNode(listItem);
    item.appendChild(itemNode);
    listItems.appendChild(item);
    console.log(listItem);
    console.log(listItems);
}

