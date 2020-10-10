const gameBoard = (() => {
    const board = ['X0', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'];
    return {board}
})();

const createPlayer = (name, symbol) => {
    return {name, symbol}
}

//shows moves from gameboard[] in their corrosponding box in the browser
function renderMoves() {

    const board = gameBoard.board

    for (let i=0; i<board.length; i++){
        console.log(board[i]);
        switch (board[i]) {
            case board[0]:
                box0.textContent = board[i];
                break;
            case board[1]: 
                box1.textContent = board[i];
                break;
            case board[2]: 
                box2.textContent = board[i];
                break;
            case board[3]:
                box3.textContent = board[i];
                break;
            case board[4]: 
                box4.textContent = board[i];
                break;
            case board[5]: 
                box5.textContent = board[i];
                break;
            case board[6]:
                    box6.textContent = board[i];
                    break;
            case board[7]: 
                    box7.textContent = board[i];
                    break;
            case board[8]: 
                box8.textContent = board[i];
                break;
        }
    }
    console.log('rendered');
}

renderMoves();


//function that lets players add marker to specific spot on the board where they click
    //when spot it clicked push player's marker to the corrospsong box position in the array 
    //if that array position already contains a marker, don't let them play there
    

const playGame = (() =>{
    const spots = Array.from(document.getElementsByClassName('box'));
    spots.forEach((box) => box.addEventListener('click', markSpot))

    const board = gameBoard.board;

    const markSpot = (spot) => {
        //if that spot in the array already contains item - do nothing
        //if spot empty, push marker to that position in array and renderMoves();
    }

    return {markSpots}
    
})();


