# Code-Quiz
A Javascript Coding Quiz.

## Site GIf


## Technologies Used
- HTML - for base structure
- CSS - stying of html
- Javascript - for logic and functionallity purposes (local storage usage)

## Summary 
This website's functionality will start after the start button is tapped or clicked. The game will start with a running timer, there are 6 questions to answer, all multiple choices, one is correct. When a correct answer is chosen, the timer contoniues to run as normal, but when wrong answer is chosen, user will notice timer to lose seconds. User will lose wither by finishing questions, or by losing time. After game is over, user ca store their name an score in their local storage. This project uses a lot of DOM manipulation of HTML elements. 

## Javascript Code Snippet

### An example of a timer alongside start game function
```javascript
function gameStart() {

    timeLeft = 100;
    timerElement.innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        timerElement.innerHTML = timeLeft;
        // Run endgame function when timer equals 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameEnd() 
        }
    }, 1000);
  
   loop()
  }

```

## Deployed Link

* [See Live Site](https://mehdisafari77.github.io/Code-Quiz//)

## Author Links
[LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
[GitHub](https://github.com/mehdisafari77)

## Acknowledgements
- W3 Schools
