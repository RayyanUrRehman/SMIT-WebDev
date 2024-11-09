
var idCount = 0;
var arr = [];

function addTodo()
{
    var id = document.getElementById('inp').value
    
    var parent = document.getElementById('todo');
    var child = document.createElement('div');
    child.setAttribute('id','idCount');
    idCount++;
}