var str1 = "hello";
var str2 = "ohell";

var arr1 = [];
var arr2 = [];

for (var i=0;i<str1.length;i++){
    arr1[i] = str1[i];
    arr2[i] = str2[i];
}

arr1.sort();
arr2.sort();
var isAnagram ;

for (var i=0;i<str1.length;i++){
    if (arr1[i] === arr2[i]){
        isAnagram = true;   
    }
    else{
        isAnagram = false;
        break;
    }
}

if (isAnagram == true && str1.length == str2.length){
    console.log("Both strings are anagrams!")
}
else{
    console.log("Both strings are NOT anagrams!")

}
