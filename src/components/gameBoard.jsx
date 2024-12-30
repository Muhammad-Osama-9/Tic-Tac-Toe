import { useState } from "react";

const initialGameBoard = [Array(3).fill(null),
Array(3).fill(null),
Array(3).fill(null)];

export default function GameBoard() {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare ()
    {
        setGameBoard()
    }
    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndx) => (
                            < li key={colIndx} >

                                <button>{playerSymbol}</button>

                            </li>
                        )

                        )}


                    </ol>
                </li>
            ))}

        </ol>

    );

}