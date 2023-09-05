import React, { useState } from 'react';
import Tooltip from './Tooltip';
import Dropdown from './dropdown';
import '../styles/tooltip.css'; // Create this CSS file for app-wide styles
import '../styles/App.css';
function App() {
  const [selectedPosition, setSelectedPosition] = useState('Top');

  const handleDropdownChange = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className="App">
      <h1>Tooltip</h1>
      <Dropdown onDropdownChange={handleDropdownChange}></Dropdown>
      
      <Tooltip position={selectedPosition} text=" Thanks for hovering! I am a tooltip">
        <button>Hover over me!</button>
      </Tooltip>
    </div>
  );
}

export default App;
