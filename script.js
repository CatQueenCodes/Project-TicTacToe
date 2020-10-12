const gameBoard = (() => {
    const board = ['', '', '', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'];
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

//when box is clicked, pushes players marker to the array index corrosponding to the box, and renders page to show marker in box. 
    //if that array position already contains a marker, don't let them play there
const playGame = (() =>{
    const spots = Array.from(document.getElementsByClassName('box'));
    const board = gameBoard.board;
    
    //when spot it clicked push player's marker to the corrospsong box position in the array 
    const markSpot = (e) => {
        const targetArrayIndex = board[`${e.target.id}`] ; console.log(targetArrayIndex); //sets the board square to the corrosponding array index

        if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, `${player.symbol}`)}; console.log(board); //sub SYMBOL for play Symbol
        renderMoves();
    }
    spots.forEach((box) => box.addEventListener('click', markSpot))
    
    return {markSpot}  
})();

//Creates player and allows them to make moves
const player = (name, symbol) => {
    const {markSpot} = playGame; //gives players the ability to mark spots from playGame()
    return {name, symbol, markSpot}
}

const player1 = player('player1', 'X');
const player2 = player('player2', 'O');