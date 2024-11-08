export default class GameModel {
    constructor(){
        this.board = new Array(9).fill("")
        this.currentPlayer = "X"
        this.isGameActive = true
        this.winCombinations = [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    checkWinner(){
        for (const [x, y, z] of this.winCombinations){
            if(this.board[x] && this.board[x] == this.board[y] && this.board[y] == this.board[z]){
                this.isGameActive = false
                return [x, y, z]
            }
        }
        
        if(!this.board.includes("")) {
            this.isGameActive = false
            return "draw"
        }

        return null
    }

    switchPlayer(){
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"
    }

    restartGame(){
        this.board = new Array(9).fill("")
        this.currentPlayer = "X"
        this.isGameActive = true
    }

    makeMove(index){
        if(this.isGameActive && this.board[index] === ""){
            this.board[index] = this.currentPlayer
            return true
        }
        return false
    }
}