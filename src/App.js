import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          </main>
          <h1>User Board</h1>
          <div>
            <div>User: <b>Carol</b></div>
            <p>"Carol is"<b>not</b>"present"</p>
            <button>Toggle</button>
            <div>User: <b>Bruno</b></div>
            <p>"Bruno is present"</p>
            <button>Toggle</button>
            <div>User: <b>Rodrigo</b></div>
            <p>"Rodrigo is present"</p>
            <button>Toggle</button>
            <div>User: <b>Celia</b></div>
            <p>"Celia is"<b>not</b>"present"</p>
            <button>Toggle</button>
            <div>User: <b>Aureliano</b></div>
            <p>"Aureliano is present"</p>
            <button>Toggle</button>
            <div>User: <b>Marilena</b></div>
            <p>"Marilena is"<b>not</b>"present"</p>
            <button>Toggle</button>
            {/* Edit <code>src/App.js</code> JUMP. */}
          </div>
          <h2>Welcome to Codaisseur</h2>
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
}

export default App;



