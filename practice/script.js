
function changeTextAndStyle(){
	document.getElementById('clickToChange').innerHTML = 'My God!';
	var x = document.getElementById('clickToChange');  // µ¥ÒýºÅ Ë«ÒýºÅ¶¼¿ÉÒÔ
	x.style.fontSize = "40px";  // fontSize (S is capitalized)
	x.style.color = "red";
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("blink1")) {
        image.src = "imgs/blink2.jpg";
    } else {
        image.src = "imgs/blink1.jpg";
    }
}

function validateInput(){
	var text; 
	var x; 
	x = document.getElementById("inputField").value; // get the input value from inputField
	if (isNaN(x) || x < 1 || x > 10){
		text = "not valid";
	}else{
		text = "valid input";
	}
	document.getElementById("valiRes").innerHTML = text;
}

function moveImage(direction){
	var imageXOri = document.getElementById('myImage').style.left; // get the left object string value
	var imageX = imageXOri.substr(0, imageXOri.length-2); // get rid of px at the end of the string
	imageX = parseInt(imageX); // convert it to integer
	
	var imageYOri = document.getElementById('myImage').style.top;
	var imageY = imageYOri.substr(0, imageYOri.length-2);
	imageY = parseInt(imageY);
	
	switch (direction){
		case "up": 
			document.getElementById('myImage').style.top = (imageY - 10) + "px"; // operation on object's attribute, can't just use variable imageYOri
			break;
		case "left":
			document.getElementById('myImage').style.left = (imageX - 10) + "px";
			break;
		case "right":
			document.getElementById('myImage').style.left = (imageX + 10) + "px";
			break;
		case "down":
			document.getElementById('myImage').style.top = (imageY + 10) + "px";
			break;
	}
}


function getXY(event){
	document.getElementById("getxy").innerHTML = "x = " + event.clientX + " " + "y = " + event.clientY;
}

function rainbowColor(object){
	switch(object.id){
		case "c1":
		document.getElementById("c1").style.backgroundColor = "#ff4000";
		break;
		case "c2":
		document.getElementById("c2").style.backgroundColor = "#ffbf00";
		break;
		case "c3":
		document.getElementById("c3").style.backgroundColor = "#ffff00";
		break;
		case "c4":
		document.getElementById("c4").style.backgroundColor = "#bfff00";
		break;
		case "c5":
		document.getElementById("c5").style.backgroundColor = "#00ffbf";
		break;
		case "c6":
		document.getElementById("c6").style.backgroundColor = "#00ffff";
		break;
		case "c7":
		document.getElementById("c7").style.backgroundColor = "#8000ff";
		break;
	}
}

function clearRainbow(object){
	object.style.backgroundColor = "black";
}

function showTime(){
	document.getElementById("clock").innerText = new Date();
}

setInterval("showTime()", 1000);

function moveWin(){
	newWin = window.open ('http://www.youtube.com', '', 'width = 300, height = 300');
	newWin.moveTo(1000, 300);
	newWin.alert("毛片网站， 不满18请勿观看");
}

function isANum(event){
	if (event.keyCode < 48 || event.keyCode > 57){
		alert("Your input is not a number");
		return false;
	}
}


function verifySelection (){
	var fav = document.getElementsByName("fav");
	var favArray = [];
	for (var i = 0; i < fav.length; i++){
		if (fav[i].checked){
			favArray.push(fav[i].value);
		}
	}
	
	if (favArray.length!=0)
		alert("you selected " + favArray);
	else 
		alert("you didn't make any selection");
	
}

	var catX = 0;
	var catY = 0;
	var xMove = 1;
	var yMove = 1;

function catwalk(){
	catX += xMove;
	catY += yMove;
	
	document.getElementById("catwalk").style.left = catX + "px";
	document.getElementById("catwalk").style.top = catY + "px";
	
	if (catX + document.getElementById("catwalk").offsetWidth >= document.body.clientWidth){
			xMove = -xMove;
			document.getElementById("cat").src = "imgs/cat2.gif";
	}
	if (catX <= 0){
			xMove = -xMove;
			document.getElementById("cat").src = "imgs/cat1.gif";
	}
	if ((catY + document.getElementById("catwalk").offsetHeight >= document.body.clientHeight) || catY <= 0){
			yMove = -yMove;
	}

}

var catwalkInterval = setInterval("catwalk()", 10);

function startCatWalk(){
	catwalkInterval = setInterval("catwalk()", 10);
}

function stopCatWalk(){
	clearInterval(catwalkInterval);
}


