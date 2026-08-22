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

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("questions");
const optionEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = option;
    btn.addEventListener("click", () => selectAnswer(index));
    optionEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}
function selectAnswer(index) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));
  if (index === q.correct) {
    buttons[index].classList.add("correct");
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult(){
    
}

loadQuestion();
