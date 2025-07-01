import express from 'express';

export const router = express.Router();
router.use(express.json());

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];

let currentQuestion = 0;
let questionsRight = 0;


router.get('/quiz', (req, res) => {
    currentQuestion = 0;
    questionsRight = 0;
    res.status(200).json({ question: triviaQuestions[0].question });
});


router.post('/quiz', (req, res) => {
    let answer = req.body.answer;
    let correct;
    if (!answer) {
        res.status(400).json({ msg: 'You must include an answer in your response' });
        return;
    }
    try {
        if (answer === triviaQuestions[currentQuestion].answer) {
            questionsRight++;
            correct = true;
        } else {
            correct = false;
        }
    } catch (err) {
        res.status(400).json({ msg: 'You already finished. go to get request to restart' })
        return;
    }


    currentQuestion++;
    if (currentQuestion === triviaQuestions.length) {
        res.status(201).json({ correct, next: 'You finished!!!' })
    } else {
        res.status(201).json({ correct, next: triviaQuestions[currentQuestion].question });
    }

})


router.get('/quiz/score', (req, res) => {
    if(currentQuestion < triviaQuestions.length) {
        res.status(401).json({msg: 'Game is still in progress'});
        return;
    }
    res.status(200).json({score: `${questionsRight} right out of ${triviaQuestions.length}`})
})