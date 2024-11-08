export default class GameController{
    constructor(model, view){
        this.model = model
        this.view = view
        this.view.cells.forEach((cell, index)=>cell.addEventListener("click", ()=>this.handleCellClick(index)))
        this.view.restartButton.addEventListener("click", ()=>this.handleRestart())
    }

    handleCellClick(index){
        if(this.model.makeMove(index)){
            this.view.updateBoard(this.model.board)
            const result = this.model.checkWinner()
            if (result === "draw"){
                this.view.setStatus("Ничья!")
            } else if(result){
                this.view.highlightCells(result)
                this.view.setStatus(`Победил игрок ${this.model.currentPlayer}`)
            } else {
                this.model.switchPlayer()
                this.view.setStatus(`Ход игрока ${this.model.currentPlayer}`)
            }
        }
    }

    handleRestart(){
        this.view.reset()
        this.model.restartGame()
    }

}