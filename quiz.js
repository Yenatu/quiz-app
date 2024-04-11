const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
  },
  // Add more questions here
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
