import { useEffect, useMemo } from 'react';


const AI = 'O';
const HUMAN = 'X';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function Ai({ active, turns, isAI }) {

    const gameBoard = useMemo(() => {
        let board = [...initialGameBoard.map(array => [...array])];
        for (let turn of turns) {
            const { square, player } = turn;
            const { row, col } = square;
            board[row][col] = player;
        }
        return board;
    }, [turns]);


    useEffect(() => {
        if (isAI) {

            setTimeout(() => {
                const bestMove = findBestMove(gameBoard);
                const { row, col } = bestMove;
                console.log(`Ai Best Move:`, bestMove);


                if (row !== -1 && col !== -1 && gameBoard[row][col] === null) {
                    active(row, col);
                }
            }, 500);
        }
    }, [isAI, gameBoard, active]);

    return null;
}


function evaluate(board) {

    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0] === AI ? 1 : -1;
        }
    }


    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== null && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            return board[0][j] === AI ? 1 : -1;
        }
    }


    if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0] === AI ? 1 : -1;
    }
    if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2] === AI ? 1 : -1;
    }


    return 0;
}


function isMoveLeft(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === null) return true;
        }
    }
    return false;
}


function isGameOver(board) {
    return evaluate(board) !== 0 || !isMoveLeft(board);
}



function minimax(board, isMax, alpha, beta, depth = 0) {
    if (isGameOver(board) || depth >= 5) {
        return evaluate(board);
    }

    if (isMax) {
        let best = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === null) {
                    board[i][j] = AI;
                    best = Math.max(best, minimax(board, false, alpha, beta, depth + 1));
                    board[i][j] = null;
                    alpha = Math.max(alpha, best);
                    if (beta <= alpha) break;
                }
            }
        }
        return best;
    } else {
        let best = 1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === null) {
                    board[i][j] = HUMAN;
                    best = Math.min(best, minimax(board, true, alpha, beta, depth + 1));
                    board[i][j] = null;
                    beta = Math.min(beta, best);
                    if (beta <= alpha) break;
                }
            }
        }
        return best;
    }
}


function findBestMove(board) {
    let bestVal = -1000;
    let bestMove = { row: -1, col: -1 };
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === null) {
                board[i][j] = AI;
                let moveVal = minimax(board, false, -1000, 1000);
                board[i][j] = null;
                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    bestMove.row = i;
                    bestMove.col = j;
                }
            }
        }
    }
    return bestMove;
}