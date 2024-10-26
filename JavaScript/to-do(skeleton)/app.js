var idCount = 0;

function addToDo()
{
    var text = document.getElementById('input');
    var parent = document.getElementById('todos');
    var child = document.createElement('div');
    child.setAttribute('id',idCount);
    child.innerHTML = `<p>${text.value}</p> <button onclick="Delete(${idCount})">Delete</button>
                        <button onclick="Update(${idCount})">Update</button>`;
    parent.appendChild(child);
    idCount++;
}


function Delete(idCount)
{
    // console.log("deleted",idCount);
    var toDel = document.getElementById(idCount);
    var parent = toDel.parentNode;
    parent.removeChild(toDel);  
}


function Update(idCount)
{
    var text = document.getElementById('input');
    var toUpdate = document.getElementById(idCount);
    toUpdate.innerHTML = `<p>${text.value}</p> <button onclick="Delete(${idCount})">Delete</button>
                        <button onclick="Update(${idCount})">Update</button>`;
}
