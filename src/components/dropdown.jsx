import React, { useState } from 'react';

function Dropdown({ onDropdownChange }) {
  // State to track the selected dropdown option
  const [selectedOption, setSelectedOption] = useState('Top');

  // Event handler when the dropdown value changes
  const handleDropdownChange = (event) => {
    // Get the selected position from the event
    const position = event.target.value;
    
    // Update the selected option state
    setSelectedOption(position);
    
    // Call the provided callback function to notify the parent component
    onDropdownChange(position); 
  };

  return (
    <div>
      {/* Dropdown label */}
      <label htmlFor="Position">Select Position:&nbsp;</label>
      
      {/* Dropdown selection */}
      <select id="Position" onChange={handleDropdownChange} value={selectedOption}>
        <option value="Top">Top</option>
        <option value="Bottom">Bottom</option>
        <option value="Left">Left</option>
        <option value="Right">Right</option>
      </select>
    </div>
  );
}

export default Dropdown;
