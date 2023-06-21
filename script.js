// variables

// click start button var
var startButton = document.querySelector(".start-button");
// timer var
var gameTimer = document.querySelector(".game-timer");
// question var
var askQuestion = document.querySelector(".ask-question");
// answer var
var userAnswer = document.querySelector(".user-answer");
// answer buttons
var answerButton = document.querySelector(".answer-button");
// incorrect answer var
var incorrectAnswer = document.querySelector(".incorrect");
// correct answer var
var correctAnswer = document.querySelector(".correct");
// score var
var score = 0;
// how much time is left var = same as timer var?
var timer;
var timerCount;
// end of game var
// var endGame = document.querySelector(".end-game");
var endOfGame;
// initials var
var getInitials = document.querySelector(".get-initials");
// highscores var
var highScores = document.querySelector(".highscores");
var highScoresList = [];
// go back button
var goBackButton = document.querySelector(".goback-button");
// clear scores button
var clearScoresButton = document.querySelector(".clear-scores");
// variable for questions

var fiveQuestions = [ ];
// questions 1 - 5

// answers 1 - 5

// when to show correct and incorrect

// timer function
var startTime = function() {
    timerCount = 60;
    var timerTime = setInterval(function() {
        timerCount--
        if (endOfGame) {
            clearInterval(timerTime)}
        if (timerCount < 0) {
                score()
                gameTimer.innerText = 0
                clearInterval(timerTime)
    }
        }, 1000)
    }

// starting game function - needs work
var starting = function() {
    startTime()
}
// questions one at a time
var showQuestions = function() {
    askQuestion = index.fiveQuestions
    for (let index = 0; index < fiveQuestions.length; index++) {
        var answerButton = fiveQuestions[index]
        answerButton.addEventListener("click", maybeAnswer);
    }
}

var maybeAnswer = function(e) {
    var usersPick = e.target
    if (fiveQuestions === maybeAnswer) {
        userCorrect()
        score = score + 4
    }
    else {
        userIncorrect()
        score = score - 4;
        timerCount = timerCount - 15;
    };
}
// keeping score

// display score
var displayScore = function() {

    var scoreBoard = document.createElement("p");
      scoreBoard.innerText = ("All done! Your final score is " + score + ".");
      userAnswer.append(scoreBoard);
}
// highscores
var boardHighScore = function(e) {

    var usersInitials = document.querySelector(".initials").value;
      if (!usersInitials) {
        window.alert("Please enter your initials:");
        return;
      }
}
// submit
var saveScore = function () {
    localStorage.setItem("Highscores", JSON.stringify(Highscores))
}

// put highscores in order
 highScoresList.push(highScores);
 highScoresList.sort(a, b);
 while (highScores.append) {
    highScores.remove(highScores.index(0));
 }

 addHighScore();
 boardHighScore();

 var addHighScore = function () {
    localStorage.setItem("Highscores", JSON.stringify(Highscores))
 }

 var showHighScore = function () {
    var showingHighScore = localStorage.getItem("Highscores")
      if (!showingHighScore) {
        return false;
      }

showingHighScore = JSON.parse(showHighScore);
showingHighScore.sort(a, b)
  for (let index = 0; index < showingHighScore.length; index++) {
    var nowHighScore = document.createElement("li");
        nowHighScore.className = ".nowHighScore";


  }
 }
// go back

// clear highscores