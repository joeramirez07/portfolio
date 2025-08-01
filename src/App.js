import React, { useState } from 'react';
import Desktop from './components/Desktop/Desktop';
import TopBar from './components/Desktop/TopBar';
import './App.css';

function App() {
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <div className="App">
      <TopBar />
      <Desktop 
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
      />
    </div>
  );
}

export default App;