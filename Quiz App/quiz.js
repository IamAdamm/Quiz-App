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

let score = 0;
let currentQuestionIndex = 0;

