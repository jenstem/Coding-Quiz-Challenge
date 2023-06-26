// variables
var questionArea = document.querySelector(".question-area");
var startArea = document.querySelector(".start-area");
var endArea = document.querySelector(".end-area")
var highScoreArea = document.querySelector(".highscore-area")
highScoreArea.style.display = "none"
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
// end of game var
var endGame = document.querySelector(".end-game");
// initials var
var getInitials = document.querySelector(".get-initials");
var intBtn = document.querySelector(".int-button");
// highscores var - do I need both of these?
var highScoresList = document.querySelector(".high-score-list")
var highScores = document.querySelector(".highscores");
// go back button
var goBackButton = document.querySelector(".goback-button");
// clear scores button
var clearScoresButton = document.querySelector(".clear-scores");
// submit button
var submitButton = document.querySelector(".submit-button");

// other variables

var gameTimer = 0;
var score = 0;
// do I need timerCount and gameTimer?
var timerCountEl = document.querySelector("#game-timer");
var endOfGame;
// do I need both of these for highscore?
var highScoresArr = [];
var highScoresList = [];
var questionIndex = 0;

// variable for questions

var fiveQuestions = [{

    question: "Commonly used data types DO NOT include:",
    options:[
    "a. strings",
    "b. booleans",
    "c. alerts",
    "d. numbers"],
    correctAnswer: "c. alerts"},

{
    question: "The condition in an if / else statement is enclosed within ____.",
    options:[
     "a. quotes",
    "b. curly brackets",
    "c. parentheses",
    "d. square brackets"],
    correctAnswer: "b. curly brackets"},

{
    question: "Which HTML element can we put our JavaScript?",
    options:[
    "a. <header>",
    "b. <footer>",
    "c. <div>",
    "d. <script>"],
    correctAnswer: "d. <script>"},

{
    question: "Using JavaScript, how would you create a function?",
    options:[
    "a. function.myFunction()",
    "b. function = myFunction()",
    "c. function = Myfunction()",
    "d. function callMyFunction()"],
    correctAnswer: "b. function = myFunction()"},

{
    question: "How should you leave a comment in a JavaScript file?",
    options:[
    "a. <comment>",
    "b. Comment",
    "c. <!--Comment-->",
    "d. // Comment"],
    correctAnswer: "d. // Comment"}
];
var timerTime = null;

var stopTimer = function() {
  clearInterval(timerTime);
}

// timer function - does startTime need to be above line 92?
var startTime = function() {
    timerCount = 60;
    timerTime = setInterval(function() {
    timerCountEl.textContent = timerCount;
      timerCount--
    if (timerCount === -1) {
      stopTimer();}
    // if (timerCount < 0) {
    //   score()
    //   timerCount.innerText = 0
    //   clearInterval(timerTime)
    // }

    }, 1000)
}

// starting game function - needs work
var starting = function() {
    startArea.style.display = "none";
    startTime();
    displayQuestions();
}

var ending = function() {
    // endArea.style.display = "none";
    // saveScore();
    displayScore();
    // showHighScore();
    // boardHighScore();
}

// when to show correct and incorrect - not sure  set display to none and then change

// var answerCorrect = function() {

// }

// var answerIncorrect = function() {

// }

// check to see if answer is correct - why is correctAnswer wrong?

var maybeAnswer = function(e) {
  var selectedOption = e.target
  console.log(selectedOption, correctAnswer);
    if (correctAnswer === selectedOption) {
      answerCorrect()
      score = score + 4
    }
    else {
        answerIncorrect()
        score = score - 4;
        timerCount = timerCount - 15;
    }
};

// decrease timer incorrect answer X
// timer needs to stop when quiz ends X
// display something that let's user know quiz has ended
// populate get initials
// populate high score
// display incorrect/correct

// display questions one at a time - not sure on this
// var displayQuestions = function() {
//     askQuestion = index.fiveQuestions
//     for (let index = 0; index < fiveQuestions.length; index++) {
//         var answerButton = fiveQuestions[index]
//         answerButton.addEventListener("click", maybeAnswer);
//     }
// }
// }

var displayQuestions = function() {
    questionArea.innerHTML = "";
  var questionEl = document.createElement("p");
   questionEl.textContent = fiveQuestions[questionIndex].question;
    questionArea.append(questionEl);
      for (let index = 0; index < fiveQuestions[questionIndex].options.length; index++) {
        var choiceButton = document.createElement("button");
          choiceButton.style.display = "block";
          choiceButton.textContent = fiveQuestions[questionIndex].options[index];
          questionArea.append(choiceButton);
    }
}

var handleAnswer = function(e) {
  if (e.target.tagName === "BUTTON") {
    if (e.target.textContent === fiveQuestions[questionIndex].correctAnswer) {
        score = score + 4
        console.log("correct");
    } else {
        score = score - 4;
        timerCount = timerCount - 15;
        console.log("incorrect");

    }
    questionIndex++;
    if (questionIndex === fiveQuestions.length) {
      questionArea.style.display = 'none'
      highScoreArea.style.display = 'block'
      stopTimer();
      ending();
      getInitials.addEventListener("submit", boardHighScore)
    } else {
      displayQuestions();
    }
    // displayQuestions();
  }
}


// doesn't know when program is over, tell it to stop

// when it hits 5, end it, end of array or time = 0, QI = length of array - stop 175, 176

// keeping score

// display score
var displayScore = function() {
    var scoreBoard = document.createElement("p");
      scoreBoard.textContent = ("All done! Your final score is " + score + ".");
      userAnswer.append(scoreBoard);
}
// highscores
highScores.addEventListener("click", displayHighScores)
var boardHighScore = function() {
    var usersInitials = document.querySelector(".initials").value;
      // if (!usersInitials) {
      //   window.alert("Please enter your initials:");
        // return;
      }

// doesn't kow when program is over, tell it to stop
// submit - submit to high-score-area?
// getInitials.addEventListener("submit", )

// var saveScore = function() {
//     localStorage.setItem("highScores", JSON.stringify(highScores))
// }

function saveScore() {
  // console.log(highScores);
  var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
      var newScore = {
        score: gameTimer,
        initials: getInitials,
      };
      highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores))
}

intBtn.addEventListener('click', saveScore)


// put highscores in order
//  highScoresList.push(highScores);
// //  highScoresList.sort(a, b);
//  while (highScores.append) {
//     highScores.remove(highScores.index(0));
//  }

//  addHighScore();
//  boardHighScore();

//  var addHighScore = function() {
//     localStorage.setItem("highScores", JSON.stringify(highScores))
//  }

 function showHighScore() {
    var showingHighScore = localStorage.getItem("highScores");
    if (!showingHighScore) {
        return false;
    }

    showingHighScore = JSON.parse(showHighScore);
    showingHighScore.sort(a, b);
    for (let index = 0; index < showingHighScore.length; index++) {
        var nowHighScore = document.createElement("li");
        nowHighScore.className = ".nowHighScore";


    }
}
// at some point you need to end the game - maybe this?
var displayHighScores = function() {
    endOfGame = "true"
}

// go back - needs work - go back to start-area?
goBackButton.addEventListener("click", starting)

// clear highscores - needs work
// clearScoresButton.addEventListener("click", )
var clear = function() {
    var highScores = [];
    while (highScoresList) {
        highScoresList.remove(highScoresList);
    }
      localStorage.clear(highScores);
}

startButton.addEventListener("click", starting)
questionArea.addEventListener("click", handleAnswer)
// intBtn.addEventListener('click', saveScore)
getInitials.addEventListener("submit", boardHighScore)
// endArea.addEventListener("click", ending)