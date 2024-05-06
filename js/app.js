// Helped by many classmates including Will, Alred and Kass


/*-------------------------------- Variables
--------------------------------*/
let board = [``,``,``,``,``,``,``,``,``]
let turn
let winner
let tie

const squarEls = document.querySelectorAll(`.sqr`)
const messageEl = document.getElementById(`message`)
const restart = document.querySelector(`.restart`)


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
    turn = `X`
    winner = false
    tie = false
    render()
}
window.onload = init

function render() {
    updateBoard()
    updateMessage()}

function updateBoard() {
    squarEls.forEach((square, index) => {
       board[index] = square.innerText
    })
}

let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
function updateMessage() {
    if (!winner && !tie) {messageEl.innerText = `It's ${turn}'s turn`}
    else if (!winner && tie) {messageEl.innerText = `It's a Tie!`}
    else (messageEl.innerText = `${turn}, you win!`)
}


function checkWinner() {
    for (let i=0; i< winningCombos.length; i++) {
        let a = winningCombos[i][0]
        let b = winningCombos[i][1]
        let c = winningCombos[i][2]
        if (board[a] != `` && board[a] == board[b] && board[a] == board[c]) {
            return true
        }
    }
    return false
}

function checkForTie() {
    if (winner == true) {return}
    let counter = 0
    board.forEach((index) => {
        if (index == '') {
            return
        } else {
            counter++
        }
    })
    if (counter == 9) {
        tie = true
    }
}

function restartGame(){
    window.location.reload()
  }

restart.addEventListener(`click`, restartGame)

/*----------------------------- Event Listeners -----------------------------*/

squarEls.forEach((square) => {
    square.addEventListener('click', function() {
        if (square.innerText == "X" || square.innerText == "O") {
            return
        } else {
            square.innerText = turn
        }
        let squareIndex = parseInt(square.getAttribute('id'))
        board[squareIndex] = turn
        winner = checkWinner()
        checkForTie()
        updateMessage()
        // switching turns
        if (winner == true) {return}
        else if (winner == false) {
            if (turn == "X") {
            turn = "O"
        } else if (turn == "O" ) {
            turn = "X"
        }
        updateMessage()
    }
    });
});

render()


//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionalit