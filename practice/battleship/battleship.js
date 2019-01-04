var randomloc = Math.floor(5 * Math.random())

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var numOfGuess = 0;
var numOfHits = 0;
var isSunk = false;

var hitSpots = new Set();

while (!isSunk){
    guess = prompt("Aim, Ready, fire!:");
    //validate user input
    if (guess > 6 || guess < 0){
        alert("enter a valid hit");
    }else{
        numOfGuess += 1;
        if (hitSpots.has(guess)){
            alert("repeat hit spot!");
            continue;
        }
        else{
            hitSpots.add(guess);
            if (guess == location1 || guess == location2 || guess == location3){
                numOfHits += 1;
                alert ("that's a hit!");
                if (numOfHits == 3){
                    alert("battle is sunk");
                    isSunk = true;
                }
            }else{
                alert("that's a miss")
            }
        }
    }
}


var accuracy = 3/numOfGuess;
var report = "you took " + numOfGuess + " shots to sink my battleship, and your accuracy is: " + accuracy;
alert(report);
