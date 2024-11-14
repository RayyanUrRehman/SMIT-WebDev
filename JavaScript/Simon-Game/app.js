var gameSeq = []
var userSeq = []

var started = false;

var h3 = document.querySelector('h3');

var Body = document.querySelector('body');
Body.addEventListener('keypress',startgame);


function startgame()
{
    if (started == false){
        h3.innerText = "Level 1";
        started = true;
    }
}

function 