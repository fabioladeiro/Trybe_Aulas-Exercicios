import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const content = [
    {id: 0, item: 'Divergente'},
    {id: 1, item: 'Insurgente'},
    {id: 2, item: 'Convergente'},
    {id: 3, item: 'Quatro'},
  ];
  return (
    <div className="App">
      <Dropdown content={content}>
        <h1>Lista de livros que vou ler nesse trimestre:</h1>
      </Dropdown>
    </div>
  );
}

export default App;
