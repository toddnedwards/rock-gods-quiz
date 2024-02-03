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

startButton.addEventListener('click', startQuiz, console.log("start button pressed"));

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
};

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

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
        console.log("score is", score);
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (currentQuestionIndex < 9) {
        nextButton.classList.remove('hide');
        answerButtonsElement.classList.remove('answer-btn');
    } else {
        resultsButton.classList.remove('hide');
    }
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
};

/* Results Section */

resultsButton.addEventListener('click', () => {
    resultsButton.classList.add('hide');
    questionContainerElement.classList.add('hide');
    resultsContainer.classList.remove('hide');
    resultsContainer.classList.remove('hide');
    showResults();
});

function showResults() {
    scoreNumber.innerText = score;
    restartButton.classList.remove('hide');
    if (score > 8) {
        scoreText.innerText = 'You are a rock god!';
    }
    else if (score > 6) {
        scoreText.innerText = 'You know your rock!';
    }
    else if (score > 4) {
        scoreText.innerText = "You're on your way to rock stardom!";
    }
    else if (score > 2) {
        scoreText.innerText = "You've got some practicing to do!";
    }
    else if (score > 0) {
        scoreText.innerText = 'Just put the guitar down';
    }
    else {
        scoreText.innerText = 'Please try again';
    }
};

/* Restart Game */

restartButton.addEventListener('click', () => {
    resultsContainer.classList.add('hide');
    score = 0;
    startQuiz();
});

/* Questions array */

const questions =
    [
        {
            question: '"Who is the lead vocalist of the band “Led Zeppelin”?"',
            answers: [
                { option: "a. Robert Plant", correct: true },
                { option: "b. Jimmy Page", correct: false },
                { option: "c. John Bonham", correct: false },
                { option: "d. Roger Daltrey", correct: false },
            ]
        },
        {
            question: 'Which band released the album “Dark Side of the Moon”?',
            answers: [
                { option: "a. The Beatles", correct: false },
                { option: "b. The Rolling Stones", correct: false },
                { option: "c. Pink Floyd", correct: true },
                { option: "d. Queen", correct: false },
            ]
        },
        {
            question: '“Bohemian Rhapsody” is a song by which band?',
            answers: [
                { option: "a. The Who", correct: false },
                { option: "b. Queen", correct: true },
                { option: "c. Aerosmith", correct: false },
                { option: "d. The Eagles", correct: false },
            ]
        },
        {
            question: 'Who is known as the "Godfather of Grunge"?',
            answers: [
                { option: "a. Kurt Cobain", correct: false },
                { option: "b. Eddie Vedder", correct: false },
                { option: "c. Neil Young", correct: true },
                { option: "d. Chris Cornell", correct: false },
            ]
        },
        {
            question: 'Which band was originally known as "Polaris"?',
            answers: [
                { option: "a. Nirvana", correct: false },
                { option: "b. Pearl Jam", correct: false },
                { option: "c. Radiohead", correct: true },
                { option: "d. Metallica", correct: false },
            ]
        },
        {
            question: 'Who played the drums for The Beatles?',
            answers: [
                { option: "a. John Lennon", correct: false },
                { option: "b. Paul McCartney", correct: false },
                { option: "c. George Harrison", correct: false },
                { option: "d. Ringo Starr", correct: true },
            ]
        },
        {
            question: 'Which band sang the song "Hotel California"?',
            answers: [
                { option: "a. The Eagles", correct: true },
                { option: "b. Fleetwood Mac", correct: false },
                { option: "c. Lynyrd Skynyrd", correct: false },
                { option: "d. The Doors", correct: false },
            ]
        },
        {
            question: 'Who is the lead singer of U2?',
            answers: [
                { option: "a. Bono", correct: true },
                { option: "b. The Edge", correct: false },
                { option: "c. Larry Mullen Jr.", correct: false },
                { option: "d. Adam Clayton", correct: false },
            ]
        },
        {
            question: 'Which band released the album "Nevermind"?',
            answers: [
                { option: "a. Nirvana", correct: true },
                { option: "b. Soundgarden", correct: false },
                { option: "c. Alice In Chains", correct: false },
                { option: "d. Stone Temple Pilots", correct: false },
            ]
        },
        {
            question: 'Who was the original lead singer of AC/DC?',
            answers: [
                { option: "a. Brian Johnson", correct: false },
                { option: "b. Bon Scott", correct: true },
                { option: "c. Angus Young", correct: false },
                { option: "d. Malcolm Young", correct: false },
            ]
        },
        {
            question: 'Who is the lead vocalist of the band "Guns N\' Roses"?',
            answers: [
                { option: "a. Slash", correct: false },
                { option: "b. Axl Rose", correct: true },
                { option: "c. Izzy Stradlin", correct: false },
                { option: "d. Duff McKagan", correct: false },
            ]
        },
        {
            question: 'Which band released the album "Appetite for Destruction"?',
            answers: [
                { option: "a. Metallica", correct: false },
                { option: "b. Guns N' Roses", correct: true },
                { option: "c. AC/DC", correct: false },
                { option: "d. Aerosmith", correct: false },
            ]
        },
        {
            question: '"Sweet Child o\' Mine" is a song by which band?',
            answers: [
                { option: "a. Aerosmith", correct: false },
                { option: "b. Guns N' Roses", correct: true },
                { option: "c. Metallica", correct: false },
                { option: "d. AC/DC", correct: false },
            ]
        },
        {
            question: 'Who is known as the "Prince of Darkness" in rock music?',
            answers: [
                { option: "a. Ozzy Osbourne", correct: true },
                { option: "b. Alice Cooper", correct: false },
                { option: "c. Rob Zombie", correct: false },
                { option: "d. Marilyn Manson", correct: false },
            ]
        },
        {
            question: 'Which band was originally known as "Mookie Blaylock"?',
            answers: [
                { option: "a. Nirvana", correct: false },
                { option: "b. Pearl Jam", correct: true },
                { option: "c. Soundgarden", correct: false },
                { option: "d. Alice In Chains", correct: false },
            ]
        },
        {
            question: 'Who played the bass for Red Hot Chili Peppers?',
            answers: [
                { option: "a. Anthony Kiedis", correct: false },
                { option: "b. Flea", correct: true },
                { option: "c. John Frusciante", correct: false },
                { option: "d. Chad Smith", correct: false },
            ]
        },
        {
            question: 'Which band sang the song "Under the Bridge"?',
            answers: [
                { option: "a. Red Hot Chili Peppers", correct: true },
                { option: "b. Nirvana", correct: false },
                { option: "c. Pearl Jam", correct: false },
                { option: "d. Soundgarden", correct: false },
            ]
        },
        {
            question: 'Who is the lead singer of Pearl Jam?',
            answers: [
                { option: "a. Eddie Vedder", correct: true },
                { option: "b. Kurt Cobain", correct: false },
                { option: "c. Chris Cornell", correct: false },
                { option: "d. Layne Staley", correct: false },
            ]
        },
        {
            question: 'Which band released the album "Ten"?',
            answers: [
                { option: "a. Nirvana", correct: false },
                { option: "b. Soundgarden", correct: false },
                { option: "c. Alice In Chains", correct: false },
                { option: "d. Pearl Jam", correct: true },
            ]
        },
        {
            question: 'Who was the original lead singer of Black Sabbath?',
            answers: [
                { option: "a. Ronnie James Dio", correct: false },
                { option: "b. Ozzy Osbourne", correct: true },
                { option: "c. Tony Iommi", correct: false },
                { option: "d. Geezer Butler", correct: false },]
        }];