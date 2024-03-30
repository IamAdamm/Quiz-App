const questions = [
    {
        question: 'Which is the largest animal?',
        answers: [
            { text: 'Shark', correct: false },
            { text: 'dog', correct: false },
            { text: 'whale', correct: true },
            { text: 'cat', correct: false },
        ]
    },
    {
        question: 'Which is the largest animal?',
        answers: [
            { text: 'Shark', correct: false },
            { text: 'dog', correct: false },
            { text: 'whale', correct: true },
            { text: 'cat', correct: false },
        ]
    }
];
const next = document.getElementsByClassName('next')
const buttons = document.getElementsByClassName('buttons')
const questionbtns = document.getElementsByClassName('questions')
let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion()
}

function showQuestion() {
    resetState();
    let currentQuestion = questionbtns[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + '. ' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button)
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        
    });
}

function resetState(){
    nextButton.style.display = 'none'
    while(answerButtons.firstchild) {
        answerButtons.removeChild(answerButtons.firstchild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add('correct')
    } else {
        selectedBtn.classList.add('incorrect')
    }
}
startQuiz()
