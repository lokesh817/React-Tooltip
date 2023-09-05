import React, { useState } from 'react';

function Dropdown({ onDropdownChange }) {
  const [selectedOption, setSelectedOption] = useState('Top');

  const handleDropdownChange = (event) => {
    const position = event.target.value;
    setSelectedOption(position);
    onDropdownChange(position); // Call the callback function to update App state
  };

  return (
    <div>
      <label htmlFor="Position">Select Position:&nbsp;</label>
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
