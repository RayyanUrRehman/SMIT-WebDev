var day = +prompt("Enter day:")
var month = prompt("Enter month: ");
var year = +prompt("Enter year: ")

var monthArrAbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var monthArrFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//Validating months input.
for (var i=0;i<=12;i++){
    if (month === monthArrAbr[i]){
        month = ++i;
        break;
    }
    if (month === monthArrFull[i]){
        month = ++i;
        break;
    }
}

var intMonth = Number(month) - 1;   //month start from 0-11.
var userDate = new Date(year,intMonth,day);

var todayDate = new Date();


var years = todayDate.getFullYear() - userDate.getFullYear();
var months = todayDate.getMonth() - userDate.getMonth();
var days = todayDate.getDate() - userDate.getDate();


//need to adjust days and months incase (days or months) < 0
if (days < 0){
    months--;
    days += new Date(userDate.getFullYear(), userDate.getMonth() + 1,0).getDate();
}
if (months < 0){
    years--;
    months += 12;
}

console.log("Your Age is "+years+" years, "+months+" months, and "+days+" days!")


