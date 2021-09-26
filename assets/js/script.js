/* Psuedo Code Steps

1. Create global variables that link to html
2. Create arrays for Questions, Answers & Correct answers  
3. Creating and setting number values for my times variables
4. Start game function
5. Reset game function
6. End game function
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
