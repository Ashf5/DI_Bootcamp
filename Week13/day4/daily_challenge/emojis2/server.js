

import express from 'express';
import {emojis} from './models/emojis.js';

const app = express();

app.listen(5000, () => console.log('listening on 5000'));
app.use(express.json());
app.use(express.static('public'));


let leaderBoard = [];


function getRandomNumberEmoji() {
    return Math.floor(Math.random() * emojis.length); 
}

function makeRandomArray(emoji) {
    let emojiArray = [];
    let randomNum = Math.floor(Math.random() * 4);
    for( let i=0; i<4; i++) {
        if (i === randomNum) {
            emojiArray.push(emoji.name);
            continue;
        }
        let tempEmoji = emojis[getRandomNumberEmoji()].name;
        emojiArray.push(tempEmoji);
    }
    return {'emoji': emoji, 'options': emojiArray};
}

function updateLeaderBoard(tries) {
    if (leaderBoard.length < 3) {
        leaderBoard.push(tries);
        
    }else {
        if (Math.max(...leaderBoard) > tries) {
            let max = Math.max(...leaderBoard);
            let index = leaderBoard.indexOf(max);
            leaderBoard[index] = tries;
        }
    }
}



app.get('/emojis', (req, res) => {
    let emoji = emojis[getRandomNumberEmoji()];
    
    res.json(makeRandomArray(emoji));
})

// todo make post request
let tries = 1;
app.post('/emojis', (req, res) => {
    let params = req.body;
    if (params.answer === params.correct) {
        updateLeaderBoard(tries);
        res.json({msg: 'Correct', score: tries, leaderBoard});
    }else {
        tries ++;
        res.json({msg: 'Incorrect', score: tries -1});
    }
})

app.get('/new-game', (req, res) => {
    tries = 1;
    let emoji = emojis[getRandomNumberEmoji()];
    
    res.json(makeRandomArray(emoji));
})