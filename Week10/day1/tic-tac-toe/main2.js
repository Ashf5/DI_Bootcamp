
// get levels and what they're playing as
let levelExpert;
let opponent;

document.querySelectorAll('#choice button').forEach(item => item.addEventListener('click', playerChoice))

document.querySelectorAll('.levelChoice').forEach(item => item.addEventListener('click', levelChoice));

function playerChoice(e) {
    opponent = e.target.innerText;
    document.getElementById('choice').style.display = 'none';

    if (levelExpert !== undefined) {
        board.style.display = 'unset';
        playerTurn.innerText = `Player ${opponent}'s Turn`;
    }
}

function levelChoice(e) {
    if (e.target.innerText === 'Expert Level') {
        levelExpert = true;
    } else {
        levelExpert = false;
    }
    document.getElementById('levels').style.display = 'none';
    if (opponent !== undefined) {
        board.style.display = 'unset';
        playerTurn.innerText = `Player ${opponent}'s Turn`;
    }


}

let board = document.getElementsByClassName('board')[0];
let table = document.querySelector('table');
let data = document.getElementsByTagName('td');
let playerTurn = document.getElementById('player-turn');


table.addEventListener('click', updateTable);


// functions deal with table 

// update the table on click
function updateTable(e) {
    let nums = convertId(e.target.id);

    let open = options(boardInternal).some(arr => {
        let all = arr.every((element, index) => nums[index] == element
        )
        return all
    });
    if (open == true) {
        let player = getPlayer(boardInternal);
        e.target.innerText = player;
        boardInternal[nums[0]][nums[1]] = player;

        // Call the computer generated move
        if (levelExpert) {
            minimax(boardInternal);
        } else {
            makeRandomMove();
        }
    }


}

// function to deal with winner 

function dealWinner(coordinates) {
    table.style.background = 'green';
    table.removeEventListener('click', updateTable);
    if (coordinates !== 'tie') {
        for (element of coordinates) {
            let id = convertId(element, reverse = true);
            document.getElementById(`${id}`).style.background = 'red';
        }
    }
}


// takes an index and converts into indexes for nested array.
function convertId(num, reverse = false) {
    if (reverse === true) {
        let total = num[0] * 3;
        total += num[1];
        return total;
    }
    return [Math.floor(num / 3), num % 3]
}



// Deal with the lower level random moves
function makeRandomMove() {
    let turn = getPlayer(boardInternal);
    let open = options(boardInternal);

    let num = Math.floor(Math.random() * open.length);

    // get the cell and if tie call deal winner.
    try {
        let cell = convertId(open[num], reverse = true);
        document.getElementById(cell).innerText = turn;
        boardInternal[open[num][0]][open[num][1]] = turn;
    } catch (err) {
        dealWinner('tie');
    }



    // check winner 
    let winner = isFinal(boardInternal);
    if (winner !== null) {
        dealWinner(winner);

    }


    playerTurn.innerText = `Player ${opponent}'s Turn`;

}





// minimax functions and stuff
function makeMiniMove(cellArray) {
    let turn = getPlayer(boardInternal);
    // check if tie.
    try {
        let cell = convertId(cellArray, reverse = true);

        document.getElementById(`${cell}`).innerText = turn;
        boardInternal[cellArray[0]][cellArray[1]] = turn;
    } catch (err) {
        dealWinner('tie');
    }


    let winner = isFinal(boardInternal);
    if (winner !== null) {
        dealWinner(winner);

    }

    playerTurn.innerText = `Player ${opponent}'s Turn`;

}

function minimax(board) {
    let player = opponent === 'X' ? 'O' : 'X';
    playerTurn.innerText = `Player ${player}'s Turn`;
    // Get all moves 
    let possible = options(board);

    let best;
    if (player === 'O') {
        best = [-1, -1000];
        for (move in possible) {
            let util = min(createState(board, possible[move]));

            if (util === 1) {
                makeMiniMove(possible[move]);
                return
            } else if (util > best[1]) {
                best[0] = move;
                best[1] = util;
            }
        }

    } else {
        best = [-1, 1000];
        for (move in possible) {
            let util = max(createState(board, possible[move]));
            if (util === -1) {
                makeMiniMove(possible[move]);
                return
            } else if (util < best[1]) {
                best[0] = move;
                best[1] = util;
            }
        }

    }

    // get the best option 

    makeMiniMove(possible[best[0]])
}

function min(board) {
    let boardCopy = structuredClone(board)
    let util = utility(boardCopy);


    if (util !== null) {
        return util;
    }

    let minimum = Infinity;
    // get all options 
    let availableMoves = options(boardCopy);
    for (let move of availableMoves) {
        let utilNew = max(createState(boardCopy, move))
        if (utilNew < minimum) {
            minimum = utilNew;
        }
    }
    return minimum




}

function max(board) {
    let boardCopy = structuredClone(board)


    let util = utility(boardCopy);

    if (util !== null) {
        return util;
    }

    let maximum = -Infinity;
    // get all options 
    let availableMoves = options(boardCopy);
    for (let move of availableMoves) {
        let utilNew = min(createState(boardCopy, move))
        if (utilNew > maximum) {
            maximum = utilNew;
        }
    }
    return maximum;

}

// function to create how board would look
function createState(board, index) {
    // make sure it's a valid move
    let boardCopy = structuredClone(board);
    if (boardCopy[index[0]][index[1]] !== '') {
        return null;
    } else {
        boardCopy[index[0]][index[1]] = getPlayer(board);
        return boardCopy
    }
}

// Takes in a board and returns who's turn it is
function getPlayer(board) {
    // See how many squares are blank
    let count = 0;
    for (let row of board) {
        row.forEach(item => item !== '' ? count++ : null);
    }
    if (count % 2 === 0) {
        return opponent;
    } else {
        return opponent === 'X' ? 'O' : 'X'
    }
}

function isFinal(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] == board[i][2]) {
            return [[i, 0], [i, 1], [i, 2]];
        } else if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] == board[2][i]) {
            return [[0, i], [1, i], [2, i]];
        }
    }
    // Check diagnols
    if (board[0][0] !== '' && board[0][0] === board[1][1] & board[1][1] === board[2][2]) {
        return [[0, 0], [1, 1], [2, 2]]
    } else if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return [[0, 2], [1, 1], [2, 0]];
    }
    // check if tie
    if (!(board.some(item => item.includes('')))) {
        return 'tie';
    }
    return null;
}

// takes a final board and returns the utility
function utility(board) {
    // let player = getPlayer(board);
    let player = opponent === 'X' ? 'O' : 'X';
    let score = isFinal(board);
    if (score === null) {
        return null;
    } else if (score === 'tie') {
        return 0;
    } else if (board[score[0][0]][score[0][1]] === 'O') {
        return 1;
    } else {
        return -1;
    }
}

// returns all options
function options(board) {
    let available = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                available.push([i, j]);
            }
        }
    }
    return available;
}

// Internal representation 
let boardInternal =
    [['', '', ''],
    ['', '', ''],
    ['', '', '']];
