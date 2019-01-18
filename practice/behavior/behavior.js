var word = "bottles of beer";
var count = 99;
while (count > 0){
    console.log (count + word + " on the wall");
    console.log ("take one bottle off the wall");
    count -= 1;
    if (count > 0)
        console.log (count + word + " on the wall");
    else
        console.log ("no more beer on the wall ");
}

var test1 = "abc";
var test2 = 123;
var test3 = true;
var test4 = {}; //obj
var test5 = []; //obj
var test6;
var test7 = {"abc": 123}; //obj
var test8 = ["abc", 123]; //obj
function test9(){return "abc"};  //function
var test10 = NaN;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);




window.onload = init;
setTimeout(wakeUpUser, 5000);


var emot = "  XOxxOO ";
var hugs = 0;
var kisses = 0;
emot = emot.trim();
emot = emot.toUpperCase();

//charAt(i)
for(var i = 0; i < emot.length ; i++){
    if (emot.charAt(i) === "X"){
        hugs++;
    }else if(emot.charAt(i) == "O"){
            kisses++; 
            }
}

console.log(hugs);
console.log(kisses);


function wakeUpUser(){
    alert ("wake up!");
}

function init(){
    var para = document.getElementById("generic");
    para.setAttribute("class", "redtext");
}
