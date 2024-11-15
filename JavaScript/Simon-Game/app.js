var gameSeq = []
var userSeq = []
var colors = ["red","green","yellow","purple"];

var started = false;
var level = 1;

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
        h3.innerHTML = `Level ${level}`;
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

function blinkWhite(idx)
{
    var id = document.getElementById(idx);
    id.classList.add('white');
    setTimeout(function(){
        id.classList.remove('white');
    },100);
}

function random()
{
    var num = Math.floor(Math.random()*4);
    var toBlink = colors[num];
    blink(toBlink);
    gameSeq.push(toBlink);
    console.log(gameSeq)
}

function levelUp()
{

    for (var i=0;i<userSeq.length;i++){
        if (userSeq[i] == gameSeq[i]){
            if (userSeq.length == gameSeq.length){
                h3.innerHTML = `Level ${level}`;
                level++;
                userSeq = [];
                setTimeout(random,1000);
            }
        }
        else{
            restart();
        }
    }

}

function checkUser()
{
    var btn = this.id;
    blinkWhite(btn);
    userSeq.push(btn);
    console.log(userSeq);
    levelUp()
}

function restart()
{
    h3.innerHTML = `GAME OVER! You score was ${level}. <br> Press any key to restart`
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 1;
}
