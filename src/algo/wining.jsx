
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



export default function Win({ turns, rematch }) {

    if (turns.length === 0) {
        gameBoard = initialGameBoard.map(row => row.map(col => col));
    }


    for (let turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let winner = winning();
    console.log(` Winnng File  ${winner}`);
    return (
        <>
            {(winner !== "None") && <div id="game-over" >
                <h2>Game Over </h2>
                <p>{winner} {(winner !== "Draw") && <span>Won!</span>}</p>
                <p><button onClick={rematch} >Rematch!</button></p>
            </div>}
        </>
    );
}



function winning() {
    let winFlag = "None";
    console.log(gameBoard);
    let symbol = gameBoard[0][0];

    for (let i = 0; i < 3; i++) {

        symbol = gameBoard[0][i];

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
