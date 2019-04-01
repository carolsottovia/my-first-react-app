import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <main>
          <Title content="Some Simple Title" />
          </main>
          <p>
            Edit <code>src/App.js</code> JUMP.
          </p>
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

export default class Title extends Component {
  render() {
    return <h1>{ this.props.content }</h1>
  }
}
