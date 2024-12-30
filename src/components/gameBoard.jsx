import { useState } from "react";

const initialGameBoard = [Array(3).fill(null),
Array(3).fill(null),
Array(3).fill(null)];

export default function GameBoard({ active, activeSymbol }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex, colIndex) {

        setGameBoard(prevGameBoard => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activeSymbol ;
            console.log(updatedGameBoard);
            return updatedGameBoard;
        });
    
        active();
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            < li key={colIndex} >

                                <button onClick={() => handleSelectSquare(rowIndex, colIndex, playerSymbol)}>{playerSymbol}</button>

                            </li>
                        )

                        )}


                    </ol>
                </li>
            ))}

        </ol>

    );

}