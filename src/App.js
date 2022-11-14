import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form  action="/cadastrar" method="POST" name="cadastrar">
          <label>Qual é seu nome?</label>
          <input type={Text} name="nome"></input>
      </form>
    </div>
  );
}

export default App;
