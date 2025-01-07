import Player from './components/player'
import GameBoard from './components/gameBoard.jsx';
import { useState } from 'react';
import Log from './components/log.jsx';
import Win from './algo/wining.jsx';
import Ai from './algo/ai.jsx';


let aiTrig = false;




function App() {


  function determinePlayer(prevTurns) {


    let currentPlayer = 'X';
    aiTrig = false;
    if (prevTurns.length > 0 && prevTurns[0].player == 'X') {
      currentPlayer = 'O';
      if (aiFlag) {
        aiTrig = true;
      }
    }
    return currentPlayer;
  }

  const [aiFlag, setAiFlag] = useState(false);


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



  function handleAiFlag() {
    setAiFlag(true);
  }

  console.log(`Ai Flag : ${aiFlag}`);

  console.log(`Active Player  : ${activePlayer}`);
 

  return (

    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>

          <Player initialName="player 1" symbol="X" activeSymbol={activePlayer} onChangeName={handlePlayerName} />


          <Player initialName="Player 2" symbol="O" activeSymbol={activePlayer} onChangeName={handlePlayerName} isAI={handleAiFlag} />


        </ol>
        <GameBoard active={handleActivePlayerChange} turns={gameTurns} />
        <Win turns={gameTurns} rematch={handleRestart} winnerName={players} newGame={handleNewGame} />
      </div>

      <Ai turns={gameTurns} active={handleActivePlayerChange} isAI={aiTrig} />

      <Log turns={gameTurns} />
    </main>
  );
}

export default App