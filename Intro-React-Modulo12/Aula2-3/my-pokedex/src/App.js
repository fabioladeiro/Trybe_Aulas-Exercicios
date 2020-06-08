import React from 'react';
import './App.css';
import Pokedex from './pokedex';
import data from './data';
import Button from './button';

function App() {
  return (
    <div className="App">
      <h1>Enciclopédia dos Pokemons</h1>
      <Pokedex list={data} />
      <Button />
    </div>
  );
}

export default App;
