var startEl = document.querySelector('#start');
var quizEl = document.querySelector('#quiz');
var quizOptionsEl = document.querySelector('#quiz article');
var scoreEl = document.querySelector('#score');
var startBtn = document.querySelector('#startBtn');
var quizH2 = document.querySelector('#quiz h2');
var quizH3 = document.querySelector('#quiz h3');
var mainEl = document.getElementById("main");
var timerEl = document.getElementById('#countdown');

var cursor = 0;
var questions = [
    {
        text: "what is dave grohl's home state?" ,
        possible: [
            "VA",
            "af",
            "fa",
            "ee",
            "ff",
        ],
        correct: 0
    },
    {
        text: "which band did dave grohl tour with first?" , 
        possible: [
            "VA",
            "af",
            "fa",
            "ee",
            "ff",
        ],
        correct: 0
    },
    {
        text: "what is the layman's term for array?",
        possible: [
            "VA",
            "af",
            "fa",
            "ee",
            "ff",
        ],
        correct: 0
    },
] 
var timeleft = 60;

    

function displayElements(state) {
    switch (state) {
        case "START": {
            startEl.style.display = "flex";
            quizEl.style.display = "none";
            scoreEl.style.display = "none";
            break;
        }
        case "QUIZ": {
            startEl.style.display = "none";
            quizEl.style.display = "flex";
            scoreEl.style.display = "none";
            break;
        }
        case "SCORE": {
            startEl.style.display = "none";
            quizEl.style.display = "none";
            scoreEl.style.display = "flex";
            break;
        }
        default: {
            startEl.style.display = "flex";
            quizEl.style.display = "none";
            scoreEl.style.display = "none";
        }
    }
}

    function init() {
        displayElements("START");
    }

    function playQuiz() {
        displayElements("QUIZ");
        renderQuestion();
    }

    function enterScore() {
        displayElements("SCORE");
    }

    function nextQuestion() {
        cursor++;
        renderQuestion();
    }

    function renderQuestion() {
        var currentQuestion = questions [cursor]; 
        if (currentQuestion) {
            quizH3.textContent = currentQuestion.text;
            quizOptionsEl.innerHTML = "";
            for (var i in currentQuestion.possible) {
                var answerEl = document.createElement('div')
                answerEl.textContent = currentQuestion.possible[i];
                answerEl.dataset.index = i;
                quizOptionsEl.appendChild(answerEl);
            }
        } else{
            displayElements("SCORE");
        }
    }

    function pickAnswer(event) {
        var currentQuestion = questions[cursor];
        if (event.target.matches("div")) {
            if (Number(event.target.dataset.index) === currentQuestion.correct) {
                console.log("CORRECT");
            } else {
                console.log("WRONG");
            }
            nextQuestion();
        }
    }


    startBtn.addEventListener("click", playQuiz);
    quizH2.addEventListener("click", enterScore);
    quizEl.addEventListener("click", pickAnswer);
    
    init();