//Module
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board}
})();

//Factory Function: Creates player and allows them to make moves
const player = (name, symbol) => {
    //name = form.value
    return {name,symbol}
}

const player1 = player('player1', 'X');
const player2 = player('player2', 'O');


//Loop through every item  in board[] and push array value to corrosponding dom square
function renderMoves() {
    const board = gameBoard.board;

    for (let i=0; i<board.length; i++){
        const targetBox = document.getElementById(`${i}`);
        targetBox.textContent = board[i]; 
    }
}

//Module: when box is clicked, pushes players marker to the array index corrosponding to the box, and renders page to show marker in box. 
const playGame = (() =>{
    const spots = Array.from(document.getElementsByClassName('box'));
    const board = gameBoard.board;
    const winner = document.getElementById('winner');

    function checkWinner() {
        if (board[0] === board[1] && board[1] === board[2]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[3] === board[4] && board[4] === board[5]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[6] === board[7] && board[7] === board[8]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[0] === board[3] && board[3] === board[6]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[1] === board[4] && board[4] === board[7]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[2] === board[5] && board[5] === board[8]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[0] === board[4] && board[4] === board[8]) {winner.textContent= `${winningPlayer} Wins!`};
        if (board[2] === board[4] && board[4] === board[6]) {winner.textContent= `${winningPlayer} Wins!`};
    }

    //when spot it clicked push player's marker to the corrospsong box position in the array 
    let symbol = ''; 
    let winningPlayer = '';
    const markSpot = (e) => {
        const targetArrayIndex = board[`${e.target.id}`] ; //sets the board square to the corrosponding array index
        if (symbol === '') {
            symbol = player1.symbol;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};
        }else if (symbol === player1.symbol) {
            symbol = player2.symbol;
            winningPlayer = player2.name;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};
        }else if (symbol === player2.symbol) {
            symbol = player1.symbol;
            winningPlayer = player1.name;
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};
        }
        renderMoves();
        checkWinner();
    }
    spots.forEach((box) => box.addEventListener('click', markSpot))
    return {markSpot}  
})();



