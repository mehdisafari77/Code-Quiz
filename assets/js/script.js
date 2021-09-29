/* Psuedo Code Steps

1. Create global variables that link to html
2. Create arrays for Questions, Answers & Correct answers  
3. Creating and setting number values for my time and score variables
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
var timerElement = document.querySelector("#timeLeft")
var footer = document.querySelector(".bottom-page")
var quizBody = document.getElementById("quiz-content")

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
    choices: ["scripting", "script", "js", "javascript"],
    answer: "script"
    },
    {
    title: "Inside what tag is the correct place to insert a JavaScript?",
    choices: ["head tag", "footer tag", "body tag", "html tag"],
    answer: "body tag"
    },
    {
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onclick", "onchange", "onmouseclick", "onmouseover"],
    answer: "onclick"
    },
    {
    title: "Which operator is used to assign a value to a variable?",
    choices: [" - ", " = ", " * ", " x "],
    answer: " = "
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
    timerElement.innerHTML = timeLeft;

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
    <p class="p-title-small">Game Over!</p>
    <p class="p-title-smaller>Your score is ` + score +  ` /100!</p>
    <p class="p-title-smaller>You got ` + score / 20 +  ` questions correct!</p>
    <input type="text" id="name" placeholder="Initials here"> 
    <button id="quiz-button" onclick="setScore()">Save Score!</button>`;
    
    quizBody.innerHTML = quizContent;
}
    

    // Score "GET" local storage function
    function getScore() {
      var quizContent = `
        <p class="p">` + localStorage.getItem("highscoreName") + ` your highscore is:</p>
        <p class="p-title>` + localStorage.getItem("highscore") + `</p><br> 

        <button id="quiz-button" onclick="clearScore()">Clear score!</button>
        <button id="quiz-button" onclick="resetGame()">Play Again!</button> `;

        quizBody.innerHTML = quizContent;
    }

    // Score "SET" local storage function
    function setScore() {
        localStorage.setItem("highscore", score);
        localStorage.setItem("highscoreName", document.getElementById("name").value);
        
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
      
        timerElement.innerHTML = timeLeft;
       
        var quizContent = `
        <p id="first-text">Welcome To The Code Master! The Coding Quiz Challenge Made For Masters.</p>
        <p id= "second-text">The game is simple, answer the questions and if correct you don't lose time, if wrong, your time will decrease, thus your score will be lower</p>
        <button class="start-button">Start!</button>
        `
        quizBody.innerHTML = quizContent;
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

            var quizContent = `<p class="p-title>` + questions[currentQuestion].title + `</p>`
          
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
            quizBody.innerHTML = quizContent;
        }