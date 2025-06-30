
let correct;

fetch('http://localhost:5000/emojis').then(res => res.json()).then(data => renderGame(data)).then(() => document.getElementsByTagName('form')[0].addEventListener('submit', handleForm)).catch(err => console.log(err));



function renderGame({emoji, options}) {
    correct = emoji.name;
    const html = options.map(item => `<label><input type="radio" value=${item} name="guess"/>${item}</label><br/>`);
    
    document.getElementById('guessing-area').innerHTML = `<h1 id='emoji'>${emoji.emoji}</h1><form>
        ${html.join('')}<input type="submit" value="Place Guess"/>
    </form>`;
}

function handleForm(e) {
    e.preventDefault();
    const answer = document.querySelector('input[name="guess"]:checked');
    if (!answer) {
        return;
    }
    fetch('http://localhost:5000/emojis', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({correct, answer: answer.value})
    }).then(data => data.json()).then(res => updateAnswer(res)).catch(err => console.log(err));
}

function updateAnswer(data) {
    let div = document.getElementById('answer-area');
    if (data.msg === 'Correct') {
        div.innerHTML = `<h1>You Win!</h1><h3>It took you ${data.score} tries</h3><h4>Your best scores: ${data.leaderBoard}</h4><button id='newGameButton'>New Game</button>`;
        document.getElementById('newGameButton').addEventListener('click', startNewGame);
    }else {
        div.innerHTML = `<h1>Nope! Try again`;
    }
}

function startNewGame(e) {
    fetch('http://localhost:5000/new-game').then(res => res.json()).then(data => renderGame(data)).then(() => document.getElementsByTagName('form')[0].addEventListener('submit', handleForm)).then(e => document.getElementById('answer-area').innerHTML = '').catch(err => console.log(err));
}