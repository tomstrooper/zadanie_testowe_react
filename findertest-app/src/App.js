import logo from './logo.svg';
import './App.css';
import Linkimage from './Linkimage';
import bmw from './e46.jpg';
import pad from './gamepad.png';

function App() 

{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{display:'grid'}}
          >
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
