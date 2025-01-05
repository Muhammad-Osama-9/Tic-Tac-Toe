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

  const [players, setPlayers] = useState({
    X: 'player 1',
    O: 'player 2'
  });


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

  function handleNewGame() {

    location.reload();

  }

  function handlePlayerName(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });

  }





  return (

    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>

          <Player initialName="player 1" symbol="X" activeSymbol={activePlayer} onChangeName={handlePlayerName} />


          <Player initialName="Player 2" symbol="O" activeSymbol={activePlayer} onChangeName={handlePlayerName}  />
         

        </ol>
        <GameBoard active={handleActivePlayerChange} turns={gameTurns} />
        <Win turns={gameTurns} rematch={handleRestart} winnerName={players} newGame={handleNewGame}  />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App