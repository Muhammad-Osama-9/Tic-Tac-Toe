import Player from './components/player'
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player initialName="Muhammad" symbol="poool" />
          </li>
          <li>
            <Player initialName="ahmed" symbol="X" />
          </li>
        </ol>
      </div>
    </main>
  );
}

export default App
