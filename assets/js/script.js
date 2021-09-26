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
10.For loop that iterates through questions

*/

// HTML element selectors
var startButton = document.querySelector(".start-button")
var scoreButton = document.querySelector(".scoreboard")

// Global reusable variables
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

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

// Game start function
function gameStart() {
    timeLeft = 75;
    document.querySelector("time-counter").innerHTML = time-counter;
  
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time-counter").innerHTML = time-counter;
  
        // Run endgame function when timer equals 0
        if (timeLeft <= 0) {
            // clear game func position
            (timer);
            // end game func position; 
        }
    }, 1000);
  
   // question for loop function position;
  }

// Game end function + interval clearing
function gameEnd() {
    clearInterval(timer);

  document.querySelector("quiz-body").innerHTML = quizContent;
}
var quizContent = `
    <h2>Game over!</h2>
    <h3>Your score is` + score +  ` /100!</h3>
    <h3>You got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="First name"> 
    <button onclick="setScore()">Set score!</button>`;
    
    document.getElementById("quiz-context").innerHTML = quizContent;