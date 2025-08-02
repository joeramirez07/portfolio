import React, { useState } from 'react';
import './App.css';

// Import components - make sure paths are correct
import Desktop from './components/Desktop/Desktop';
import TopBar from './components/Desktop/TopBar';
import OrientationPrompt from './components/OrientationPrompt';

function App() {
  const [activeWindow, setActiveWindow] = useState(null);

  return (
    <div className="App">
      <OrientationPrompt />
      <TopBar />
      <Desktop 
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
      />
    </div>
  );
}

export default App;