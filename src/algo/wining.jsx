
import { initialGameBoard } from '../components/gameBoard.jsx';


const gameBoard = initialGameBoard.map(row => row.map(col => col));

const winingCombinations = [
    [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
    [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
    [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
    [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
    [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
    [{ row: 2, col: 0 }, { row: 1, col: 1 }, { row: 0, col: 2 }],
];



export default function Win({ turns }) {

    for (let turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    let winner = winning();

    return (
        <>
            {(winner !== "None") && <h3 >Winner is {winner}</h3>}
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
            };

        }


    }

    return winFlag;

}
