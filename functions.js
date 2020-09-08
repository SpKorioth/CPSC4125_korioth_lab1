var itemList = ["Vacuum floors","Do laundry","Buy groceries"];

function displayList()
{
    document.getElementById("list").textContent = "";

    let x = document.createElement("OL")
    x.setAttribute("id", "myOL");
    document.getElementById("list").appendChild(x);


    for (i=0;i<itemList.length;i++)
    {
        let y = document.createElement("LI");
        let z = document.createTextNode(itemList[i]);
        y.appendChild(z);
        document.getElementById("myOL").appendChild(y);
    }
}
  
var addItem = function() {
    let x = document.getElementById("todoItem").value;
    if(x != "")
    {
        itemList.push(x);
        displayList();
    }
}

var removeItem = function() {
    let x = document.getElementById("todoItemNumber").value;
    if(x != "")
    {
        if(x <= itemList.length && x > 0)
        {
            itemList.splice(x-1,1);
            displayList();
        }
    }
}

var button = document.getElementById("addButton");
button.addEventListener("click", addItem);

button = document.getElementById("removeButton");
button.addEventListener("click", removeItem);