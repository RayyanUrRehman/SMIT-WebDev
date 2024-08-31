// -------------chapter 10-13 (labelled as 12-13 on github)--------------

// q1
// var character = prompt("Enter character: ");
// var char = character.charCodeAt();
// var type;

// if (char >= 48 && char <= 57){
//     type = "number";
// }
// else if(char >= 65 && char <= 90){
//     type = "Uppercase letter";
// }
// else if(char >= 97 && char <= 122){
//     type = "Lowercase letter"
// }
// alert("The type of character is: "+type);


// q2
// var num1 = +prompt("Enter number 1:");
// var num2 = +prompt("Enter number 2:");

// if (num1 > num2){
//     alert("Number 1 ("+ num1+ ") is greater");
// }
// else if (num1 < num2){
//     alert("Number 2 ("+ num2+ ") is greater");
// }
// else{
//     alert("Both are equal");
// }


// q3
// var num = +prompt("Enter number:")
// var type;

// if (num >0){
//     type = "positive"    
// }
// else if(num<0){
//     type = "negative";
// }
// else{
//     type = "zero";
// }
// alert("The number is "+type);


// q4
// var char = prompt("Enter character: ");

// if (char == "a" || char=="e" || char=="i" || char=="o" || char=="u"){
//     alert("True");
// }
// else{
//     alert("false");
// }


// q5
// var pw = "rayyan";
// var newpw = prompt("Enter your password: ");

// if (newpw === ''){
//     alert("Please enter your password")
// }
// else if(newpw === pw){
//     alert("Correct! The password you entered mactches the original password");
// }
// else if(newpw != pw){
//     alert("Incorrect password");
// }


// q6
// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "good day";
// }
// else{
//     greeting = "good evening";
// }


// q7
// var time = +prompt("Enter time: ");
// var greeting;

// if (time >= 0 && time < 1200){
//     greeting = "Good morning";
// }
// else if (time >= 1200 && time < 1700){
//     greeting = "Good afternoon";
// }
// else if (time >= 1700 && time < 2100){
//     greeting = "Good evening";
// }
// else if (time >= 2100 && time <= 2359){
//     greeting = "Good night";
// }
// alert(greeting);