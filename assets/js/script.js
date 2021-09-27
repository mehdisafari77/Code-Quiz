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
var gameRestartText = document.querySelector(".quiz")

// Global reusable variables
var score = 0;
var currentQuestion = -1;
var remainTime = 0;
var timer;

// init function
function init() {
    getScore()
}

// Question Object Arrays
var questions = [{
    title: "Which of the following methods has the ability to combine two arrays and return one new array?",
    choices: ["map( )", "sort( )", "splice( )", "concat( )"],
    answer: "concat( )"
    },
{
    title: "",
    choices: [],
    answer: ""
    },
{
    title: "",
    choices: [],
    answer: ""
  },
{
    title: "",
    choices: [],
    answer: ""
  },
{
    title: "",
    choices: [],
    answer: ""
  },
{
    title: "",
    choices: [],
    answer: ""
}]

// Adding event listener to start button so that it runs initial function when clicked
startButton.addEventListener("click", gameStart);

// Game start function
function gameStart() {
    remainTime = 75;
    document.querySelector("#remainTime").innerHTML = remainTime;
    // startButton.disabled = true;
  
    timer = setInterval(function() {
        remainTime--;
        document.getElementById("#remainTime").innerHTML = remainTime;
  
        // Run endgame function when timer equals 0
        if (remainTime <= 0) {
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
    <p class="p-title-smaller>You got ` + score / 6 +  ` questions correct!</p>
    <input type="text" id="name" placeholder="First name"> 
    <button id="quiz-button" onclick="setScore()">Set score!</button>`;
    
    document.getElementById("quiz-content").innerHTML = quizContent;
}
    

    // Score "GET" local storage function
    function getScore() {
        quizContent = `
        <p class="p">` + localStorage.getItem("name") + `'s highscore is:</p>
        <p class="p-title>` + localStorage.getItem("highscore") + `</p><br> 
        <button id="quiz-button" onclick="clearScore()">Clear score!</button><button id="quiz-button" onclick="resetGame()">Play Again!</button> `;

        document.getElementById("quiz-context").innerHTML = quizContent;
    }

    // Score "SET" local storage function
    function setScore() {
        localStorage.setItem("highscore", score);
        localStorage.setItem("highScoreName", document.getElementById("name").value)
        
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
      
        document.getElementById("remainTime").innerHTML = timeLeft;
      
        var quizContent = gameRestartText
      
        document.getElementById("quiz-content").innerHTML = quizContent;
      }

      // Check answer function
      function checkAnswer() {
          if (questions.choices === questions.answer) {
            alert("That was correct")
            remainTime += 20;
            next()
        } else if (questions.choices !== questions.answer) {
            alert("That was incorrect")
            remainTime -= 15;
            next()
        }  
      }
      
      function next() {
        currentQuestion++;
      
        if (currentQuestion > questions.length - 1) {
            gameEnd();
            return;
        }
        var quizContent = `<p class="title>` + questions[currentQuestion].title + `</p>`

        for (var quesOptionLoop = 0; quesOptionLoop < questions[currentQuestion].choices.length; quesOptionLoop++) {

        var quesButton = `<button class="ques-button"  onclick=\"[ANS]\">[CHOICE]</button>`; 
        quesButton = quesButton.replace("[CHOICE]", questions[currentQuestion].choices[quesOptionLoop]);
        if (questions[currentQuestion].choices[quesOptionLoop] == questions[currentQuestion].answer) {
          quesButton = quesButton.replace("[ANS]", "checkAnswer()");
        } 
        
        else {
          quesButton = quesButton.replace("[ANS]", "checkAnswer()");
        }
        quizContent += quesButton
    }
    document.getElementById("quiz-content").innerHTML = quizContent;
}