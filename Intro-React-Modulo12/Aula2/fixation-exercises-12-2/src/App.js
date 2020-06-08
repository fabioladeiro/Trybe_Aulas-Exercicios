import React from 'react';
import './App.css';
import Image from './image';

function App() {
  return (
    <div className="App">
      <Image source={`https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg`} alternativeText={'Imagem de gatinho'}/>
    </div>
  );
}

export default App;
