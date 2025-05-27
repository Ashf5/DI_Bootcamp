
// A class that represents the players and the positions they have on the board.
class Player {
    constructor(player) {
        this.player = player;
        this.positions = [];
    }
}

// function returns which player who's turn it is.
function whoTurn() {
    if (moveCount % 2 === 0) {
        return o;
    } else {
        return x;
    }
}

// updates the table when a cell is pressed. Calls check winner function
function updateTable(e) {
    let turn = whoTurn();
    if (e.target.innerText === '') {
        e.target.innerText = turn.player;
        turn.positions.push(Number(e.target.id[e.target.id.length - 1]));
        checkWinner(turn);

        // update move count to know who's turn it is.
        moveCount++;
        playerTurn.innerText = `Player ${turn.player}'s Turn`
    }
    // remove from the available options
    available = available.filter(num1 => num1 !== turn.positions[turn.positions.length - 1]);
    
    // For now just the simple version
    if (true && available.length > 0) {
        makeRandomMove();
    }
}

// function deals with the board if there is a winner
function dealWinner(winner = 'tie', index='tie') {
    if (winner !== 'tie') {
        table.style.background = 'green';
        table.removeEventListener('click', updateTable);
        for(i of winCombos[index]) {
            data[i].style.background='red';
            
        }
    } else {
        table.style.background = 'green';
        table.removeEventListener('click', updateTable);
        
    }
   
}

// checks if there is a winner and returns which player won or blank if tie.
function checkWinner(turn) {
    let i = 0
    let contains = winCombos.some((item, index) => {
        let hasAll = item.every(item2 => turn.positions.includes(item2));
        i = index;
        return hasAll;
    });
    
    if (contains) {
        dealWinner(turn, index=i);
    }else if (Array.from(data).every(item => !(item.innerText === ''))) {
        dealWinner(index=i);
    }

}


function makeRandomMove() {
    let num =  Math.floor(Math.random() * available.length);
    // get the cell 
    let cell = Array.from(data).filter(item => item.id.endsWith(available[num]))[0];
    cell.innerText = whoTurn().player;

    moveCount ++;
    playerTurn.innerText = `Player ${whoTurn().player}'s Turn`;
    // remove from the available options
    available = available.filter(num1 => num1 !== available[num]);
    
}


let moveCount = 0;
let x = new Player('X');
let o = new Player('O');

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let available = [0,1,2,3,4,5,6,7,8];

let table = document.querySelector('table');
let data = document.getElementsByTagName('td');
let playerTurn = document.getElementById('player-turn');


table.addEventListener('click', updateTable);


