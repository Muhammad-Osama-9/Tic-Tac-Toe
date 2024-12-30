import Player from './components/player'
import GameBoard from './components/gameBoard.jsx';
import { useState } from 'react';

function App() {
const [activePlayer, setActivePlayer] = useState('X');

function handleActivePlayerChange() {
    setActivePlayer( (activePlayer) => activePlayer === 'X' ? 'O' : 'X');
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <li>
            <Player initialName="player 1" symbol="O" activeSymbol={activePlayer} />
          </li>
          <li>
            <Player initialName="Player 2" symbol="X" activeSymbol={activePlayer} />
          </li>
        </ol>
        <GameBoard active={handleActivePlayerChange} activeSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App
