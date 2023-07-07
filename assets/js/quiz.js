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
const startQuizPage = document.getElementById('quizBoxPage');
const quizQuest = document.getElementById("quizBoxPage");
const questionList = document.getElementById('questionList');
const questionOptions = document.getElementById('questionOptions');
const endGamePage = document.getElementById('gameEndPage');
const subInitials = document.getElementById('initials');
const subScore = document.getElementById('submitScore');
const highScorePage = document.getElementById('Highscores_page');
const highScoreList = document.getElementById('userScores');
const returnGame = document.getElementById('goBack');
const clearHighscores = document.getElementById('clearHigh');
// const score = document.getElementById("score")
const ansA = document.getElementById('choiceA');
const ansB = document.getElementById('choiceB');
const ansC = document.getElementById('choiceC');
const ansD = document.getElementById('choiceD');
const checkAnswer = document.getElementById('checkAns')
let secondsLeft = 60;
let finalScore = document.getElementById('score');
let timer = document.getElementById('time');
let questionsLeft = 0;
let userScores = [];
let questionIndex = 0;
let score = secondsLeft
let initials ="";
let timeInterval;



var questions = [
    {
      question: "When was the first World Cup?",
      choices: ["A. 1940", "B. 1965", "C. 1925", "D. 1930"],
      correctAns: "D. 1930",
    },
    {
      question: "Which club has the most Champions League Titles?",
      choices: ["A. Real Madrid", "B. Manchester United", "C. FC Barcelona", "D. Bayern Munich"],
      correctAns: "A. Real Madrid",
    },
    {
      question: "Which country has not won a World Cup?",
      choices: ["A. Uruguay", "B. Italy", "C. England", "D. Netherlands"],
      correctAns: "D. Netherlands",
    },
    {
      question: "Which club has the most Premier League Titles?",
      choices: ["A. Machester City", "B. Machester United", "C. Chelsea", "D. Arsenal"],
      correctAns: "B. Manchester United",
    },
    {
      question: "Which country won the 2020 UEFA Euro?",
      choices: ["A. France", "B. Portugal", "C. Italy", "D. Spain"],
      correctAns: "C. Italy",
    },
    {
      question: "Which two countries played in the first international match?",
      choices: ["A. Scottland and England", "B. Germany and France", "C. Brazil and Argentina", "D. Germany and Italy"],
      correctAns: "A. Scottland and England",
    },
  ];

function startGame(){
    // action to initialize game
    welcomePage.style.display = "none";
    startQuizPage.style.display = "block";
    startTimer();
    showQuestions();
    // start button disappears
    // welcome text appears
    // timer starts
    // first question appears
    // response options for first question appears
}

function startTimer(){
    // set interval -- look through activity for set interval
    timeInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time Left: " + secondsLeft + "s";
        if(secondsLeft <= 0) {
            endGame();
        }
    }, 1000);
}
    // decrement the time left each second
    // check if the time is zero, if yes -endGame function
function showQuestions(){
    const currentQuestion = questions[questionIndex];
    questionList.textContent = currentQuestion.question;
    questionOptions.innerHTML = "";
    currentQuestion.choices.forEach(function(choice) {
        const li = document.createElement('li');
        const button = document.createElement("button");
        button.textContent = choice;
        li.appendChild(button);
        questionOptions.appendChild(li);
    });
}


function guess(event){
    event.preventDefault();
    const userChoice = event.target.textContent;
    const currentQuestion = questions[questionIndex];
    const checkAnswerText = document.getElementById('checkAns');

    if (userChoice === currentQuestion.correctAns) {
        checkAnswerText.textContent = "Correct!";
    } else {
        checkAnswerText.textContent = "Incorrect!";
        secondsLeft -= 15;
        if (secondsLeft < 0) {
            endGame();
        }
    }
    
    checkAnswerText.style.display = 'block';
    setTimeout(function() {
        checkAnswerText.style.display = 'none';
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestions();
        } else {
            endGame();
        }
    }, 300);
}

    // trigerred by an event listener on the options
    // what was clicked? event.target -- did the user click the correct answe?
    // compare what was selected to what is the correct answer
    // if correct answer -- message that says correct
    // else -- message that says incorrect, reduce the time by 15 seconds
    // call newQuest function that renews the question on the page
    



function newQuest(){
    // presented with new question
    // presented with new response options
    // increment the current question number
    // if you are at the end of the array -endGame function
}

function endGame() {
    clearInterval(timeInterval);
    startQuizPage.style.display = "none";
    endGamePage.style.display = "block";
    timer.style.display = "none";
    document.getElementById("score").textContent = secondsLeft;
    // everything disappears
    // message "all done" - summary text
    // input field for the initials - eventListener
    // stop decrementing time left
}

function afterSubmit() {
    endGamePage.style.display = "none";
    highScorePage.style.display = "block";

    
    initials = initialsInput.value.trim();
    if (initials === "") {
        return;
    }

    const userScore = {
        initials: initials,
        score: score,
      };
      
      let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      highScores.push(userScore);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      
      // Display high scores
    }

    // create an edge case -- empty array of scores
    // create score object for localStorage
    // initialField.value for the initials in the score object
    // insert new score into localStorage ! array of objects[(initials: "HCW", score: 23}, (initials: "CL": score: 31}]
    // show high score
    // options to start over and clear high score


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

