// ------------------chapter 9-11 (labelled as 7-10 in gcr)-------------------------

// Q1
// var city = prompt("Enter city");
// if(city == "Karachi"){
//     alert("Welcome to city of lights");
// }


// q2
// var gender = prompt("Enter gender");
// if(gender == "male"){
//     alert("Goodmorning Sir!");
// }
// if(gender == "female"){
//     alert("Goodmorning Maam!");
// }


// q3
// var color = prompt("Enter signal");
// if(color == "Red"){
//     alert("Must Stop");
// }
// else if(color == "Yellow"){
//     alert("Ready to move");
// }
// else if(color == "Green"){
//     alert("Move now");
// }


// q4
// var num = +prompt("Enter remaining fuel: ");
// if (num < 0.25){
//     alert("Please refuel the fuel in your car");
// }


// q5
// a)  alert message would be displayed. 
// b) alert message would be displayed.
// c) condition 1 is true. condition 4 is true
// d) alert will be displayed. The cost equals
// e) alert will be displayed. True
// f) No alert will be displayed


// q6
// var arr = [0,0,0];
// for (var i=0;i<arr.length;i++){
//     arr[i] = +prompt("Enter marks of exam: ");
// }

// var sum = arr[0] + arr[1] + arr[2];
// var percentage = (sum/300) * 100;
// var grade,remarks;

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent"
// }
// else if(percentage >= 70){
//     grade = "A";
//     remarks = "Good"
// }
// else if(percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve"
// }
// else if(percentage < 60){
//     grade = "fail";
//     remarks = "sorry"
// }
// document.write("MARKS SHEET<br><br>Total marks: "+300+"<br>Marks Obtained: "+sum+"<br>Percentage: "+percentage+"%<br>Grade: "+grade+"<br>Remarks: "+remarks);


// q7
// var secret = 7;
// var num = +prompt("Enter your guess (1-10)");

// if (num === secret){
//     alert("Bingo! correct answer");
// }
// else if (num + 1 === secret){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Wrong guess!");
// }


// q8
// var num = +prompt("Enter number: ");
// if (num%3===0){
//     alert("Number is divisible my 3")
// }
// else{
//     alert("Number is not divisible by 3");
// }


// q9
// var num = +prompt("Enter number: ");
// if (num%2===0){
//     alert("Number is even");
// }
// else{
//     alert("Number is odd");
// }


// q10
// var temp = +prompt("Enter temperature: ");
// var comment;

// if (temp > 40){
//     comment = "It is too hot outside"
// }
// else if (temp > 30){
//     comment = "The weather today is normal"
// }
// else if (temp > 20){
//     comment = "Today's weather is cool"
// }
// else if (temp > 10){
//     comment = "OMG today's weather is so cool"
// }
// alert(comment);


// q11
// var num1 = +prompt("Enter number 1: ");
// var num2 = +prompt("Enter number 2: ");
// var op = prompt("Enter operation (num1 _ num2): ");
// var ans;

// if (op === "+"){
//     ans = num1 + num2;
// }
// else if(op === "-" ){
//     ans = num1 - num2;
// }
// else if(op === "-" ){
//     ans = num1 - num2;
// }
// else if(op === "*" ){
//     ans = num1 * num2;
// }
// else if(op === "/" ){
//     ans = num1 / num2;
// }
// else if(op === "%" ){
//     ans = num1 % num2;
// }
// alert("Answer is: "+ans);