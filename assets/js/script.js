/* Psuedo Code Steps

1. Create global variables that link to html
2. Create arrays for Questions, Answers & Correct answers  
3. Creating and setting number values for my times variables
4. Start game function
5. End game function
6. Reset game function
7. Functions for setting and getting scores from local storage
8. Functions to check for wrong answers and deduct time when wrong'
9. Function to increase time when answer is right
10.For loop that iterates through questions' answers
11. init() function that starts to run when page initially loads

*/

// HTML element selectors
var startButton = document.querySelector(".start-button")
var scoreButton = document.querySelector(".scoreboard")
var gameRestartText = document.querySelector("#first-text")
var firstText = document.querySelector("#first-Text")
var secondText = document.querySelector("#second-text")
var startQuizText = document.querySelector(".quiz")
var timerElement = document.querySelector("#remainTime")
var footer = document.querySelector(".bottom-page")

// Global reusable variables
var score = 0;
var currentQuestion = -1;
var timeLeft= 0;
var timer;

// Question Object Arrays
var questions = [{
    title: "Which of the following methods has the ability to combine two arrays and return one new array?",
    choices: ["map()", "sort()", "splice()", "concat()"],
    answer: "concat()"
    },
    {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
    answer: "<script>"
    },
    {
    title: "Inside what tage is the correct place to insert a JavaScript?",
    choices: ["<head>", "<footer>", "<body>", "<html>"],
    answer: "<body>"
    },
    {
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onchange", "onmouseclick", "onmouseover"],
    answer: "onclick"
    },
    {
    title: "Which operator is used to assign a value to a variable?",
    choices: [" - ", " = ", " * ", " x "],
    answer: "="
    },
    {
    title: "What javascript method removes the last element from an array and returns that element.",
    choices: ["push()", "pop()", "reverse()", "length()"],
    answer: "pop()"
    }
]

// Adding event listener to start button and scoreboard for starting and score access
startButton.addEventListener("click", gameStart);
scoreButton.addEventListener("click", getScore)

// Game start function
function gameStart() {

    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
  
        // Run endgame function when timer equals 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameEnd() 
        }
    }, 1000);
  
   next()
  }

// Game end function + interval clearing
function gameEnd() {
    clearInterval(timer);

  var quizContent = `
    <p class="p-title-small">Game over!</p>
    <p class="p-title-smaller>Your score is ` + score +  ` /100!</p>
    <p class="p-title-smaller>You got ` + score / 20 +  ` questions correct!</p>
    <input type="text" id="name" placeholder="First name"> 
    <button id="quiz-button" onclick="setScore()">Save Score!</button>`;
    
    document.getElementById("quiz-content").innerHTML = quizContent;
}
    

    // Score "GET" local storage function
    function getScore() {
      var quizContent = `
        <p class="p">` + localStorage.getItem("highScoreName") + ` your highscore is:</p>
        <p class="p-title>` + localStorage.getItem("highscore") + `</p><br> 

        <button id="quiz-button" onclick="clearScore()">Clear score!</button>
        <button id="quiz-button" onclick="resetGame()">Play Again!</button> `;

        document.getElementById("quiz-content").innerHTML = quizContent;
    }

    // Score "SET" local storage function
    function setScore() {
        localStorage.setItem("highscore", score);
        localStorage.setItem("highScoreName", document.getElementById("name").value);
        
        getScore()

    }

    // Score and name clear from local storage function
    function clearScore() {
        localStorage.setItem("highscore", "");
        localStorage.setItem("highscoreName",  "");
      
        resetGame()
      }

      // Reseting game and giving option to restart
      function resetGame() {
        clearInterval(timer);
        score = 0;
        currentQuestion = -1;
        timeLeft = 0;
        timer = null;
      
        document.getElementById("timeLeft").innerHTML = timeLeft;
       
        var quizContent = `
        <p id="first-text">Welcome To The Code Master! The Coding Quiz Challenge Made For Masters.</p>
        <p id= "second-text">The game is simple, answer the questions and if correct you don't lose time, if wrong, your time will decrease, thus your score will be lower</p>
        <button  class="start-button">Start!</button>
        `
        document.getElementById("quiz-content").innerHTML = quizContent;
      }

      // Check answer function
      function correct() {
            score += 20;
            next()

        } function incorrect(){
            timeLeft -= 15;
            next()
        }  
      
      
        function next() {
            currentQuestion++;
              
            if (currentQuestion > questions.length - 1) {
                gameEnd();
                return;
            }
            var quizContent = `<p class="title>` + questions[currentQuestion].title + `</p>`
          
            for (var quesOptionLoop = 0; quesOptionLoop < questions[currentQuestion].choices.length; quesOptionLoop++) {
          
              var quesButton = `<button class="ques-button" onclick=\"[ANS]\">[CHOICE]</button>`; 
              quesButton = quesButton.replace("[CHOICE]", questions[currentQuestion].choices[quesOptionLoop]);
              if (questions[currentQuestion].choices[quesOptionLoop] == questions[currentQuestion].answer) {
                quesButton = quesButton.replace("[ANS]", "correct()");
              } else {
                quesButton = quesButton.replace("[ANS]", "incorrect()");
              }
              console.log(quesButton)
              quizContent += quesButton
            }
          
            console.log(quizContent) 
            document.getElementById("quiz-content").innerHTML = quizContent;
          }