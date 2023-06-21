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
var highScoresList = "";
// go back button
var goBackButton = document.querySelector(".goback-button");
// clear scores button
var clearScoresButton = document.querySelector("clear-scores");
// variable for questions

// questions 1 - 5

// answers 1 - 5

// when to show correct and incorrect

// timer function
var startTime = function() {
    timerCount = 60;
    var gameTimer = setInterval(function() {
        timerCount--
        if (timerCount === 0) {
            clearInterval()}
        if (timerCount < 0) {
                return score();
    }
        }, 1000)
    }

// starting game function

// questions one at a time

// keeping score

// show score

// highscores

// submit

// put highscores in order

// go back

// clear highscores