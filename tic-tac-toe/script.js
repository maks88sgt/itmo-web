let board = new Array(9).fill("")
let currentPlayer = "X"
let isGameActive = true
const statusText = document.querySelector("#status")
const cells = document.querySelectorAll(".cell")

const winCombinations = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWinner(){
    let win = false
    for (const [x, y, z] of winCombinations){
        if(board[x] && board[x] == board[y] && board[y] == board[z]){
            win = true
            cells[x].classList.add("win")
            cells[y].classList.add("win")
            cells[z].classList.add("win")
            break;
        }
    }
    if (win) {
        statusText.textContent = `Победил игрок ${currentPlayer}`
        isGameActive = false
    } else if(!board.includes("")) {
        statusText.textContent = "Ничья!"
        isGameActive = false
    }
}

function handleCellClick(ev){
    const cell = ev.target
    const index = cell.getAttribute("data-index")
    if(isGameActive && board[index] == ""){
        board[index] = currentPlayer
        cell.textContent = currentPlayer
        checkWinner()
        isGameActive && switchPlayer()
        computerMove()
    }
}

function computerMove(){
    currentPlayer = "O"
    const bestMove = minimax(board, currentPlayer)
    board[bestMove.index] = currentPlayer
    cells[bestMove.index].textContent = currentPlayer
    console.log(bestMove)
    checkWinner()
    isGameActive && switchPlayer()

    // const availableCells = []
    // board.forEach((item, index)=>{
    //     if(!item){
    //         availableCells.push(index)
    //     }
    // })
    // if (availableCells.length && isGameActive){
    //     const randomIndex = Math.floor(Math.random() * availableCells.length)
    //     const i = availableCells[randomIndex]
    //     board[i] = currentPlayer
    //     cells[i].textContent = currentPlayer
    //     checkWinner()
    //     isGameActive && switchPlayer()
    // }
}


function switchPlayer(){
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    statusText.textContent = `Ходит игрок: ${currentPlayer}`
}

cells.forEach(cell=>cell.addEventListener("click", handleCellClick))

function restartGame(){
    board = new Array(9).fill("")
    currentPlayer = "X"
    isGameActive = true
    statusText.textContent = `Ходит игрок: ${currentPlayer}`
    cells.forEach(cell=>{
        cell.classList.remove("win")
        cell.textContent = ""
    })
}

const restartButton = document.querySelector("#restartButton")

restartButton.addEventListener("click", restartGame)

function minimax(newBoard, player) {
    const availableSpots = newBoard.reduce((acc, val, idx) => (val === '' ? acc.concat(idx) : acc), []);

    if (checkWin(newBoard, 'X')) return { score: -10 };
    if (checkWin(newBoard, 'O')) return { score: 10 };
    if (availableSpots.length === 0) return { score: 0 };

    const moves = [];
    for (let i = 0; i < availableSpots.length; i++) {
        const index = availableSpots[i];
        const move = { index };

        newBoard[index] = player;

        if (player === 'O') {
            const result = minimax(newBoard, 'X');
            move.score = result.score;
        } else {
            const result = minimax(newBoard, 'O');
            move.score = result.score;
        }

        newBoard[index] = '';
        moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = moves[i];
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = moves[i];
            }
        }
    }

    return bestMove;
}

function checkWin(board, player){
    for (const [x, y, z] of winCombinations){
        if(board[x] == player && board[x] == board[y] && board[y] == board[z]){
            return true
        }
    } 
    return false
}