const gameBoard = (() => {
    const board = ['', '', '', '', 'test', 'test', 'test', 'test', ''];
    //links each box square on the dom to the array position, testing this out, may not need boxes defined here
    return {board}
})();

const createPlayer = (name, symbol) => {
    return {name, symbol}
}

//shows moves from gameboard[] in their corrosponding box in the browser
function renderMoves() {

    const board = gameBoard.board;

    //Loop through every item  in board[] and push the value of it to the corrosponding box in DOM
    for (let i=0; i<board.length; i++){
        console.log(board[i]);
       
    }
    console.log('rendered');
}

renderMoves();


//when box is clicked, pushes players marker to the array index corrosponding to the box, and renders page to show marker in box. 
    //if that array position already contains a marker, don't let them play there
    

const playGame = (() =>{
    const spots = Array.from(document.getElementsByClassName('box'));
    
    const board = gameBoard.board;
    
    //when spot it clicked push player's marker to the corrospsong box position in the array 

    const markSpot = (e) => {
        const targetArrayIndex = board[`${e.target.id}`] ; console.log(targetArrayIndex);
        const targetBox = e.target; console.log(targetBox);

        if (targetArrayIndex === '') {board.splice(`${e.target.id}`,1, 'SYMBOL')}; console.log(board); //sub SYMBOL for play Symbol

        renderMoves();
        //if spot empty, push marker to that position in array and renderMoves();
    }
    spots.forEach((box) => box.addEventListener('click', markSpot))

    return {markSpot}
    
})();


//switch idea, get target, if target = box 0 -> if array[0] == "" push marker