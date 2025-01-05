


export default function Ai ({board }) {
    const bestMove = findBestMove(board);

    return bestMove;
}

const AI = 'O';




function isMoveLeft(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === EMPTY) return true;
        }
    }
    return false;
}





function minimax(board, isMax, alpha, beta) {
    const evalResult = evaluate(board);
    if (evalResult !== 0) return evalResult;
    if (!isMoveLeft(board)) return 0;

    if (isMax) {
        let best = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === EMPTY) {
                    board[i][j] = AI;
                    best = Math.max(best, minimax(board, false, alpha, beta));
                    board[i][j] = EMPTY;
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
                if (board[i][j] === EMPTY) {
                    board[i][j] = HUMAN;
                    best = Math.min(best, minimax(board, true, alpha, beta));
                    board[i][j] = EMPTY;
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
            if (board[i][j] === EMPTY) {
                board[i][j] = AI;
                let moveVal = minimax(board, false, -1000, 1000);
                board[i][j] = EMPTY;
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

