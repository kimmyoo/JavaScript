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




window.onload = init;
setTimeout(wakeUpUser, 5000);





function wakeUpUser(){
    alert ("wake up!");
}

function init(){
    var para = document.getElementById("generic");
    para.setAttribute("class", "redtext");
}
