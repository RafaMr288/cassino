import './App.css';
import Anuncio from "./imgs/anuncio.png"
import Dragon from "./imgs/dragon.png"
import Tiger from "./imgs/tiger.png"
import Ox from "./imgs/ox.png"
import Mouse from "./imgs/mouse.png"

function App() {
  return (
    <div className="App">
      <header>
        <h1>RAFITA FORTUNE</h1>
        <div>
          <h4>SALDO: R$0</h4>
          <button id="bt1">Depositar</button>
          <button>ENTRAR</button>
        </div>
      </header>
      <div className="anuncio">
        <img src={Anuncio}></img>
      </div>
      <div className="games">
        <div className="games-1">
          <h1>Games PG Slot</h1>
        </div>
        <div className="game">
          <img src={Dragon}></img>
        </div>
        <div className="game">
          <img src={Tiger}></img>
        </div>
        <div className="game">
          <img src={Ox}></img>
        </div>
        <div className="game">
          <img src={Mouse}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
