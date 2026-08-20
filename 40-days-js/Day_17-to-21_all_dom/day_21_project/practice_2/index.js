const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management",
    ],
    correct: 1,
  },
  {
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementsByClassName()",
    ],
    correct: 0,
  },
  {
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");
const optionEL = document.getElementById("option");
const btnEl = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

let questions = [...quizData].sort(() => Math.random - 0.5);
let currentQuestion = 0;
function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Q ${currentQuestion + 1}: ${q.question}`;
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    optionEL.appendChild(btn);
  });
}

loadQuestion();
