
import { initialGameBoard } from '../components/gameBoard.jsx';


let gameBoard = initialGameBoard.map(row => row.map(col => col));

const winingCombinations = [
    [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
    [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
    [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
    [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
    [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
    [{ row: 2, col: 0 }, { row: 1, col: 1 }, { row: 0, col: 2 }],
    [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
    [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }]

];



export default function Win({ turns, rematch, winnerName, newGame }) {

    let currentPlayer = 'X';
    if (turns.length === 0) {
        gameBoard = initialGameBoard.map(row => row.map(col => col));
    }
    else {
        currentPlayer = turns[0].player;    
    }


    for (let turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }


    let winner = winning(currentPlayer);
    let winnerPlayer = null;
    if ((winner !== "None")) {
        if (winner === 'Draw')
            winnerPlayer = 'Draw';
        else
            winnerPlayer = winnerName[winner];
    }





    return (
        <>
            {(winner !== "None") && <div id="game-over" >
                <h2>Game Over </h2>
                <p>{winnerPlayer} {(winner !== "Draw") && <span>Won!</span>}</p>
                <div className="buttons">
                    <button onClick={rematch} >Rematch!</button>
                    <button onClick={newGame}>New Match</button>
                </div>
            </div>}
        </>
    );
}



function winning(symbol ) {
    let winFlag = "None";
    

    for (let i = 0; i < 3; i++) {



        if (symbol === null) continue;

        for (let comb of winingCombinations) {
            let win = true;
            for (let j = 0; j < comb.length; j++) {
                let row = comb[j].row;
                let col = comb[j].col;
                if (gameBoard[row][col] !== symbol) {
                    win = false;
                    break;
                }
            }
            if (win) {
                winFlag = symbol
                break;
            }


        }


    }
    let numOFNull = 0;
    if (winFlag === "None") {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameBoard[i][j] === null) {
                    numOFNull++;
                }
            }

        }
        if (numOFNull === 0) winFlag = "Draw";
    }
    console.log(winFlag);
    return winFlag;

}
