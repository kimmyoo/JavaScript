function printAndGettingHighScore(scores){
    var outputMessage;
    var highscore = 0;

    for (var i = 0; i < scores.length; i++){
        outputMessage = "bubble solutioin # " + i + " : " + scores[i];
        console.log(outputMessage);
        
        if (scores[i] > highscore){
            highscore = scores[i];
        }
    }
    return highscore;
}



function getHighScoresIndex(scores, highestScore){
    var highScoresArr = [];
    for (var i = 0; i < scores.length; i++){
        if (highestScore == scores[i])
            highScoresArr.push(i);
    }
    return highScoresArr;
}





var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 
              51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 
              44, 18, 41, 53, 55, 61, 51, 44];

var highestScore = printAndGettingHighScore(scores);
var highScores = getHighScoresIndex(scores, highestScore);
console.log("solution with highest score is: ", highScores);
