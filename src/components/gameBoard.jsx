// import { useState } from "react";

export const initialGameBoard = [Array(3).fill(null),
Array(3).fill(null),
Array(3).fill(null)];


export default function GameBoard({ active, turns }) {
    let gameBoard = [...initialGameBoard.map(array => [...array])];


    for (let turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    console.log(gameBoard);


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            < li key={colIndex} >

                                <button onClick={() => active(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>

                            </li>
                        )

                        )}


                    </ol>
                </li>
            ))}

        </ol>

    );

}