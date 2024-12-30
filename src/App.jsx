import Player from './components/player'
import GameBoard from './components/gameBoard.jsx';


function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player initialName="palyer 1" symbol="O" />
          </li>
          <li>
            <Player initialName="Player 2" symbol="X" />
          </li>
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App
