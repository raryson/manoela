import React, { Component } from 'react';
import loader from './loader.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={loader} className="App-logo" alt="logo" />
          <p>
           <strong>Manoela Fraga Rutkoski</strong>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
