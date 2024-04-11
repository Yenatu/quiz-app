const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Logic"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does JS stand for?",
    options: ["JavaScript", "JavaSuper", "JustScript", "JrScript"],
    answer: "JavaScript"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["color", "background-color", "font-size", "text-align"],
    answer: "color"
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    options: ["<script href='script.js'>", "<script src='script.js'>", "<script ref='script.js'>", "<script name='script.js'>"],
    answer: "<script src='script.js'>"
  },
  {
    question: "Which event is triggered when a user clicks on an HTML element?",
    options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
    answer: "onclick"
  },
  {
    question: "What does the 'C' in CSS stand for?",
    options: ["Cascading", "Cascading Style", "Cascading Sheet", "Cascading Styling"],
    answer: "Cascading"
  },
  {
    question: "Which symbol is used to denote an ID selector in CSS?",
    options: ["#", ".", "$", "@"],
    answer: "#"
  },
  {
    question: "What is the result of the expression '3 + 2 + '7' in JavaScript?",
    options: ["12", "327", "57", "SyntaxError"],
    answer: "57"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
  const currentQuestion = quizData[questionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => {
          checkAnswer(option, currentQuestion.answer);
      });
      optionsElement.appendChild(optionButton);
  });
}

function checkAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
      score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
      showQuestion(currentQuestionIndex);
  } else {
      showResult();
  }
}
function showResult() {
  resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}
showQuestion(currentQuestionIndex);
