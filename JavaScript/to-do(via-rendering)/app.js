var idCount = 0;
var todos = [];

function addTodo() {
    var inpVal = document.getElementById('inp');
    
    if (inpVal.value.trim() !== "") {
        todos.push({
            id: idCount,
            title: inpVal.value
        });
        inpVal.value = "";
        idCount++;
        render();
    }
}

function render() {
    var todoElem = document.getElementById('todos');
    todoElem.innerHTML = "";
    for (var i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        var textElem = document.createElement('p');
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update";
        textElem.textContent = todos[i].title;

        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`);
        updateButton.setAttribute("onclick", `updateTodo(${todos[i].id})`);

        elem.appendChild(textElem);
        elem.appendChild(deleteButton);
        elem.appendChild(updateButton);
        todoElem.appendChild(elem);
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function updateTodo(id) {
    var newTitle = document.getElementById('inp');
    if (newTitle && newTitle.value.trim() !== "") {
        var todo = todos.find(todo => todo.id === id);
        if (todo) {
            todo.title = newTitle.value;
            render();
        }
    }
    newTitle.value = ""
}
