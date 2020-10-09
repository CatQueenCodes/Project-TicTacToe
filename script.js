

//when they select a spot, push x/o to that array position


const gameBoard = (() => {
    const gameboard = ['X0', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'];
    return {gameboard}
})();

const createPlayer = (name, symbol) => {
    return {name, symbol}
}

const displayController = (() =>{

})();

/* 3. Set up your HTML and write a JavaScript function that will render the contents of the gameboard array 
to the webpage (for now you can just manually fill in the array with "X"s and "O"s)
*/

//shows moves from gameboard[] on webpage and fills box with X marker in array
function renderMoves() {

    const board = gameBoard.gameboard

    for (let i=0; i<board.length; i++){
        console.log(board[i]);
        switch (board[i]) {
            case board[0]:
                const box0 = document.getElementById('box0');
                box0.textContent = board[i];
                break;
            case board[1]: 
                const box1 = document.getElementById('box1');
                box1.textContent = board[i];
                break;
            case board[2]: 
                const box2 = document.getElementById('box2');
                box2.textContent = board[i];
                break;
            case board[3]:
                const box3 = document.getElementById('box3');
                box3.textContent = board[i];
                break;
            case board[4]: 
                const box4 = document.getElementById('box4');
                box4.textContent = board[i];
                break;
            case board[5]: 
                const box5 = document.getElementById('box5');
                box5.textContent = board[i];
                break;
            case board[6]:
                    const box6 = document.getElementById('box6');
                    box6.textContent = board[i];
                    break;
            case board[7]: 
                    const box7 = document.getElementById('box7');
                    box7.textContent = board[i];
                    break;
            case board[8]: 
                const box8 = document.getElementById('box8');
                box8.textContent = board[i];
                break;
        //cases for each of the 9 array items to add content of them to the corrosponding squares in dom.
        }
    }
    console.log('rendered');
}

renderMoves();