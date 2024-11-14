var gameSeq = []
var userSeq = []
var colors = ["red","green","yellow","purple"];

var started = false;
var level = 2;

var h3 = document.querySelector('h3');

var Body = document.querySelector('body');
Body.addEventListener('keypress',startgame);

var box = document.querySelectorAll('.box');
for( b of box){
    b.addEventListener('click',checkUser);
}

function startgame()
{
    if (started == false){
        h3.innerText = "Level 1";
        started = true;
        random();
    }
}

function blink(idx)
{
    var id = document.getElementById(idx);
    id.classList.add('black');
    setTimeout(function(){
        id.classList.remove('black');
    },100);

}

function random()
{
    var num = Math.floor(Math.random()*4);
    var toBlink = colors[num];
    blink(toBlink);
    gameSeq.push(toBlink);
}

function levelUp()
{
    if (userSeq.length == gameSeq.length){
        h3.innerHTML = `Level ${level}`;
        level++;

    }
}

function checkUser()
{
    console.log("hello")
}