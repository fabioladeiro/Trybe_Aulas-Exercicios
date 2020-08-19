import React from 'react';
import { useState } from 'react';
import { colors, PainterContext } from "../contexts/PainterContext";
import ColorPicker from "../ColorPicker";
import PaintGrid from "./PaintGrid";
import ColorPreview from "./ColorPreview";
import './App.css';

function App() {
  const [color, setColor] = useState(colors[0]);

  return (
    <div className="App container">
      <PainterContext.Provider value={{colors, color, setColor}}>
        <ColorPicker />
        <ColorPreview />
        <br />
        <PaintGrid />
      </PainterContext.Provider>
    </div>
  );
}

export default App;
