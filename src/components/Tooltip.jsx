import React from 'react';
import '../styles/Tooltip.css'; // Import the CSS styles for the Tooltip component

function Tooltip({ position, text, children }) {
  // The Tooltip component receives three props:
  // - position: The desired position of the tooltip (top, bottom, left, right)
  // - text: The text content to be displayed inside the tooltip
  // - children: The React elements that trigger the tooltip when hovered over

  return (
    <div className={`tooltip ${position}`}>
      {/* The tooltip container */}
      {children}

      {/* The tooltip text */}
      <span className="tooltiptext">{text}</span>
    </div>
  );
}

export default Tooltip;
