import { FiSearch } from "react-icons/fi";
import './styles.css';


function App() {
  return (
    <div className="container">
      <h1 className="title">Localizador</h1>
      <div className="containerInput">
        <input type="text" placeholder="CEP..."></input>
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      <main className="main">
        <h2>CEP: 89211230</h2>
        <span>Rua Paulo Setubal</span>
        <span>Complemento: Casa</span>
        <span>Bairro Floresta</span>
        <span>Joinville - SC</span>
      </main>
    </div>
  );
}

export default App;
