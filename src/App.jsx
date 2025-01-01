import Player from './components/player'
import GameBoard from './components/gameBoard.jsx';
import { useState } from 'react';
import Log from './components/log.jsx'; 
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, SetGameTurns] = useState([]);


  function handleActivePlayerChange(rowIndex, colIndex) {
    setActivePlayer((activePlayer) => activePlayer === 'X' ? 'O' : 'X');
    SetGameTurns(prevTurns => {

      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player == 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
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
      </div>
      <Log turns = {gameTurns}/>
    </main>
  );
}

export default App
