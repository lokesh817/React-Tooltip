// src/components/Tooltip.js
import React from 'react';
import '../styles/Tooltip.css'; // Create this CSS file for styling

function Tooltip({ position, text, children }) {
  return (
    <div className={`tooltip ${position}`}>
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  );
}

export default Tooltip;
