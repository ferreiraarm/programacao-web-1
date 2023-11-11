const questions = [
    {
      question: "Quanto é 4  + 2?",
      answers: [
        { option: "6", correct: true },
        { option: "2", correct: false },
        { option: "4", correct: false },
      ],
    },
    {
      question: "Quanto é 2 x 2?",
      answers: [
        { option: "9", correct: false },
        { option: "4", correct: true },
        { option: "11", correct: false },
      ],
    },
    {
      question: "Quanto é 10 x 80?",
      answers: [
        { option: "800", correct: true },
        { option: "90", correct: false },
        { option: "80", correct:  false },
      ],
    },
    {
      question: "Quanto é 7 x 7?",
      answers: [
        { option: "70", correct: false },
        { option: "56", correct: false },
        { option: "49", correct: true },
      ],
    },
]

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");


let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

console.log(questions);
loadQuestion();