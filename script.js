//Module
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    return {board}
})();

//shows moves from gameboard[] in their corrosponding box in the browser
function renderMoves() {
    const board = gameBoard.board;

    //Loop through every item  in board[] and push array value to corrosponding dom square
    for (let i=0; i<board.length; i++){
        console.log(board[i]);
        const targetBox = document.getElementById(`${i}`);     console.log(targetBox);
        targetBox.textContent = board[i]; 
    }
    console.log('rendered');
}

//Module: when box is clicked, pushes players marker to the array index corrosponding to the box, and renders page to show marker in box. 
const playGame = (() =>{
    const spots = Array.from(document.getElementsByClassName('box'));
    const board = gameBoard.board;
    let symbol = ''; 
    
    //when spot it clicked push player's marker to the corrospsong box position in the array 
    const markSpot = (e) => {
        const targetArrayIndex = board[`${e.target.id}`] ; console.log(targetArrayIndex); //sets the board square to the corrosponding array index

        if (symbol === '') {
            symbol = 'X';
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};
        }else if (symbol === 'X') {
            symbol = 'O';
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};
        }else if (symbol === 'O') {
            symbol = 'X';
            if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, symbol)};
        }
        renderMoves();
    }
    spots.forEach((box) => box.addEventListener('click', markSpot))
    return {markSpot}  
})();

//Factory Function: Creates player and allows them to make moves
const player = (name) => {
    const {markSpot} = playGame; //gives players the ability to mark spots from playGame()
    return {name, markSpot}
}

const player1 = player('player1');
const player2 = player('player2');
