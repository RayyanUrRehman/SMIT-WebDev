// changing color of text using promise chaining

var h1 = document.querySelector('h1');

function changeColor(color, delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           h1.style.color = color; 
           resolve("color changed");
        }, delay);
    })
}


changeColor("red",1000)
.then(()=>{
    console.log("changed to red");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("changed to blue");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("changed to green");
    return changeColor('Yellow',1000);
})
.then(()=>{
    console.log("changed to yellow");
    changeColor("purple",1000);
})