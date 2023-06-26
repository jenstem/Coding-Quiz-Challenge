var questionArea = document.getElementById("question-area");
var startArea = document.getElementById("start-area");
var endArea = document.getElementById("end-area");
var scoreArea = document.getElementById("answer");
var getInitials = document.getElementById("get-initials");
var showHighscore = document.getElementById("show-highscore");
var scoreBoard = document.getElementById("score-board");
var correctAnswer = document.getElementById("correct");
var incorrectAnswer = document.getElementById("incorrect");
// change start-button
var startButton = document.querySelector("#startingbutton");
var goBackButton = document.querySelector("#goback");
var clearButton = document.querySelector("#clear-score");
var askQuestions = document.getElementById("question");
var answerButton = document.getElementById("a-button");
var getTime = document.querySelector("#get-time");

var score = 0;
var timerCount;
var endOfGame;
getTime.textContent = 0;
var storeScores = [];
var questionIndex = 0;

var fiveQuestions = [
    {
        quest:"Commonly used data types DO NOT include:",
        options: [{option: 'a. strings'}, {option: 'b. booleans'}, {option: 'c. alerts'}, {option: 'd. numbers'}],
        answ: 'c. alerts'},
        {quest:"The condition in an if / else statement is enclosed within ____.",
        options: [{option: 'a. quotes'}, {option: 'b. curly brackets'}, {option: 'c. parentheses'}, {option: 'd. square brackets'}],
        answ: 'b. curly brackets"'},
        {quest:"Which HTML element can we put our JavaScript?",
        options: [{option: 'a. <header>'}, {option: 'b. <footer>'}, {option: 'c. <div>'}, {option: '<script>'}],
        answ: 'd. <script>'},
        {quest:"Using JavaScript, how would you create a function?",
        options: [{option: 'a. function.myFunction()'}, {option: 'b. function = myFunction()'}, {option: 'c. function = Myfunction()'}, {option: 'd. function callMyFunction()'}],
        answ: 'b. function = myFunction()'},
        {quest:"How should you leave a comment in a JavaScript file?",
        options: [{option: 'a. <comment>'}, {option: 'b. Comment'}, {option: 'c. <!--Comment-->'}, {option: 'd. // Comment'}],
        answ: '1'},
];

//Go back on Score Page
var createStart = function () {
    highscoreArea.classList.add("hidden")
    highscoreArea.classList.remove("show")
    startArea.classList.remove("hide")
    startArea.classList.add("show")
    scoreArea.removeChild(containerScoreEl.lastChild)
    questionIndex = 0
    endOfGame = ""
    getTime.textContent = 0
    score = 0
    if (correctAnswer.className = ("show")) {
    correctAnswer.classList.remove("show");
    correctAnswer.classList.add("hidden")
}
    if (incorrectAnswer.className = ("show")) {
    incorrectAnswer.classList.remove("show");
    incorrectAnswer.classList.add("hidden");
}
}

//Start quiz at 60
var timerEl = function () {
    timerCount = 60;
var secondsLeft = setInterval(function() {
    getTime.textContent = timerCount;
    timerCount--
    if (endOfGame) {
    clearInterval(secondsLeft)}
    if (timerCount < 0) {
    displayScore()
    getTime.textContent = 0
    clearInterval(secondsLeft)
    }

    }, 1000)
}

//Start Quiz and shuffles questions
var starter = function() {
    startArea.classList.add('hidden');
    startArea.classList.remove('show');
    questionArea.classList.remove('hidden');
    questionArea.classList.add('show');
    timerEl()
    questionList()
}

//Quiz order
var questionList = function() {
    clearAnswers()
    showQuestions(questionIndex)
}

//Remove answer buttons
var clearAnswers = function() {
    while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)
}
};

//display Questions
var showQuestions = function(index) {
    askQuestions.innerText = index.quest
    for (var i = 0; i < index.options.length; i++) {
var answeroptions = document.createElement('button');
    answeroptions.innerText = index.options[i].option
    answeroptions.classList.add('button')
    // maybe change answer-button to ansbtn?
    answeroptions.classList.add('ansbtn')
    answeroptions.addEventListener("click", maybeAnswer)
    answerButton.appendChild(answeroptions)
}
};

//To display Correct
var correctAnswerEl = function() {
    if (correctAnswer.className = ("hidden")) {
    correctAnswer.classList.remove("hidden")
    correctAnswer.classList.add("banner")
    incorrectAnswer.classList.remove("banner")
    incorrectAnswer.classList.add("hidden")
    }
    }

    ///To display incorrect
var incorrectAnswerEl = function() {
    if (incorrectAnswer.className = ("hidden")) {
    incorrectAnswer.classList.remove("hidden")
    incorrectAnswer.classList.add("banner")
    correctAnswer.classList.remove("banner")
    correctAnswer.classList.add("hidden")
}
}

//Answer Check
var maybeAnswer = function(e) {
    var userOption = e.target
    if ([QuestionIndex].answ === userOption.textContent){
    correctAnswerEl()
    score = score + 4
}
    else {
    incorrectAnswerEl()
    score = score - 4;
    timeleft = timeleft - 15;
}

//Questions order
questionIndex++
    if  (questionIndex.length > questionIndex + 1) {
    questionList()
    }
    else {
    endOfGame = "true";
    displayScore();
    }
}

//Show score
var displayScore = function () {
    questionArea.classList.add("hidden");
    endArea.classList.remove("hidden");
    endArea.classList.add("show");
var scoreBoardList = document.createElement("p");
    scoreBoardList.textContent = ("Your final score is " + score + "!");
    scoreArea.appendChild(scoreBoardList);
}

//High Score
var startHighscore = function(e) {
    e.preventDefault()
var initials = document.querySelector("#initials").value;
    if (!initials) {
    alert("Please enter your intials:");
    return;
}
getInitials.reset();
var storeScoreEl = {
    initials: initials,
    score: score
}

//Sort Score
storeScores.push(storeScoreEl);
storeScores.sort((a, b) => {return b.score-a.score});
while (scoreBoard.firstChild) {
scoreBoard.removeChild(scoreBoard.firstChild)
}
for (var i = 0; i < storeScores.length; i++) {
var scoreBoardEl = document.createElement("li");
scoreBoardEl.ClassName = "highscore";
scoreBoardEl.innerHTML = storeScores[i].initials + " - " + storeScores[i].score;
scoreBoard.appendChild(scoreBoardEl);
}
listHighscore();
showScores();
}

//Save high score
var listHighscore = function () {
    localStorage.setItem("storeScores", JSON.stringify(storeScores))
}

//Load high schore
var highscoreListEl = function () {
    var highscoreList = localStorage.getItem("storeScores")
        if (!highscoreList) {
        return false;
    }

highscoreList = JSON.parse(highscoreList);
highscoreList.sort((a, b) => {return b.score-a.score})
 for (var i = 0; i < highscoreList.length; i++) {
var scoreBoardEl = document.createElement("li");
    scoreBoardEl.ClassName = "highscore";
    scoreBoardEl.textContent = highscoreList[i].initials + " - " + hgihscoreList[i].score;
    scoreBoard.appendChild(scoreBoardEl);
    storeScores.push(highscoreList[i]);
}
}

var delScoreBoard = function () {
    storeScores = [];
    while (scoreBoard.firstChild) {
    scoreBoard.removeChild(scoreBoard.firstChild);
}
    localStorage.clear(storeScores);
}

highscoreListEl()

//Event listeners-Click* to Start Game
startButton.addEventListener("click", starter)
//*Go back
goBackButton.addEventListener("click", createStart)
//*Submit button
getInitials.addEventListener("submit", startHighscore)
//*High scores
showHighscore.addEventListener("click", showScores)

var showScores = function() {
    highscoreArea.classList.remove("hidden");
    highscoreArea.classList.add("show");
    endOfGame = "true"

//To show right or wrong
if (endArea.className = ("show")) {
    endArea.classList.remove("show");
    endArea.classList.add("hidden");
}
if (startArea.className = ("show")) {
    startArea.classList.remove("show");
    startArea.classList.add("hidden");
}
if (questionArea.className = ("show")) {
    questionArea.classList.remove("show");
    questionArea.classList.add("hidden");
}
if (correctAnswer.className = ("show")) {
    correctAnswer.classList.remove("show");
    correctAnswer.classList.add("hidden");
}
if (incorrectAnswer.className = ("show")) {
    incorrectAnswer.classList.remove("show");
    incorrectAnswer.classList.add("hidden");
}
}