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
let score = 0;
let timer;
let timeLeft;

const questioNEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timer = setInterval(countdown, 1000);
  updateTimer();
  const q = questions[currentQuestion];
  questioNEl.textContent = `Q ${currentQuestion + 1}. ${q.question}`;
  optionEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectAnswer(index, true));
    optionEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectAnswer(index, shouldScore) {
  clearInterval(timer);
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  if (index === q.correct) {
    shouldScore && score++;
    buttons[index].classList.add("correct");
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }
  nextBtn.style.display = "inline-block";
}
function countdown() {
  timeLeft--;
  updateTimer();
  if (timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct, false);
  }
}

function updateTimer() {
  timerEl.textContent = `⏱️ ${timeLeft}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});
function showResult() {
  nextBtn.style.display = "none";
  const highScore = localStorage.getItem("quizHighScore") || 0;
  const isNew = score > highScore;
  if (isNew) {
    localStorage.setItem("quizHighScore", score);
  }
  resultEl.innerHTML = `
    <h2>Hurray !!! Quiz Completed</h2>
    <p>You have scored ${score} out of ${questions.length} questions</p>
    <p>Highest Score: ${Math.max(score, highScore)}</p>
    ${isNew ? "<p>Hey New High score !</p>" : ""}
    <button onclick='location.reload()'>Restart</button>
    `;
}
loadQuestion();
