import Player from './components/player'
import GameBoard from './components/gameBoard.jsx';
import { useState } from 'react';
import Log from './components/log.jsx';
import Win from './algo/wining.jsx';

function determinePlayer(prevTurns) {

  let currentPlayer = 'X';
  if (prevTurns.length > 0 && prevTurns[0].player == 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {

  const [gameTurns, SetGameTurns] = useState([]);

  const activePlayer = determinePlayer(gameTurns);

  function handleRestart() {
    SetGameTurns([]);

  }

  function handleActivePlayerChange(rowIndex, colIndex) {


    SetGameTurns(prevTurns => {



      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns];
      return updatedTurns;

    });


  }



  console.log(gameTurns);


  return (

    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>

          <Player initialName="player 1" symbol="O" activeSymbol={activePlayer} />


          <Player initialName="Player 2" symbol="X" activeSymbol={activePlayer} />

        </ol>
        <GameBoard active={handleActivePlayerChange} turns={gameTurns} />
        <Win turns={gameTurns} rematch={handleRestart} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App