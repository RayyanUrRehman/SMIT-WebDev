var string = "swiss"
var len = string.length;
var ans = "";
var count = 0;

for (var i=0;i<len;i++){
    var char = string[i];
    count = 0;
    for (var j=0;j<len;j++){
        if (string[i] === string[j]){
            count++;
        }
    }
    if (count == 1){
        ans = string[i];
        break;
    }
}

console.log(ans);