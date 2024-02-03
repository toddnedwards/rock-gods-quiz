const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers');
const instructionsElement = document.getElementById('instructions');
const scoreNumber = document.getElementById('score-number');
const scoreText = document.getElementById('score-text');
const resultsButton = document.getElementById('results-btn');
const resultsContainer = document.getElementById('results-container');

let score = 0;
let shuffledQuestions;
let currentQuestionIndex;

/* Event listeners */

startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

/* functions */

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    instructionsElement.classList.add('hide');
    setNextQuestion();
}:

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    const currentQuestionNumber = document.getElementById('question-number');
    currentQuestionNumber.innerText = currentQuestionIndex + 1;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.option;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
};

function showQuestion(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
        console.log("score is", score);
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        resultsButton.classList.remove('hide');
    }
};

