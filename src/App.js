import React from 'react';
import Game from './page/game';
import { GridProvider } from './context/gridContext';

function App() {
  return (
    <GridProvider>
      <div className="App">
        <Game />
      </div>
    </GridProvider>
  );
}

export default App;
