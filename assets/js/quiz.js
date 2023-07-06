// html selectors - sample: var startButtonEl = document.querrySelector("#start")
// global variables
    //  question number - current question
    // store the time - var timeLeft - 300
    // array of questions - var Question = ["what's two plus two","what's two plus two","what's two plus two",]
    // array of answers - var Answers = [["4","5","6","7"],["9","8","7","6"],["11","12","16","17"],["24","25","26","27"]]
        // answers [1] // ["9","8","7","6"]
        // answers[1[3]] // "6"
    //array of correct answers var correctAnswers = ["4","8",]
// functions

const startBtn = document.getElementById("start");
const container = document.getElementById('.container');
const welcomePage = document.getElementById('welcomePage');
const initGameBtn = document.getElementById('start');
const highScoreBtn = document.getElementById('highscores');
const startQuizPage = document.getElementById('startQuizPage');
const quizQuest = document.getElementById("quizBoxPage");
const listQuest = document.getElementById('questionList');
const questAnswer = document.getElementById('questionOptions');
const endGamePage = document.getElementById('gameEndPage');
const subInitials = document.getElementById('initials')
const subScore = document.getElementById('submitScore')
const highScorePage = document.getElementById('Highscores_Page')
const highScoreList = document.getElementById('userScores')
const returnGame = document.getElementById('goBack')
const clearHighscores =document.getElementById('clearHigh')


function startGame(){
    // action to initialize game
    welcomePage.style.display = "none";
    startQuizPage.style.display = "block";

    // start button disappears
    // welcome text appears
    // timer starts
    // first question appears
    // response options for first question appears
}

function startTimer(){
    // set interval -- look through activity for set interval
    // decrement the time left each second
    // check if the time is zero, if yes -endGame function
}

function guess(){
    // trigerred by an event listener on the options
    // what was clicked? event.target -- did the user click the correct answe?
    // compare what was selected to what is the correct answer
    // if correct answer -- message that says correct
    // else -- message that says incorrect, reduce the time by 15 seconds
    // call newQuest function that renews the question on the page
    // 
}


function newQuest(){
    // presented with new question
    // presented with new response options
    // increment the current question number
    // if you are at the end of the array -endGame function
}

function endGame() {
    // everything disappears
    // message "all done" - summary text
    // input field for the initials - eventListener
    // stop decrementing time left
}

function afterSubmit() {
    // create an edge case -- empty array of scores
    // create score object for localStorage
    // initialField.value for the initials in the score object
    // insert new score into localStorage ! array of objects[(initials: "HCW", score: 23}, (initials: "CL": score: 31}]
    // show high score
    // options to start over and clear high score
}

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am resented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches o
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score the initials and score in the localStorage




startBtn.addEventListener("click", startGame);
questionOptions.addEventListener('click', guess);
subScore.addEventListener('click', afterSubmit);
goBack.addEventListener('click', goBack);
clearHighscores.addEventListener('click', clearHighscores);

