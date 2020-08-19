import React from 'react';
import './App.css';
import Pokedex from './pokedex';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>Enciclopédia dos Pokemons</h1>
      <Pokedex list={data} />
    </div>
  );
}

export default App;
