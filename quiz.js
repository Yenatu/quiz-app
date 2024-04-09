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
  
  // Remaining code for the quiz app remains the same
  
  
  let currentQuestion = 0;
  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelector(".options");
  const nextBtn = document.querySelector(".next-btn");
  const messageEl = document.querySelector(".message");
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    optionsEl.innerHTML = "";
    currentQuizData.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", checkAnswer);
      optionsEl.appendChild(button);
    });
  }
  
  function checkAnswer(e) {
    const selectedOption = e.target.textContent;
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
      messageEl.textContent = "Correct answer!";
      messageEl.style.color = "green";
    } else {
      messageEl.textContent = "Wrong answer! Try again.";
      messageEl.style.color = "red";
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      messageEl.textContent = ""; // Clear the message
      messageEl.style.color = ""; // Reset the message color
    } else {
      alert("Quiz completed!");
    }
  }
  
  nextBtn.addEventListener("click", nextQuestion);
  loadQuestion();
  