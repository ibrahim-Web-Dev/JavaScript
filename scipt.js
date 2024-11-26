function Player(name,mark) {
    return {
        name,mark
    }
}
function GameBoard(){
    const boardSize = 9; // This will create a 3x3 board

    const board = new Array(boardSize).fill(""); // Create an array of length 9, filled with empty strings
    function isPositionAvailable(position) {
        return board[position]=="" ;
    }
    function setPosition(position,Mark) {
        return board[position]=Mark ;
    }
    function resetButton() {
        for (let i = 0; i<boardSize;i++){
            board[i]=""
        }
    }
    const printBoard = () => {
        console.log(board.slice(0, 3).join(" | "));
        console.log("---------");
        console.log(board.slice(3, 6).join(" | "));
        console.log("---------");
        console.log(board.slice(6, 9).join(" | "));
        console.log("\n")
    };
    function isGameFinished(){
        if ((board[0]=="X"&&board[1]=="X"&&board[2]=="X")||
            (board[3]=="X"&&board[4]=="X"&&board[5]=="X")||
            (board[6]=="X"&&board[7]=="X"&&board[8]=="X")||
            (board[0]=="X"&&board[3]=="X"&&board[6]=="X")||
            (board[1]=="X"&&board[4]=="X"&&board[7]=="X")||
            (board[2]=="X"&&board[5]=="X"&&board[8]=="X")||
            (board[0]=="X"&&board[4]=="X"&&board[8]=="X")||
            (board[2]=="X"&&board[4]=="X"&&board[6]=="X")) 
        {
            return "X"
        }
        else if ((board[0]=="X"&&board[1]=="X"&&board[2]=="X")||
        (board[3]=="O"&&board[4]=="O"&&board[5]=="O")||
        (board[6]=="O"&&board[7]=="O"&&board[8]=="O")||
        (board[0]=="O"&&board[3]=="O"&&board[6]=="O")||
        (board[1]=="O"&&board[4]=="O"&&board[7]=="O")||
        (board[2]=="O"&&board[5]=="O"&&board[8]=="O")||
        (board[0]=="O"&&board[4]=="O"&&board[8]=="O")||
        (board[2]=="O"&&board[4]=="O"&&board[6]=="O"))  
        {
            return "O"
        }
        else {
            return false
        }
    }
    return {
        board,isPositionAvailable,resetButton,setPosition,printBoard,isGameFinished
    }
}
function Game(){
    let Player1=Player("ibrahim" ,"X")
    let Player2=Player("Yılmaz" ,"O")
    let GameB = GameBoard()
    let round=1;
    let mark = "X"
    const boxes = document.querySelectorAll(".box") 

    boxes.forEach((box, index) => {
    box.addEventListener("mouseover", () => {
        if (GameB.isPositionAvailable(index)) {
            box.textContent = getMark();
            box.style.opacity="0.3"
        }
    });


        box.addEventListener("mouseout", () => {
            if (GameB.isPositionAvailable(index)) {
                box.textContent = "";
                box.style.opacity="1.0"
            }
        });

        box.addEventListener("click", () => {
            if (GameB.isPositionAvailable(index)) {
                box.textContent = getMark();
                playRound(index);
                box.style.opacity="1.0"
            }
        });
    });

    function getMark(){
        return mark
    }
    function playRound(position) {
        if(!GameB.isGameFinished()){
            mark = round%2==0 ? Player2.mark : Player1.mark 
            GameB.setPosition(position,mark)
            GameB.printBoard();
            if (GameB.isGameFinished()){
                console.log("game finished")
            }
            
            round++
            mark = round%2==0 ? Player2.mark : Player1.mark 
        }
        console.log(mark)
    }
    return {playRound,getMark}
}
let game1 = Game();