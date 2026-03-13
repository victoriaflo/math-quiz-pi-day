const questions = [
    {
        question: "Qui est appelé le père de la géométrie ?",
        answers: ["Newton", "Euclide", "Einstein", "Galilée"],
        correct: 1
    },
    {
        question: "Le théorème de Pythagore s’applique à quel triangle ?",
        answers: ["Équilatéral", "Isocèle", "Rectangle", "Scalène"],
        correct: 2
    },
    {
        question: "Le nombre π est utilisé pour calculer :",
        answers: ["Volumes cubes", "Cercles", "Angles", "Racines"],
        correct: 1
    },
    {
        question: "Notre système de numération vient de :",
        answers: ["Grèce", "Rome", "Inde", "Égypte"],
        correct: 2
    },
    {
        question: "Combien font 3² + 4² ?",
        answers: ["12", "25", "7", "49"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

showQuestion();

function showQuestion() {
    nextBtn.style.display = "none";
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", function() {
            selectAnswer(button, index);
        });

        answersEl.appendChild(button);
    });
}

function selectAnswer(button, index) {
    const correctIndex = questions[currentQuestion].correct;
    const buttons = answersEl.querySelectorAll("button");

    // Désactiver tous les boutons
    buttons.forEach(btn => btn.disabled = true);

    if (index === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons[correctIndex].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        localStorage.setItem("finalScore", score);
        window.location.href = "result.html";
    }
});
