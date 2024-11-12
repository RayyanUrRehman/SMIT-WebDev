
var red;
var green;
var blue;
var colorCode;

function random()
{
    red = Math.random();
    red = Math.floor(red*255);

    green = Math.random();
    green = Math.floor(green*255);

    blue = Math.random();
    blue = Math.floor(blue*255);

    setColor();
}

function setColor()
{
    colorCode = `rgb(${red},${green},${blue})`;
    var box = document.getElementById('box');
    box.style.backgroundColor = colorCode;
    
    var h3 = document.getElementById('h3');
    h3.innerText = `${colorCode}`;
    h3.setAttribute('class','visible');
}