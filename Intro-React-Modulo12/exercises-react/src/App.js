import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayCompromissos = [ 'Aprender React','Fazer almoço', 'Limpar a casa','Ler livro', 'Estudar inglês'];

function App() {
  return (
    <div className="App">
      {(arrayCompromissos.map = (acc, curValue) => task(acc))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
