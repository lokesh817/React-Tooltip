import React, { useState } from 'react';
import Tooltip from './Tooltip';
import Dropdown from './dropdown';
import '../styles/tooltip.css'; // Import the CSS file for the Tooltip component
import '../styles/App.css'; // Import the CSS file for the App component

function App() {
  // State to manage the selected position for the Tooltip
  const [selectedPosition, setSelectedPosition] = useState('Top');

  // Function to handle dropdown changes and update the selected position
  const handleDropdownChange = (position) => {
    setSelectedPosition(position);
  };

  return (
    <div className="App">
      <h1>Tooltip</h1>
      {/* Dropdown component to select the position for the Tooltip */}
      <Dropdown onDropdownChange={handleDropdownChange}></Dropdown>
      
      {/* Tooltip component with the selected position and text */}
      <Tooltip position={selectedPosition} text="Thanks for hovering! I am a tooltip">
        <button>Hover over me!</button>
      </Tooltip>
    </div>
  );
}

export default App;
