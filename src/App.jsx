import Player from './components/player'
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player name="Muhammad" symbol="poool" />
          </li>
          <li>
            <Player name="ahmed" symbol="X" />
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App
