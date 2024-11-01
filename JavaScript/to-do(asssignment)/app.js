var idCount = 1;

function addTodo() {
    var todos = document.getElementById('todos');
    var inpVal = document.getElementById('inp');

    todos.setAttribute('class', 'todosContainer');

    if (inpVal.value.trim() === "") {
        alert("Please add a Todo Task!");
        return;
    }

    var element = document.createElement('div');
    element.setAttribute('id', idCount);
    element.setAttribute('class', "todo");

    element.innerHTML = `
        <p>${inpVal.value}</p>
        <button onclick="deleteTodo(${idCount})">Delete</button>
        <button onclick="updateTodo(${idCount})">Update</button>
    `;

    todos.appendChild(element);

    idCount++;
    inpVal.value = "";
}

function deleteTodo(id) {
    var deletedItem = document.getElementById(id);
    var parentElem = deletedItem.parentNode;
    parentElem.removeChild(deletedItem);
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp');
    var todoItem = document.getElementById(id);

    if (inpVal.value.trim() === "") {
        alert("Updated Todo cannot be empty!");
        return;
    }

    todoItem.innerHTML = `
        <p>${inpVal.value}</p>
        <button onclick="deleteTodo(${id})">Delete</button>
        <button onclick="updateTodo(${id})">Update</button>
    `;
}
