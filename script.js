// Variables
// Areas
var questionArea = document.querySelector(".question-area");
var startArea = document.querySelector(".start-area");
var endArea = document.querySelector(".end-area")
var highScoreArea = document.querySelector(".highscore-area")
// Click start button var
var startButton = document.querySelector(".start-button");
// Timer var
var gameTimer = document.querySelector(".game-timer");
// Question var
var askQuestion = document.querySelector(".ask-question");
// Answer var
var userAnswer = document.querySelector(".user-answer");
// Answer buttons
var answerButton = document.querySelector(".answer-button");
// Incorrect answer var
var incorrectAnswer = document.querySelector(".incorrect");
// Correct answer var
var correctAnswer = document.querySelector(".correct");
// End of quiz var
var endGame = document.querySelector(".end-game");
// Initials var
var getInitials = document.querySelector(".get-initials");
var intBtn = document.querySelector(".int-button");
// Highscores var
var highScoresList = document.querySelector(".high-score-list")
var highScores = document.querySelector(".highscores");
// Go back button
var goBackButton = document.querySelector(".goback-button");
// Clear scores button
var clearScoresButton = document.querySelector(".clear-scores");
// Submit button
var submitButton = document.querySelector(".submit-button");

// Other variables

var gameTimer = 0;
var score = 0;
var timerCountEl = document.querySelector("#game-timer");
var endOfGame;
var highScoresArr = [];
var questionIndex = 0;

// Variable for questions

var fiveQuestions = [{

  question: "Commonly used data types DO NOT include:",
  options: [
    "a. strings",
    "b. booleans",
    "c. alerts",
    "d. numbers"],
  correctAnswer: "c. alerts"
},

{
  question: "The condition in an if / else statement is enclosed within ____.",
  options: [
    "a. quotes",
    "b. curly brackets",
    "c. parentheses",
    "d. square brackets"],
  correctAnswer: "b. curly brackets"
},

{
  question: "Which HTML element can we put our JavaScript?",
  options: [
    "a. <header>",
    "b. <footer>",
    "c. <div>",
    "d. <script>"],
  correctAnswer: "d. <script>"
},

{
  question: "Using JavaScript, how would you create a function?",
  options: [
    "a. function.myFunction()",
    "b. function = myFunction()",
    "c. function = Myfunction()",
    "d. function callMyFunction()"],
  correctAnswer: "b. function = myFunction()"
},

{
  question: "How should you leave a comment in a JavaScript file?",
  options: [
    "a. <comment>",
    "b. Comment",
    "c. <!--Comment-->",
    "d. // Comment"],
  correctAnswer: "d. // Comment"
}
];

var timerTime = null;

var stopTimer = function () {
  clearInterval(timerTime);
}

// Timer function
var startTime = function () {
  timerCount = 60;
  timerTime = setInterval(function () {
    timerCountEl.textContent = timerCount;
    timerCount--
    if (timerCount === -1) {
      clearInterval(timerTime);
      getHighScores();
    }
    if (questionIndex > fiveQuestions.length) {
      clearInterval(timerTime);
      getHighScores();
    }
  }, 1000)
}

// Starting quiz function
var starting = function () {
  startArea.style.display = "none";
  startTime();
  displayQuestions();
}

// Ending the quiz
var ending = function () {
  endArea.style.display = "block";
  highScoreArea.style.display = "block";
  displayScore();
}

// Check to see if answer is correct or not
// Add points for correct answer
// Minus points and time for incorrect answer
var maybeAnswer = function (e) {
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

// Display questions
var displayQuestions = function () {
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

// Checking the answer
// Determine if the quiz should end or continue
var handleAnswer = function (e) {
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
  }
}

// Display score
var displayScore = function () {
  var scoreBoard = document.createElement("p");
  scoreBoard.textContent = ("All done! Your final score is " + score + ".");
  userAnswer.append(scoreBoard);
}
// Highscores
highScores.addEventListener("click", displayHighScores)
var boardHighScore = function () {
  var usersInitials = document.querySelector(".initials").value;
}

var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];

// Read highscores from local storage and then use a loop to display them
function getHighScores() {
  highScoreArea.classList.remove(".hidden");
  highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
  for (let index = 0; index < highScores.length; index++) {
    var nowHighScore = document.createElement("li");
    nowHighScore.textContent = highScores[index].initials + highScores[index].score;
    highScoresList.append(nowHighScore);
  }
}

  function saveScore(event) {
    event.preventDefault()
    var newScore = {
      score: score,
      initials: getInitials.value,
    };

    highScores.push(newScore);
    console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(highScores))
    getHighScores();
  }


  intBtn.addEventListener('click', saveScore)

  // Sort the highscores
  highScores.forEach(function (a, b) {
    return b.score - a.score;
  });

  // Add the highscore
  function showHighScore() {
    for (var index = 0; index < highScores.length; index++) {
      var nowHighScore = document.createElement("li");
      nowHighScore.textContent = highScores[index];
    }
  }


  // End the quiz
  var displayHighScores = function () {
    endOfGame = "true"
  }

  // Clear highscores
  function clearOut() {
    btnClearScoresEl.addEventListener("click", function () {
        localStorage.clear();
    })};

  startButton.addEventListener("click", starting)
  questionArea.addEventListener("click", handleAnswer)
  getInitials.addEventListener("submit", boardHighScore)
  goBackButton.addEventListener("click", starting)