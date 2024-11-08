export default class GameView {
    constructor(containerSelector){
        this.boardElement = document.querySelector(containerSelector)
        this.statusText = document.querySelector("#status")
        this.restartButton = document.querySelector("#restartButton")
        this.cells = []
        this.#createBoard()
    }

    #createBoard(){
        for (let  i = 0; i < 9; i++){
            const cell = document.createElement("div")
            cell.dataset.index = i
            cell.classList.add("cell")
            this.cells.push(cell)
            this.boardElement.appendChild(cell)
        }
    }

    updateBoard(board){
        this.cells.forEach((cell, index)=>{
            cell.textContent = board[index]
        })
    }

    setStatus(message){
        this.statusText.textContent = message
    }

    highlightCells(cells){
        cells.forEach(cell=>this.cells[cell].classList.add("win"))
    }

    reset(){
        this.updateBoard(Array(9).fill(""))
        this.cells.forEach(item=>item.classList.remove("win"))
    }
}